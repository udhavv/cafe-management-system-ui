import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import tenantReducer from "./slices/tenantSlice";
import subscriptionReducer from "./slices/subscriptionSlice";
import authHotelReducer from "./slices/hotelAuthSlice";
import dashboardReducer from "./slices/dashboardSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tenant: tenantReducer,
    subscription: subscriptionReducer,
    authHotel: authHotelReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
