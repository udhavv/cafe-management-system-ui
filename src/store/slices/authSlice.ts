

// import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import { authService, LoginPayload, RegisterPayload, AdminLoginPayload } from "../../services/authService";

// interface AuthState {
//   email: string;
//   isAuthenticated: boolean;
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// const initialState: AuthState = {
//   email: "",
//   isAuthenticated: false,
//   status: "idle",
//   error: null,
// };

// export const loginUser = createAsyncThunk(
//   "auth/loginUser",
//   async (payload: LoginPayload, { rejectWithValue }) => {
//     try {
//       return await authService.login(payload);
//     } catch (err: any) {
//       return rejectWithValue(err.response?.data?.message || "Login failed");
//     }
//   }
// );

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (payload: RegisterPayload, { rejectWithValue }) => {
//     try {
//       return await authService.register(payload);
//     } catch (err: any) {
//       return rejectWithValue(err.response?.data?.message || "Registration failed");
//     }
//   }
// );



// export const loginAdmin = createAsyncThunk(
//   "auth/loginAdmin",
//   async (payload: AdminLoginPayload, { rejectWithValue }) => {
//     try {
//       return await authService.adminLogin(payload);
//     } catch (err: any) {
//       return rejectWithValue(err.response?.data?.message || "Admin login failed");
//     }
//   }
// );


// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout(state) {
//       state.email = "";
//       state.isAuthenticated = false;
//       state.status = "idle";
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // LOGIN
//       .addCase(loginUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
//         state.status = "succeeded";
//         state.email = action.payload.email;
//         state.isAuthenticated = true;
//       })
//       .addCase(loginUser.rejected, (state, action: any) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })

//       // REGISTER
//       .addCase(registerUser.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
//         state.status = "succeeded";
//         state.email = action.payload.email;
//         state.isAuthenticated = true;
//       })
//       .addCase(registerUser.rejected, (state, action: any) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })

//       .addCase(loginAdmin.pending, (state) => {
//         state.status= "loading"
//         state.error= null
//       })
//       .addCase(loginAdmin.fulfilled, (state, action: PayloadAction<any>) => {
//         state.status= "succeeded"
//         state.email= action.payload.username
//         state.isAuthenticated= true
//       })
//       .addCase(loginAdmin.rejected, (state, action: any) => {
//         state.status= "failed"
//         state.error= action.payload
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;



import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, getApiError } from "@/services/api";

/** Generic helper: preserve extra fields from backend */
export type AnyObj = Record<string, any>;

export interface AdminLoginPayload {
  email: string;
  password: string;
}

export type AdminLoginResponse = AnyObj & {
  success: boolean;
  token?: string;
  refreshToken?: string;
  user?: AnyObj; // keep everything
};

type AuthState = {
  admin: AnyObj | null;          // ✅ full admin user object
  isAuthenticated: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastResponse: AnyObj | null;   // ✅ store full response if you want
};

const initialState: AuthState = {
  admin: null,
  isAuthenticated: false,
  status: "idle",
  error: null,
  lastResponse: null,
};

export const loginAdmin = createAsyncThunk<
  AdminLoginResponse,
  AdminLoginPayload,
  { rejectValue: string }
>("auth/loginAdmin", async (payload, thunkApi) => {
  try {
    const { data } = await api.post("/api/auth/login", payload);
    return data;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Admin login failed"));
  }
});

export const fetchAdminProfile = createAsyncThunk<
  AnyObj,
  void,
  { rejectValue: string }
>("auth/fetchAdminProfile", async (_, thunkApi) => {
  try {
    const { data } = await api.get("/api/auth/profile");
    // your backend returns: { success: true, admin: {...} }
    return data.admin ?? data.user ?? data;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Not logged in"));
  }
});

export const logoutAdmin = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logoutAdmin",
  async (_, thunkApi) => {
    try {
      await api.post("/api/auth/logout");
    } catch (err: any) {
      return thunkApi.rejectWithValue(getApiError(err, "Logout failed"));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthError(state) {
      state.error = null;
    },
    setAdmin(state, action: PayloadAction<AnyObj | null>) {
      state.admin = action.payload;
      state.isAuthenticated = !!action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lastResponse = action.payload;
        // keep full admin user
        state.admin = action.payload.user ?? null;
        state.isAuthenticated = !!state.admin;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Admin login failed";
        state.isAuthenticated = false;
        state.admin = null;
      })

      .addCase(fetchAdminProfile.fulfilled, (state, action) => {
        state.admin = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchAdminProfile.rejected, (state) => {
        state.admin = null;
        state.isAuthenticated = false;
      })

      .addCase(logoutAdmin.fulfilled, (state) => {
        state.admin = null;
        state.isAuthenticated = false;
        state.status = "idle";
        state.error = null;
        state.lastResponse = null;
      });
  },
});

export const { clearAuthError, setAdmin } = authSlice.actions;
export default authSlice.reducer;
