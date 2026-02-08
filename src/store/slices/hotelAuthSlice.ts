// import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
// import axios from 'axios'

// interface HotelRegistrationData {
//   hotel_name: string
//   hotel_slug: string
//   admin_email: string
//   admin_password: string
//   admin_name: string
//   admin_phone: string
//   hotel_phone: string
//   hotel_address: string
//   city: string
//   country: string
//   timezone: string
//   currency: string
//   tax_rate: number
//   service_charge: number
//   subscription_plan_id: string
// }

// interface HotelRegistrationResponse {
//   success: boolean
//   message: string
//   hotel: {
//     id: string
//     hotel_slug: string
//     [key: string]: any
//   }
// }

// interface AuthState {
//   isAuthenticated: boolean
//   user: {
//     id: string
//     email: string
//     name: string
//     hotelName: string
//     hotelSlug: string
//     role: 'hotel_admin' | 'staff'
//   } | null
//   registration: {
//     loading: boolean
//     error: string | null
//     success: boolean
//   }
// }

// const initialState: AuthState = {
//   isAuthenticated: false,
//   user: null,
//   registration: {
//     loading: false,
//     error: null,
//     success: false,
//   },
// }

// export const registerHotel = createAsyncThunk(
//   'auth/registerHotel',
//   async (registrationData: HotelRegistrationData) => {
//     console.log('Registering hotel with data:', registrationData)
//     const response = await axios.post('http://localhost:4000/api/hotel/register', {
//       hotel: registrationData
//     })
//     return response.data
//   }
// )

// const authSlice = createSlice({
//   name: 'authHotel',
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<AuthState['user']>) => {
//       state.user = action.payload
//       state.isAuthenticated = !!action.payload
//     },
//     logout: (state) => {
//       state.user = null
//       state.isAuthenticated = false
//     },
//     clearRegistrationError: (state) => {
//       state.registration.error = null
//     },
//     resetRegistration: (state) => {
//       state.registration = initialState.registration
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerHotel.pending, (state) => {
//         state.registration.loading = true
//         state.registration.error = null
//         state.registration.success = false
//       })
//       .addCase(registerHotel.fulfilled, (state, action: PayloadAction<HotelRegistrationResponse>) => {
//         state.registration.loading = false
//         state.registration.success = action.payload.success
        
//         if (action.payload.success) {
//           // Auto-login after successful registration
//           state.isAuthenticated = true
//           state.user = {
//             id: action.payload.hotel.id,
//             email: action.payload.hotel.admin_email || '',
//             name: action.payload.hotel.admin_name || '',
//             hotelName: action.payload.hotel.hotel_name || '',
//             hotelSlug: action.payload.hotel.hotel_slug || '',
//             role: 'hotel_admin'
//           }
//         }
//       })
//       .addCase(registerHotel.rejected, (state, action) => {
//         state.registration.loading = false
//         state.registration.error = action.error.message || 'Registration failed'
//         state.registration.success = false
//       })
//   },
// })

// export const { setUser, logout, clearRegistrationError, resetRegistration } = authSlice.actions
// export default authSlice.reducer




// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { api, getApiError } from "@/services/api";

// export type AnyObj = Record<string, any>;

// export interface HotelRegistrationData {
//   hotel_name: string;
//   hotel_slug: string;
//   admin_email: string;
//   admin_password: string;
//   admin_name: string;
//   admin_phone: string;
//   hotel_phone: string;
//   hotel_address: string;
//   city: string;
//   country: string;
//   timezone: string;
//   currency: string;
//   tax_rate: number;
//   service_charge: number;
//   subscription_plan_id: string;
// }

// export type RegisterHotelResponse = AnyObj & {
//   success: boolean;
//   token?: string;     // (you may move to cookie later)
//   hotel?: AnyObj;     // ✅ full hotel
//   message?: string;
// };

// export type LoginHotelResponse = AnyObj & {
//   success: boolean;
//   hotelToken?: string;
//   hotel?: AnyObj;     // ✅ full hotel
// };

// type HotelAuthState = {
//   hotel: AnyObj | null;          // ✅ full hotel row
//   isAuthenticated: boolean;

//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;

//   lastResponse: AnyObj | null;   // ✅ store full response
// };

// const initialState: HotelAuthState = {
//   hotel: null,
//   isAuthenticated: false,
//   status: "idle",
//   error: null,
//   lastResponse: null,
// };

// export const registerHotel = createAsyncThunk<
//   RegisterHotelResponse,
//   HotelRegistrationData,
//   { rejectValue: string }
// >("hotelAuth/registerHotel", async (payload, thunkApi) => {
//   try {
//     const { data } = await api.post("/api/hotel/register", { hotel: payload });
//     return data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Registration failed"));
//   }
// });

// export const loginHotel = createAsyncThunk<
//   LoginHotelResponse,
//   { email: string; password: string },
//   { rejectValue: string }
// >("hotelAuth/loginHotel", async (payload, thunkApi) => {
//   try {
//     console.log('loginHotel payload:- ', payload)
//     const { data } = await api.post("/api/hotel/login", payload);
//     console.log('loginHotel response data:- ', data)
//     return data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Login failed"));
//   }
// });

// export const fetchMyHotel = createAsyncThunk<
//   AnyObj,
//   void,
//   { rejectValue: string }
// >("hotelAuth/fetchMyHotel", async (_, thunkApi) => {
//   try {
//     const { data } = await api.get("/api/hotel/me");
//     return data.hotel ?? data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Not logged in"));
//   }
// });

// export const logoutHotel = createAsyncThunk<void, void, { rejectValue: string }>(
//   "hotelAuth/logoutHotel",
//   async (_, thunkApi) => {
//     try {
//       await api.post("/api/hotel/logout");
//     } catch (err: any) {
//       return thunkApi.rejectWithValue(getApiError(err, "Logout failed"));
//     }
//   }
// );

// const hotelAuthSlice = createSlice({
//   name: "hotelAuth",
//   initialState,
//   reducers: {
//     clearHotelAuthError(state) {
//       state.error = null;
//     },
//     setHotel(state, action: PayloadAction<AnyObj | null>) {
//       state.hotel = action.payload;
//       state.isAuthenticated = !!action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // REGISTER
//       .addCase(registerHotel.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(registerHotel.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.lastResponse = action.payload;

//         // ✅ keep ALL hotel fields
//         state.hotel = action.payload.hotel ?? null;
//         state.isAuthenticated = !!state.hotel;
//       })
//       .addCase(registerHotel.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload || "Registration failed";
//         state.hotel = null;
//         state.isAuthenticated = false;
//       })

//       // LOGIN
//       .addCase(loginHotel.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(loginHotel.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.lastResponse = action.payload;

//         state.hotel = action.payload.hotel ?? null;
//         state.isAuthenticated = !!state.hotel;
//       })
//       .addCase(loginHotel.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload || "Login failed";
//         state.hotel = null;
//         state.isAuthenticated = false;
//       })

//       // ME
//       .addCase(fetchMyHotel.fulfilled, (state, action) => {
//         state.hotel = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(fetchMyHotel.rejected, (state) => {
//         state.hotel = null;
//         state.isAuthenticated = false;
//       })

//       // LOGOUT
//       .addCase(logoutHotel.fulfilled, (state) => {
//         state.hotel = null;
//         state.isAuthenticated = false;
//         state.status = "idle";
//         state.error = null;
//         state.lastResponse = null;
//       });
//   },
// });

// export const { clearHotelAuthError, setHotel } = hotelAuthSlice.actions;
// export default hotelAuthSlice.reducer;








// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { api, getApiError } from "@/services/api";

// export type AnyObj = Record<string, any>;

// export interface HotelRegistrationData {
//   hotel_name: string;
//   hotel_slug: string;
//   admin_email: string;
//   admin_password: string;
//   admin_name: string;
//   admin_phone: string;
//   hotel_phone: string;
//   hotel_address: string;
//   city: string;
//   country: string;
//   timezone: string;
//   currency: string;
//   tax_rate: number;
//   service_charge: number;
//   subscription_plan_id: string;
// }

// export type RegisterHotelResponse = AnyObj & {
//   success: boolean;
//   token?: string;
//   hotel?: AnyObj;
//   message?: string;
//   session?: {
//     id: string;
//     expires_at: string;
//     is_remembered: boolean;
//   };
//   redirect_to?: string;
// };

// export type LoginHotelResponse = AnyObj & {
//   success: boolean;
//   hotelToken?: string;
//   hotel?: AnyObj;
//   message?: string;
//   session?: {
//     id: string;
//     expires_at: string;
//     is_remembered: boolean;
//   };
//   redirect_to?: string;
//   token?: string;
// };

// type HotelAuthState = {
//   hotel: AnyObj | null;
//   isAuthenticated: boolean;
//   session: {
//     id: string | null;
//     expires_at: string | null;
//     is_remembered: boolean;
//   } | null;
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
//   lastResponse: AnyObj | null;
//   redirectTo: string | null;
// };

// const initialState: HotelAuthState = {
//   hotel: null,
//   isAuthenticated: false,
//   session: null,
//   status: "idle",
//   error: null,
//   lastResponse: null,
//   redirectTo: null,
// };

// export const registerHotel = createAsyncThunk<
//   RegisterHotelResponse,
//   HotelRegistrationData,
//   { rejectValue: string }
// >("hotelAuth/registerHotel", async (payload, thunkApi) => {
//   try {
//     const { data } = await api.post("/api/hotel/register", { hotel: payload });
//     return data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Registration failed"));
//   }
// });

// export const loginHotel = createAsyncThunk<
//   LoginHotelResponse,
//   { email: string; password: string; rememberMe?: boolean },
//   { rejectValue: { message: string; error?: string; retryAfter?: number; lockoutExpires?: string } }
// >("hotelAuth/loginHotel", async (payload, thunkApi) => {
//   try {
//     const { data } = await api.post("/api/hotel/login", payload);
    
//     // Check for specific error responses
//     if (!data.success && data.error) {
//       return thunkApi.rejectWithValue({
//         message: data.message || "Login failed",
//         error: data.error,
//         retryAfter: data.retryAfter,
//         lockoutExpires: data.lockoutExpires
//       });
//     }
    
//     return data;
//   } catch (err: any) {
//     // Parse error response for better error messages
//     const errorData = err.response?.data;
//     if (errorData && errorData.error) {
//       return thunkApi.rejectWithValue({
//         message: errorData.message || "Login failed",
//         error: errorData.error,
//         retryAfter: errorData.retryAfter,
//         lockoutExpires: errorData.lockoutExpires
//       });
//     }
    
//     return thunkApi.rejectWithValue({
//       message: getApiError(err, "Login failed")
//     });
//   }
// });

// export const fetchMyHotel = createAsyncThunk<
//   AnyObj,
//   void,
//   { rejectValue: string }
// >("hotelAuth/fetchMyHotel", async (_, thunkApi) => {
//   try {
//     const { data } = await api.get("/api/hotel/me");
//     return data.hotel ?? data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Not logged in"));
//   }
// });

// export const logoutHotel = createAsyncThunk<void, void, { rejectValue: string }>(
//   "hotelAuth/logoutHotel",
//   async (_, thunkApi) => {
//     try {
//       await api.post("/api/hotel/logout");
//     } catch (err: any) {
//       return thunkApi.rejectWithValue(getApiError(err, "Logout failed"));
//     }
//   }
// );

// export const refreshSession = createAsyncThunk<
//   LoginHotelResponse,
//   void,
//   { rejectValue: string }
// >("hotelAuth/refreshSession", async (_, thunkApi) => {
//   try {
//     const { data } = await api.post("/api/auth/refresh");
//     return data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Session refresh failed"));
//   }
// });

// const hotelAuthSlice = createSlice({
//   name: "hotelAuth",
//   initialState,
//   reducers: {
//     clearHotelAuthError(state) {
//       state.error = null;
//     },
//     setHotel(state, action: PayloadAction<AnyObj | null>) {
//       state.hotel = action.payload;
//       state.isAuthenticated = !!action.payload;
//     },
//     setRedirectTo(state, action: PayloadAction<string | null>) {
//       state.redirectTo = action.payload;
//     },
//     clearRedirectTo(state) {
//       state.redirectTo = null;
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // REGISTER
//       .addCase(registerHotel.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(registerHotel.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.lastResponse = action.payload;
//         state.hotel = action.payload.hotel ?? null;
//         state.isAuthenticated = !!state.hotel;
//         state.session = action.payload.session || null;
//         state.redirectTo = action.payload.redirect_to || null;
//       })
//       .addCase(registerHotel.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload || "Registration failed";
//         state.hotel = null;
//         state.isAuthenticated = false;
//       })

//       // LOGIN
//       .addCase(loginHotel.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(loginHotel.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.lastResponse = action.payload;
//         state.hotel = action.payload.hotel ?? null;
//         state.isAuthenticated = !!state.hotel;
//         state.session = action.payload.session || null;
//         state.redirectTo = action.payload.redirect_to || null;
//       })
//       .addCase(loginHotel.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload?.message || "Login failed";
//         state.hotel = null;
//         state.isAuthenticated = false;
//       })

//       // ME
//       .addCase(fetchMyHotel.fulfilled, (state, action) => {
//         state.hotel = action.payload;
//         state.isAuthenticated = true;
//       })
//       .addCase(fetchMyHotel.rejected, (state) => {
//         state.hotel = null;
//         state.isAuthenticated = false;
//       })

//       // LOGOUT
//       .addCase(logoutHotel.fulfilled, (state) => {
//         state.hotel = null;
//         state.isAuthenticated = false;
//         state.session = null;
//         state.status = "idle";
//         state.error = null;
//         state.lastResponse = null;
//         state.redirectTo = null;
//       })

//       // REFRESH SESSION
//       .addCase(refreshSession.fulfilled, (state, action) => {
//         state.hotel = action.payload.hotel ?? null;
//         state.isAuthenticated = !!state.hotel;
//         state.session = action.payload.session || null;
//       })
//       .addCase(refreshSession.rejected, (state) => {
//         state.hotel = null;
//         state.isAuthenticated = false;
//         state.session = null;
//       });
//   },
// });

// export const { clearHotelAuthError, setHotel, setRedirectTo, clearRedirectTo } = hotelAuthSlice.actions;
// export default hotelAuthSlice.reducer;




// // store/slices/hotelAuthSlice.ts
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { api, getApiError } from "@/services/api";
// import Cookies from 'js-cookie';

// export type AnyObj = Record<string, any>;

// // Add new interfaces for auth status
// export interface AuthStatusResponse {
//   success: boolean;
//   isAuthenticated: boolean;
//   user?: {
//     role: string;
//     id: string;
//     hotel_slug: string;
//     hotel_name: string;
//     admin_email: string;
//     admin_name: string;
//     subscription_status: string;
//   };
//   hotel?: AnyObj;
//   message?: string;
// }

// export interface HotelRegistrationData {
//   hotel_name: string;
//   hotel_slug: string;
//   admin_email: string;
//   admin_password: string;
//   admin_name: string;
//   admin_phone: string;
//   hotel_phone: string;
//   hotel_address: string;
//   city: string;
//   country: string;
//   timezone: string;
//   currency: string;
//   tax_rate: number;
//   service_charge: number;
//   subscription_plan_id: string;
// }

// export type RegisterHotelResponse = AnyObj & {
//   success: boolean;
//   hotel_slug?: string;
//   hotel?: AnyObj;
//   message?: string;
//   session?: {
//     id: string;
//     expires_at: string;
//     is_remembered: boolean;
//   };
//   redirect_to?: string;
// };

// export type LoginHotelResponse = AnyObj & {
//   success: boolean;
//   hotel_slug?: string;
//   hotel?: AnyObj;
//   message?: string;
//   session?: {
//     id: string;
//     expires_at: string;
//     is_remembered: boolean;
//   };
//   redirect_to?: string;
//   token?: string;
// };

// type HotelAuthState = {
//   hotel: AnyObj | null;
//   hotelSlug: string | null;
//   isAuthenticated: boolean;
//   session: {
//     id: string | null;
//     expires_at: string | null;
//     is_remembered: boolean;
//   } | null;
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
//   lastResponse: AnyObj | null;
//   redirectTo: string | null;
//   authCheckLoading: boolean;
// };

// const initialState: HotelAuthState = {
//   hotel: null,
//   hotelSlug: null,
//   isAuthenticated: false,
//   session: null,
//   status: "idle",
//   error: null,
//   lastResponse: null,
//   redirectTo: null,
//   authCheckLoading: true, // Start with loading for initial auth check
// };

// export const checkAuthStatus = createAsyncThunk<
//   AuthStatusResponse,
//   void,
//   { rejectValue: string }
// >("hotelAuth/checkAuthStatus", async (_, thunkApi) => {
//   try {
//     const { data } = await api.get("/api/hotel/auth/status", {
//       withCredentials: true // Important for sending cookies
//     });
//     return data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Auth check failed"));
//   }
// });

// export const registerHotel = createAsyncThunk<
//   RegisterHotelResponse,
//   HotelRegistrationData,
//   { rejectValue: string }
// >("hotelAuth/registerHotel", async (payload, thunkApi) => {
//   try {
//     const { data } = await api.post("/api/hotel/register", { hotel: payload });
//     return data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Registration failed"));
//   }
// });

// export const loginHotel = createAsyncThunk<
//   LoginHotelResponse,
//   { email: string; password: string; rememberMe?: boolean },
//   { rejectValue: { message: string; error?: string; retryAfter?: number; lockoutExpires?: string } }
// >("hotelAuth/loginHotel", async (payload, thunkApi) => {
//   try {
//     const { data } = await api.post("/api/hotel/login", payload, {
//       withCredentials: true // Important for receiving cookies
//     });
    
//     // Check for specific error responses
//     if (!data.success && data.error) {
//       return thunkApi.rejectWithValue({
//         message: data.message || "Login failed",
//         error: data.error,
//         retryAfter: data.retryAfter,
//         lockoutExpires: data.lockoutExpires
//       });
//     }
    
//     return data;
//   } catch (err: any) {
//     // Parse error response for better error messages
//     const errorData = err.response?.data;
//     if (errorData && errorData.error) {
//       return thunkApi.rejectWithValue({
//         message: errorData.message || "Login failed",
//         error: errorData.error,
//         retryAfter: errorData.retryAfter,
//         lockoutExpires: errorData.lockoutExpires
//       });
//     }
    
//     return thunkApi.rejectWithValue({
//       message: getApiError(err, "Login failed")
//     });
//   }
// });

// export const fetchMyHotel = createAsyncThunk<
//   AnyObj,
//   void,
//   { rejectValue: string }
// >("hotelAuth/fetchMyHotel", async (_, thunkApi) => {
//   try {
//     const { data } = await api.get("/api/hotel/me", {
//       withCredentials: true
//     });
//     console.log('thisi is the hotel from frontend:- ', data)
//     return data.hotel ?? data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Not logged in"));
//   }
// });

// export const logoutHotel = createAsyncThunk<void, void, { rejectValue: string }>(
//   "hotelAuth/logoutHotel",
//   async (_, thunkApi) => {
//     try {
//       await api.post("/api/hotel/logout", {}, {
//         withCredentials: true
//       });
//     } catch (err: any) {
//       return thunkApi.rejectWithValue(getApiError(err, "Logout failed"));
//     }
//   }
// );

// export const refreshSession = createAsyncThunk<
//   LoginHotelResponse,
//   void,
//   { rejectValue: string }
// >("hotelAuth/refreshSession", async (_, thunkApi) => {
//   try {
//     const { data } = await api.post("/api/auth/refresh", {}, {
//       withCredentials: true
//     });
//     return data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Session refresh failed"));
//   }
// });

// const hotelAuthSlice = createSlice({
//   name: "hotelAuth",
//   initialState,
//   reducers: {
//     clearHotelAuthError(state) {
//       state.error = null;
//     },
//     setHotel(state, action: PayloadAction<AnyObj | null>) {
//       state.hotel = action.payload;
//       state.isAuthenticated = !!action.payload;
//     },
//     setHotelSlug(state, action: PayloadAction<string | null>) {
//       state.hotelSlug = action.payload;
//       if (action.payload) {
//         // Store in cookie for frontend access
//         Cookies.set('hotel_slug', action.payload, {
//           expires: 7,
//           path: '/',
//           secure: process.env.NODE_ENV === 'production',
//           sameSite: 'lax'
//         });
//       } else {
//         Cookies.remove('hotel_slug');
//       }
//     },
//     setRedirectTo(state, action: PayloadAction<string | null>) {
//       state.redirectTo = action.payload;
//     },
//     clearRedirectTo(state) {
//       state.redirectTo = null;
//     },
//     setAuthCheckComplete(state) {
//       state.authCheckLoading = false;
//     },
//     clearAuthState(state) {
//       state.hotel = null;
//       state.hotelSlug = null;
//       state.isAuthenticated = false;
//       state.session = null;
//       state.status = "idle";
//       state.error = null;
//       state.lastResponse = null;
//       state.redirectTo = null;
//       Cookies.remove('hotel_slug');
//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       // CHECK AUTH STATUS
//       .addCase(checkAuthStatus.pending, (state) => {
//         state.authCheckLoading = true;
//         state.error = null;
//       })
//       .addCase(checkAuthStatus.fulfilled, (state, action) => {
//         state.authCheckLoading = false;
//         if (action.payload.success && action.payload.isAuthenticated) {
//           state.hotel = action.payload.hotel || action.payload.user || null;
//           state.hotelSlug = action.payload.user?.hotel_slug || state.hotelSlug;
//           state.isAuthenticated = true;
          
//           // Update cookie if we got a hotel slug
//           if (action.payload.user?.hotel_slug && !Cookies.get('hotel_slug')) {
//             Cookies.set('hotel_slug', action.payload.user.hotel_slug, {
//               expires: 7,
//               path: '/',
//               secure: process.env.NODE_ENV === 'production',
//               sameSite: 'lax'
//             });
//             state.hotelSlug = action.payload.user.hotel_slug;
//           }
//         } else {
//           state.hotel = null;
//           state.hotelSlug = null;
//           state.isAuthenticated = false;
//           Cookies.remove('hotel_slug');
//         }
//       })
//       .addCase(checkAuthStatus.rejected, (state) => {
//         state.authCheckLoading = false;
//         state.hotel = null;
//         state.hotelSlug = null;
//         state.isAuthenticated = false;
//         Cookies.remove('hotel_slug');
//       })

//       // REGISTER
//       .addCase(registerHotel.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(registerHotel.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.lastResponse = action.payload;
//         state.hotel = action.payload.hotel ?? null;
//         state.hotelSlug = action.payload.hotel_slug || action.payload.hotel?.hotel_slug;
//         state.isAuthenticated = !!state.hotel;
//         state.session = action.payload.session || null;
//         state.redirectTo = action.payload.redirect_to || null;
        
//         // Set hotel slug cookie
//         if (state.hotelSlug) {
//           Cookies.set('hotel_slug', state.hotelSlug, {
//             expires: 7,
//             path: '/',
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: 'lax'
//           });
//         }
//       })
//       .addCase(registerHotel.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload || "Registration failed";
//         state.hotel = null;
//         state.hotelSlug = null;
//         state.isAuthenticated = false;
//       })

//       // LOGIN
//       .addCase(loginHotel.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(loginHotel.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.lastResponse = action.payload;
//         state.hotel = action.payload.hotel ?? null;
//         state.hotelSlug = action.payload.hotel_slug || action.payload.hotel?.hotel_slug;
//         state.isAuthenticated = !!state.hotel;
//         state.session = action.payload.session || null;
//         state.redirectTo = action.payload.redirect_to || null;
        
//         // Set hotel slug cookie
//         if (state.hotelSlug) {
//           Cookies.set('hotel_slug', state.hotelSlug, {
//             expires: action.payload.session?.is_remembered ? 30 : 7,
//             path: '/',
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: 'lax'
//           });
//         }
//       })
//       .addCase(loginHotel.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload?.message || "Login failed";
//         state.hotel = null;
//         state.hotelSlug = null;
//         state.isAuthenticated = false;
//       })

//       // ME
//       .addCase(fetchMyHotel.fulfilled, (state, action) => {
//         state.hotel = action.payload;
//         state.hotelSlug = action.payload.hotel_slug || state.hotelSlug;
//         state.isAuthenticated = true;
//       })
//       .addCase(fetchMyHotel.rejected, (state) => {
//         state.hotel = null;
//         state.hotelSlug = null;
//         state.isAuthenticated = false;
//         Cookies.remove('hotel_slug');
//       })

//       // LOGOUT
//       .addCase(logoutHotel.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(logoutHotel.fulfilled, (state) => {
//         state.hotel = null;
//         state.hotelSlug = null;
//         state.isAuthenticated = false;
//         state.session = null;
//         state.status = "idle";
//         state.error = null;
//         state.lastResponse = null;
//         state.redirectTo = null;
//         Cookies.remove('hotel_slug');
//       })
//       .addCase(logoutHotel.rejected, (state) => {
//         // Even if API call fails, clear local state
//         state.hotel = null;
//         state.hotelSlug = null;
//         state.isAuthenticated = false;
//         state.session = null;
//         state.status = "idle";
//         Cookies.remove('hotel_slug');
//       })

//       // REFRESH SESSION
//       .addCase(refreshSession.fulfilled, (state, action) => {
//         state.hotel = action.payload.hotel ?? null;
//         state.hotelSlug = action.payload.hotel_slug || state.hotelSlug;
//         state.isAuthenticated = !!state.hotel;
//         state.session = action.payload.session || null;
//       })
//       .addCase(refreshSession.rejected, (state) => {
//         state.hotel = null;
//         state.hotelSlug = null;
//         state.isAuthenticated = false;
//         state.session = null;
//         Cookies.remove('hotel_slug');
//       });
//   },
// });

// export const { 
//   clearHotelAuthError, 
//   setHotel, 
//   setHotelSlug,
//   setRedirectTo, 
//   clearRedirectTo,
//   setAuthCheckComplete,
//   clearAuthState
// } = hotelAuthSlice.actions;

// export default hotelAuthSlice.reducer;









// store/slices/hotelAuthSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, getApiError } from "@/services/api";
import Cookies from 'js-cookie';

export type AnyObj = Record<string, any>;

// Add new interfaces for auth status
export interface AuthStatusResponse {
  success: boolean;
  isAuthenticated: boolean;
  user?: {
    role: string;
    id: string;
    hotel_slug: string;
    hotel_name: string;
    admin_email: string;
    admin_name: string;
    subscription_status: string;
  };
  hotel?: AnyObj;
  message?: string;
}

export interface HotelRegistrationData {
  hotel_name: string;
  hotel_slug: string;
  admin_email: string;
  admin_password: string;
  admin_name: string;
  admin_phone?: string;
  hotel_phone?: string;
  hotel_address?: string;
  city?: string;
  country?: string;
  timezone?: string;
  currency?: string;
  tax_rate?: number;
  service_charge?: number;
  subscription_plan_id?: string;
}

export type RegisterHotelResponse = AnyObj & {
  success: boolean;
  hotel_slug?: string;
  hotel?: AnyObj;
  message?: string;
  session?: {
    id: string;
    expires_at: string;
    is_remembered: boolean;
  };
  redirect_to?: string;
};

export type LoginHotelResponse = AnyObj & {
  success: boolean;
  hotel_slug?: string;
  hotel?: AnyObj;
  message?: string;
  session?: {
    id: string;
    expires_at: string;
    is_remembered: boolean;
  };
  redirect_to?: string;
  token?: string;
};

// Hotel interface matching your database schema
export interface Hotel {
  id: string;
  hotel_name: string;
  hotel_slug: string;
  admin_email: string;
  admin_name: string;
  admin_phone?: string;
  hotel_phone?: string;
  hotel_address?: string;
  city?: string;
  country?: string;
  timezone: string;
  currency: string;
  tax_rate: number;
  service_charge: number;
  subscription_status: 'trial' | 'active' | 'suspended' | 'cancelled';
  subscription_plan?: string;
  subscription_start_date?: string;
  subscription_end_date?: string;
  trial_ends_at?: string;
  max_staff_allowed?: number;
  max_tables_allowed?: number;
  max_menu_items_allowed?: number;
  is_active: boolean;
  is_verified: boolean;
  last_login?: string;
  created_at: string;
  updated_at: string;
}

type HotelAuthState = {
  hotel: Hotel | null;
  hotelSlug: string | null;
  isAuthenticated: boolean;
  session: {
    id: string | null;
    expires_at: string | null;
    is_remembered: boolean;
  } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  lastResponse: AnyObj | null;
  redirectTo: string | null;
  authCheckLoading: boolean;
  loading: boolean;
};

const initialState: HotelAuthState = {
  hotel: null,
  hotelSlug: null,
  isAuthenticated: false,
  session: null,
  status: "idle",
  error: null,
  lastResponse: null,
  redirectTo: null,
  authCheckLoading: true, // Start with loading for initial auth check
  loading: false,
};

export const checkAuthStatus = createAsyncThunk<
  AuthStatusResponse,
  void,
  { rejectValue: string }
>("hotelAuth/checkAuthStatus", async (_, thunkApi) => {
  try {
    const { data } = await api.get("/api/hotel/auth/status", {
      withCredentials: true // Important for sending cookies
    });
    return data;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Auth check failed"));
  }
});

export const registerHotel = createAsyncThunk<
  RegisterHotelResponse,
  HotelRegistrationData,
  { rejectValue: string }
>("hotelAuth/registerHotel", async (payload, thunkApi) => {
  try {
    const { data } = await api.post("/api/hotel/register", { hotel: payload });
    return data;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Registration failed"));
  }
});

export const loginHotel = createAsyncThunk<
  LoginHotelResponse,
  { email: string; password: string; rememberMe?: boolean },
  { rejectValue: { message: string; error?: string; retryAfter?: number; lockoutExpires?: string } }
>("hotelAuth/loginHotel", async (payload, thunkApi) => {
  try {
    const { data } = await api.post("/api/hotel/login", payload, {
      withCredentials: true // Important for receiving cookies
    });
    
    // Check for specific error responses
    if (!data.success && data.error) {
      return thunkApi.rejectWithValue({
        message: data.message || "Login failed",
        error: data.error,
        retryAfter: data.retryAfter,
        lockoutExpires: data.lockoutExpires
      });
    }
    
    return data;
  } catch (err: any) {
    // Parse error response for better error messages
    const errorData = err.response?.data;
    if (errorData && errorData.error) {
      return thunkApi.rejectWithValue({
        message: errorData.message || "Login failed",
        error: errorData.error,
        retryAfter: errorData.retryAfter,
        lockoutExpires: errorData.lockoutExpires
      });
    }
    
    return thunkApi.rejectWithValue({
      message: getApiError(err, "Login failed")
    });
  }
});

export const fetchMyHotel = createAsyncThunk<
  Hotel,
  void,
  { rejectValue: string }
>("hotelAuth/fetchMyHotel", async (_, thunkApi) => {
  try {
    const { data } = await api.get("/api/hotel/me", {
      withCredentials: true
    });
    console.log('Hotel data from backend:- ', data)
    return data.hotel ?? data;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Not logged in"));
  }
});

export const logoutHotel = createAsyncThunk<void, void, { rejectValue: string }>(
  "hotelAuth/logoutHotel",
  async (_, thunkApi) => {
    try {
      await api.post("/api/hotel/logout", {}, {
        withCredentials: true
      });
    } catch (err: any) {
      return thunkApi.rejectWithValue(getApiError(err, "Logout failed"));
    }
  }
);

export const refreshSession = createAsyncThunk<
  LoginHotelResponse,
  void,
  { rejectValue: string }
>("hotelAuth/refreshSession", async (_, thunkApi) => {
  try {
    const { data } = await api.post("/api/auth/refresh", {}, {
      withCredentials: true
    });
    return data;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Session refresh failed"));
  }
});

export const updateHotelProfile = createAsyncThunk<
  Hotel,
  Partial<Hotel>,
  { rejectValue: string }
>("hotelAuth/updateHotelProfile", async (hotelData, thunkApi) => {
  try {
    const { data } = await api.put("/api/hotel/profile", hotelData, {
      withCredentials: true
    });
    
    // Update hotel in state
    return data.hotel || data;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to update profile"));
  }
});

const hotelAuthSlice = createSlice({
  name: "hotelAuth",
  initialState,
  reducers: {
    clearHotelAuthError(state) {
      state.error = null;
    },
    setHotel(state, action: PayloadAction<Hotel | null>) {
      state.hotel = action.payload;
      state.isAuthenticated = !!action.payload;
      if (action.payload?.hotel_slug) {
        state.hotelSlug = action.payload.hotel_slug;
      }
    },
    setHotelSlug(state, action: PayloadAction<string | null>) {
      state.hotelSlug = action.payload;
      if (action.payload) {
        // Store in cookie for frontend access
        Cookies.set('hotel_slug', action.payload, {
          expires: 7,
          path: '/',
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'lax'
        });
      } else {
        Cookies.remove('hotel_slug');
      }
    },
    setRedirectTo(state, action: PayloadAction<string | null>) {
      state.redirectTo = action.payload;
    },
    clearRedirectTo(state) {
      state.redirectTo = null;
    },
    setAuthCheckComplete(state) {
      state.authCheckLoading = false;
    },
    clearAuthState(state) {
      state.hotel = null;
      state.hotelSlug = null;
      state.isAuthenticated = false;
      state.session = null;
      state.status = "idle";
      state.error = null;
      state.lastResponse = null;
      state.redirectTo = null;
      Cookies.remove('hotel_slug');
    },
    updateHotelInState(state, action: PayloadAction<Partial<Hotel>>) {
      if (state.hotel) {
        state.hotel = { ...state.hotel, ...action.payload };
      }
    }
  },
  extraReducers: (builder) => {
    builder
      // CHECK AUTH STATUS
      .addCase(checkAuthStatus.pending, (state) => {
        state.authCheckLoading = true;
        state.error = null;
      })
      .addCase(checkAuthStatus.fulfilled, (state, action) => {
        state.authCheckLoading = false;
        if (action.payload.success && action.payload.isAuthenticated) {
          state.hotel = (action.payload.hotel as Hotel) || null;
          state.hotelSlug = action.payload.user?.hotel_slug || state.hotelSlug;
          state.isAuthenticated = true;
          
          // Update cookie if we got a hotel slug
          if (action.payload.user?.hotel_slug && !Cookies.get('hotel_slug')) {
            Cookies.set('hotel_slug', action.payload.user.hotel_slug, {
              expires: 7,
              path: '/',
              secure: process.env.NODE_ENV === 'production',
              sameSite: 'lax'
            });
            state.hotelSlug = action.payload.user.hotel_slug;
          }
        } else {
          state.hotel = null;
          state.hotelSlug = null;
          state.isAuthenticated = false;
          Cookies.remove('hotel_slug');
        }
      })
      .addCase(checkAuthStatus.rejected, (state) => {
        state.authCheckLoading = false;
        state.hotel = null;
        state.hotelSlug = null;
        state.isAuthenticated = false;
        Cookies.remove('hotel_slug');
      })

      // REGISTER
      .addCase(registerHotel.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(registerHotel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.lastResponse = action.payload;
        state.hotel = (action.payload.hotel as Hotel) ?? null;
        state.hotelSlug = action.payload.hotel_slug || action.payload.hotel?.hotel_slug;
        state.isAuthenticated = !!state.hotel;
        state.session = action.payload.session || null;
        state.redirectTo = action.payload.redirect_to || null;
        
        // Set hotel slug cookie
        if (state.hotelSlug) {
          Cookies.set('hotel_slug', state.hotelSlug, {
            expires: 7,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
          });
        }
      })
      .addCase(registerHotel.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload || "Registration failed";
        state.hotel = null;
        state.hotelSlug = null;
        state.isAuthenticated = false;
      })

      // LOGIN
      .addCase(loginHotel.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(loginHotel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.lastResponse = action.payload;
        state.hotel = (action.payload.hotel as Hotel) ?? null;
        state.hotelSlug = action.payload.hotel_slug || action.payload.hotel?.hotel_slug;
        state.isAuthenticated = !!state.hotel;
        state.session = action.payload.session || null;
        state.redirectTo = action.payload.redirect_to || null;
        
        // Set hotel slug cookie
        if (state.hotelSlug) {
          Cookies.set('hotel_slug', state.hotelSlug, {
            expires: action.payload.session?.is_remembered ? 30 : 7,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
          });
        }
      })
      .addCase(loginHotel.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.payload?.message || "Login failed";
        state.hotel = null;
        state.hotelSlug = null;
        state.isAuthenticated = false;
      })

      // FETCH MY HOTEL (Me)
      .addCase(fetchMyHotel.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMyHotel.fulfilled, (state, action) => {
        state.loading = false;
        state.hotel = action.payload;
        state.hotelSlug = action.payload.hotel_slug || state.hotelSlug;
        state.isAuthenticated = true;
        
        // Update cookie
        if (action.payload.hotel_slug && !Cookies.get('hotel_slug')) {
          Cookies.set('hotel_slug', action.payload.hotel_slug, {
            expires: 7,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax'
          });
        }
      })
      .addCase(fetchMyHotel.rejected, (state) => {
        state.loading = false;
        state.hotel = null;
        state.hotelSlug = null;
        state.isAuthenticated = false;
        Cookies.remove('hotel_slug');
      })

      // LOGOUT
      .addCase(logoutHotel.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(logoutHotel.fulfilled, (state) => {
        state.hotel = null;
        state.hotelSlug = null;
        state.isAuthenticated = false;
        state.session = null;
        state.status = "idle";
        state.loading = false;
        state.error = null;
        state.lastResponse = null;
        state.redirectTo = null;
        Cookies.remove('hotel_slug');
      })
      .addCase(logoutHotel.rejected, (state) => {
        // Even if API call fails, clear local state
        state.hotel = null;
        state.hotelSlug = null;
        state.isAuthenticated = false;
        state.session = null;
        state.status = "idle";
        state.loading = false;
        Cookies.remove('hotel_slug');
      })

      // REFRESH SESSION
      .addCase(refreshSession.fulfilled, (state, action) => {
        state.hotel = (action.payload.hotel as Hotel) ?? null;
        state.hotelSlug = action.payload.hotel_slug || state.hotelSlug;
        state.isAuthenticated = !!state.hotel;
        state.session = action.payload.session || null;
      })
      .addCase(refreshSession.rejected, (state) => {
        state.hotel = null;
        state.hotelSlug = null;
        state.isAuthenticated = false;
        state.session = null;
        Cookies.remove('hotel_slug');
      })

      // UPDATE HOTEL PROFILE
      .addCase(updateHotelProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateHotelProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.hotel = action.payload;
        state.error = null;
      })
      .addCase(updateHotelProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update profile";
      });
  },
});

export const { 
  clearHotelAuthError, 
  setHotel, 
  setHotelSlug,
  setRedirectTo, 
  clearRedirectTo,
  setAuthCheckComplete,
  clearAuthState,
  updateHotelInState
} = hotelAuthSlice.actions;

export default hotelAuthSlice.reducer;