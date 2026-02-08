// import { q } from "framer-motion/client";

// type Props = {
//   params: { slug: string};
// };

// export default function HotelLoginPage({ params }: Props) {
//   const slug = params.slug;
//   console.log('params:- ', params)

//   return (
//     <div className="min-h-screen bg-[#fff7d6]">
//       <div className="mx-auto max-w-md px-4 py-14">
//         <div className="rounded-2xl border border-[#e7d488]/70 bg-white/70 p-6 shadow-[0_12px_30px_rgba(74,42,7,0.14)] backdrop-blur">
//           <div className="mb-2 inline-flex items-center rounded-full border border-[#e7d488]/70 bg-[#fff3c4]/70 px-3 py-1 text-xs font-extrabold text-[#4A2A07]">
//             Step 2 of 2
//           </div>

//           <h1 className="text-2xl font-black text-[#2A1B0D]">Login</h1>
//           <p className="mt-2 text-sm font-semibold text-[#6B451F]/80">
//             Hotel: <span className="font-black text-[#2A1B0D]">{slug}</span>

//           </p>

//           <form className="mt-6 space-y-3">
//             <label className="block">
//               <span className="text-xs font-extrabold uppercase tracking-wide text-[#6B451F]/70">
//                 Email
//               </span>
//               <input
//                 type="email"
//                 placeholder="admin@hotel.com"
//                 className="mt-2 w-full rounded-xl border border-[#e7d488]/80 bg-white/70 px-4 py-3 text-sm font-semibold text-[#2A1B0D] outline-none focus:border-[#FFC53D]"
//               />
//             </label>

//             <label className="block">
//               <span className="text-xs font-extrabold uppercase tracking-wide text-[#6B451F]/70">
//                 Password
//               </span>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="mt-2 w-full rounded-xl border border-[#e7d488]/80 bg-white/70 px-4 py-3 text-sm font-semibold text-[#2A1B0D] outline-none focus:border-[#FFC53D]"
//               />
//             </label>

//             <button
//               type="submit"
//               className="w-full rounded-xl border border-[#e7d488]/80 bg-gradient-to-br from-[#FFD86A] to-[#FFF3C4] px-4 py-3 text-sm font-extrabold text-[#2A1B0D] shadow-[0_10px_18px_rgba(74,42,7,0.10)] transition hover:brightness-[1.02]"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         <p className="mt-6 text-center text-xs font-semibold text-[#6B451F]/70">
//           This login is scoped to the tenant slug: <span className="font-black">{slug}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

// 'use client'

// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import {useParams} from 'next/navigation'
// import type { RootState, AppDispatch } from '@/store/index'
// import { checkSlugExists, clearTenant } from '@/store/slices/tenantSlice'

// type Props = {
//   params: { slug: string };
// };

// export default function HotelLoginPage({ params }: Props) {
//   // const slug = params.slug;
//     const { slug } = useParams<{ slug: string }>()

//   const dispatch = useDispatch<AppDispatch>()

//   // Get tenant state from Redux
//   const { tenant, status } = useSelector((state: RootState) => state.tenant)
//   console.log('this is the tenant from login:- ', tenant)

//   // console.log('params:- ', params)
//   console.log('tenant state:- ', tenant)

//   // Check if slug exists on component mount
//   useEffect(() => {
//     if (slug) {
//       dispatch(checkSlugExists({ slug }))
//     }
//   }, [slug, dispatch])

//   // Clear tenant state when component unmounts
//   useEffect(() => {
//     return () => {
//       dispatch(clearTenant())
//     }
//   }, [dispatch])

//   const handleLogin= (e: React.FormEvent) =>{
//     e.preventDefault();

//   }

//   return (
//     <div className="min-h-screen bg-[#fff7d6]">
//       <div className="mx-auto max-w-md px-4 py-14">
//         <div className="rounded-2xl border border-[#e7d488]/70 bg-white/70 p-6 shadow-[0_12px_30px_rgba(74,42,7,0.14)] backdrop-blur">
//           <div className="mb-2 inline-flex items-center rounded-full border border-[#e7d488]/70 bg-[#fff3c4]/70 px-3 py-1 text-xs font-extrabold text-[#4A2A07]">
//             Step 2 of 2
//           </div>

//           <h1 className="text-2xl font-black text-[#2A1B0D]">Login</h1>

//           {/* Show hotel name and slug from Redux state */}
//           {tenant && (
//             <div className="mt-2">
//               <p className="text-sm font-semibold text-[#6B451F]/80">
//                 Hotel: <span className="font-black text-[#2A1B0D] capitalize">{tenant?.name}</span>
//               </p>
//               <p className="text-xs font-semibold text-[#6B451F]/70 mt-1">
//                 Slug: <span className="font-bold text-[#2A1B0D]">{tenant?.slug}</span>
//               </p>
//             </div>
//           )}

//           {/* Fallback if tenant data is not loaded yet */}
//           {!tenant && status === 'loading' && (
//             <p className="mt-2 text-sm font-semibold text-[#6B451F]/80">
//               Loading hotel information...
//             </p>
//           )}

//           {/* Fallback if tenant data failed to load */}
//           {!tenant && status === 'failed' && (
//             <p className="mt-2 text-sm font-semibold text-[#6B451F]/80">
//               Hotel: <span className="font-black text-[#2A1B0D]">{slug}</span>
//             </p>
//           )}

//           <form className="mt-6 space-y-3" onSubmit={handleLogin}>
//             <label className="block">
//               <span className="text-xs font-extrabold uppercase tracking-wide text-[#6B451F]/70">
//                 Email
//               </span>
//               <input
//                 type="email"
//                 placeholder="admin@hotel.com"
//                 className="mt-2 w-full rounded-xl border border-[#e7d488]/80 bg-white/70 px-4 py-3 text-sm font-semibold text-[#2A1B0D] outline-none focus:border-[#FFC53D]"
//               />
//             </label>

//             <label className="block">
//               <span className="text-xs font-extrabold uppercase tracking-wide text-[#6B451F]/70">
//                 Password
//               </span>
//               <input
//                 type="password"
//                 placeholder="••••••••"
//                 className="mt-2 w-full rounded-xl border border-[#e7d488]/80 bg-white/70 px-4 py-3 text-sm font-semibold text-[#2A1B0D] outline-none focus:border-[#FFC53D]"
//               />
//             </label>

//             <button
//               type="submit"
//               className="w-full rounded-xl border border-[#e7d488]/80 bg-gradient-to-br from-[#FFD86A] to-[#FFF3C4] px-4 py-3 text-sm font-extrabold text-[#2A1B0D] shadow-[0_10px_18px_rgba(74,42,7,0.10)] transition hover:brightness-[1.02]"
//             >
//               Login
//             </button>
//           </form>
//         </div>

//         <p className="mt-6 text-center text-xs font-semibold text-[#6B451F]/70">
//           This login is scoped to the tenant slug: <span className="font-black">{slug}</span>
//         </p>
//       </div>
//     </div>
//   );
// }





// "use client";

// import React, { useEffect, useState } from "react";
// import { useParams, useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import type { RootState, AppDispatch } from "@/store";
// import { checkSlugExists, clearTenant } from "@/store/slices/tenantSlice";
// import { loginHotel, clearHotelAuthError } from "@/store/slices/hotelAuthSlice";

// export default function HotelLoginPage() {
//   const router = useRouter();
//   const { slug } = useParams<{ slug: string }>(); // ✅ correct for client

//   const dispatch = useDispatch<AppDispatch>();

//   // tenant (your existing tenant slice)
//   const { tenant, status: tenantStatus } = useSelector(
//     (s: RootState) => s.tenant,
//   );

//   // auth (your hotelAuth slice)
//   const {
//     status: authStatus,
//     error: authError,
//     isAuthenticated,
//   } = useSelector((s: RootState) => s.authHotel);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // ✅ load tenant info by slug
//   useEffect(() => {
//     if (slug) dispatch(checkSlugExists({ slug }));
//     return () => {
//       dispatch(clearTenant());
//       dispatch(clearHotelAuthError());
//     };
//   }, [slug, dispatch]);

//   // ✅ after login success (cookie set), navigate
//   useEffect(() => {
//     if (isAuthenticated) {
//       router.push(`/hotel/${slug}/dashboard`); // change route as you want
//     }
//   }, [isAuthenticated, router, slug]);

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     dispatch(clearHotelAuthError());

//     // IMPORTANT:
//     // Your thunk currently expects {email,password}
//     // If your backend needs slug too, see section #3 below.
//     const res = await dispatch(loginHotel({ email, password }));

//     // optional: handle errors with unwrap
//     // if (loginHotel.rejected.match(res)) return;
//   };

//   return (
//     <div className="min-h-screen bg-[#fff7d6]">
//       <div className="mx-auto max-w-md px-4 py-14">
//         <div className="rounded-2xl border border-[#e7d488]/70 bg-white/70 p-6 shadow-[0_12px_30px_rgba(74,42,7,0.14)] backdrop-blur">
//           <div className="mb-2 inline-flex items-center rounded-full border border-[#e7d488]/70 bg-[#fff3c4]/70 px-3 py-1 text-xs font-extrabold text-[#4A2A07]">
//             Step 2 of 2
//           </div>

//           <h1 className="text-2xl font-black text-[#2A1B0D]">Login</h1>

//           {tenant && (
//             <div className="mt-2">
//               <p className="text-sm font-semibold text-[#6B451F]/80">
//                 Hotel:{" "}
//                 <span className="font-black text-[#2A1B0D] capitalize">
//                   {tenant?.name}
//                 </span>
//               </p>
//               <p className="text-xs font-semibold text-[#6B451F]/70 mt-1">
//                 Slug:{" "}
//                 <span className="font-bold text-[#2A1B0D]">{tenant?.slug}</span>
//               </p>
//             </div>
//           )}

//           {!tenant && tenantStatus === "loading" && (
//             <p className="mt-2 text-sm font-semibold text-[#6B451F]/80">
//               Loading hotel information...
//             </p>
//           )}

//           {!tenant && tenantStatus === "failed" && (
//             <p className="mt-2 text-sm font-semibold text-[#6B451F]/80">
//               Hotel: <span className="font-black text-[#2A1B0D]">{slug}</span>
//             </p>
//           )}

//           {authError && (
//             <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
//               {authError}
//             </div>
//           )}

//           <form className="mt-6 space-y-3" onSubmit={handleLogin}>
//             <label className="block">
//               <span className="text-xs font-extrabold uppercase tracking-wide text-[#6B451F]/70">
//                 Email
//               </span>
//               <input
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 type="email"
//                 placeholder="admin@hotel.com"
//                 className="mt-2 w-full rounded-xl border border-[#e7d488]/80 bg-white/70 px-4 py-3 text-sm font-semibold text-[#2A1B0D] outline-none focus:border-[#FFC53D]"
//               />
//             </label>

//             <label className="block">
//               <span className="text-xs font-extrabold uppercase tracking-wide text-[#6B451F]/70">
//                 Password
//               </span>
//               <input
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//                 placeholder="••••••••"
//                 className="mt-2 w-full rounded-xl border border-[#e7d488]/80 bg-white/70 px-4 py-3 text-sm font-semibold text-[#2A1B0D] outline-none focus:border-[#FFC53D]"
//               />
//             </label>

//             <button
//               disabled={authStatus === "loading"}
//               type="submit"
//               className="w-full hover:cursor-pointer rounded-xl border border-[#e7d488]/80 bg-gradient-to-br from-[#FFD86A] to-[#FFF3C4] px-4 py-3 text-sm font-extrabold text-[#2A1B0D] shadow-[0_10px_18px_rgba(74,42,7,0.10)] transition hover:brightness-[1.02] disabled:opacity-60"
//             >
//               {authStatus === "loading" ? "Logging in..." : "Login"}
//             </button>
//           </form>
//         </div>

//         <p className="mt-6 text-center text-xs font-semibold text-[#6B451F]/70">
//           This login is scoped to the tenant slug:{" "}
//           <span className="font-black">{slug}</span>
//         </p>
//       </div>
//     </div>
//   );
// }








"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store";
import { checkSlugExists, clearTenant } from "@/store/slices/tenantSlice";
import { loginHotel, clearHotelAuthError, clearRedirectTo } from "@/store/slices/hotelAuthSlice";
import { Loader2, Eye, EyeOff, AlertCircle, Shield, Hotel, Lock } from "lucide-react";
import Cookies from 'js-cookie';

export default function HotelLoginPage() {
  const router = useRouter();
  const { slug } = useParams<{ slug: string }>();

  const dispatch = useDispatch<AppDispatch>();

  // tenant (your existing tenant slice)
  const { tenant, status: tenantStatus, error: tenantError } = useSelector(
    (s: RootState) => s.tenant,
  );

  // auth (your hotelAuth slice)
  const {
    status: authStatus,
    error: authError,
    isAuthenticated,
    hotel,
    redirectTo,
    session
  } = useSelector((s: RootState) => s.authHotel);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // ✅ load tenant info by slug
  useEffect(() => {
    if (slug) {
      dispatch(checkSlugExists({ slug }));
    }
    return () => {
      dispatch(clearTenant());
      dispatch(clearHotelAuthError());
      dispatch(clearRedirectTo());
    };
  }, [slug, dispatch]);

  // ✅ Check if already logged in via cookie
  useEffect(() => {
    const hotelToken = Cookies.get('hotel_token');
    if (hotelToken && tenant) {
      // If we have a token and know the hotel, redirect to dashboard
      router.push(`/hotel/${tenant.slug || slug}/dashboard`);
    }
  }, [tenant, slug, router]);

  // ✅ after login success, navigate using redirectTo
  useEffect(() => {
    if (redirectTo) {
      router.push(redirectTo);
      dispatch(clearRedirectTo());
    }
  }, [redirectTo, router, dispatch]);

  // ✅ Handle authentication state change
  useEffect(() => {
    if (isAuthenticated && tenant && tenant.slug) {
      router.push(`/hotel/${tenant.slug}/dashboard`);
    }
  }, [isAuthenticated, tenant, router]);

  // Handle specific error types
  const isAccountLocked = authError?.includes('Account temporarily locked') || 
                         authError?.includes('ACCOUNT_LOCKED') ||
                         (typeof authError === 'object' && (authError as any)?.error === 'ACCOUNT_LOCKED');

  const isInvalidCredentials = authError?.includes('Invalid email or password') ||
                              authError?.includes('INVALID_CREDENTIALS') ||
                              (typeof authError === 'object' && (authError as any)?.error === 'INVALID_CREDENTIALS');

  const isSubscriptionIssue = authError?.includes('subscription') || 
                             authError?.includes('SUBSCRIPTION_REQUIRED') ||
                             (typeof authError === 'object' && (authError as any)?.error === 'SUBSCRIPTION_REQUIRED');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({});
    dispatch(clearHotelAuthError());

    // Validation
    const errors: Record<string, string> = {};
    if (!email.trim()) errors.email = 'Email is required';
    if (!password) errors.password = 'Password is required';
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormErrors({ email: 'Please enter a valid email address' });
      return;
    }

    const result = await dispatch(loginHotel({ 
      email: email.trim(), 
      password,
      rememberMe 
    }));

    // If login successful, set a success cookie flag for demo purposes
    if (loginHotel.fulfilled.match(result)) {
      // Success - redirect will happen via useEffect
      console.log('Login successful, redirecting...');
    }
  };

  const handleDemoLogin = () => {
    // Demo credentials
    setEmail('demo@hotel.com');
    setPassword('demo123');
    setRememberMe(false);
    
    // Auto-submit after a brief delay
    setTimeout(() => {
      dispatch(loginHotel({ 
        email: 'demo@hotel.com', 
        password: 'demo123',
        rememberMe: false 
      }));
    }, 100);
  };

  const handleForgotPassword = () => {
    router.push(`/hotel/${slug}/forgot-password`);
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  // Show loading state while checking slug
  if (tenantStatus === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-amber-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-700 font-medium">Loading hotel information...</p>
        </div>
      </div>
    );
  }

  // Show error if slug not found
  if (tenantStatus === "failed" || (!tenant && tenantStatus === "succeeded")) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="mx-auto max-w-md px-4 py-14">
          <div className="rounded-2xl border border-red-200 bg-white/80 p-6 shadow-xl backdrop-blur">
            <div className="mb-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-4">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-red-700">Hotel Not Found</h1>
              <p className="text-gray-600 text-sm mt-2">
                The hotel <span className="font-bold text-red-600">{slug}</span> was not found.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                {tenantError || 'Please check the URL and try again.'}
              </p>
            </div>
            
            <button
              onClick={handleBackToHome}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="mx-auto max-w-md px-4 py-14">
        <div className="rounded-2xl border border-amber-200 bg-white/80 p-6 shadow-xl backdrop-blur">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Hotel Login</h1>
                  <div className="inline-flex items-center rounded-full border border-[#e7d488]/70 bg-[#fff3c4]/70 px-3 py-1 text-xs font-extrabold text-[#4A2A07] mt-1">
                    Step 2 of 2
                  </div>
                </div>
              </div>
              <button
                onClick={handleBackToHome}
                className="text-sm text-gray-600 hover:text-amber-600 font-medium"
              >
                Back to Home
              </button>
            </div>

            {/* Hotel Info */}
            {tenant && (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-4 mb-6 border border-amber-200">
                <div className="flex items-center gap-3 mb-3">
                  <Hotel className="h-5 w-5 text-amber-600" />
                  <h2 className="text-lg font-bold text-gray-900">{tenant.name}</h2>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      Hotel Name
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      {tenant.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      URL Slug
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      {tenant.slug}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      Status
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1 capitalize">
                      {tenant.subscription_status || 'Active'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide">
                      Type
                    </p>
                    <p className="text-sm font-bold text-gray-900 mt-1">
                      Hotel
                    </p>
                  </div>
                </div>
              </div>
            )}

            <p className="text-sm text-gray-600 mb-6">
              Welcome back to <span className="font-bold text-gray-900">{tenant?.name}</span>. 
              Please enter your credentials to continue.
            </p>
          </div>

          {/* Error Messages */}
          {authError && (
            <div className={`mb-6 p-4 rounded-xl ${
              isAccountLocked 
                ? 'bg-red-50 border border-red-200' 
                : isSubscriptionIssue
                ? 'bg-orange-50 border border-orange-200'
                : 'bg-amber-50 border border-amber-200'
            }`}>
              <div className="flex items-start gap-3">
                <AlertCircle className={`h-5 w-5 mt-0.5 ${
                  isAccountLocked 
                    ? 'text-red-500' 
                    : isSubscriptionIssue
                    ? 'text-orange-500'
                    : 'text-amber-500'
                }`} />
                <div className="flex-1">
                  <p className={`font-medium ${
                    isAccountLocked 
                      ? 'text-red-700' 
                      : isSubscriptionIssue
                      ? 'text-orange-700'
                      : 'text-amber-700'
                  }`}>
                    {typeof authError === 'object' 
                      ? (authError as any)?.message || 'Login failed'
                      : authError}
                  </p>
                  
                  {/* Additional info for account lockout */}
                  {isAccountLocked && typeof authError === 'object' && (authError as any)?.retryAfter && (
                    <p className="text-red-600 text-sm mt-1">
                      Please try again in {(authError as any)?.retryAfter} seconds.
                    </p>
                  )}
                  
                  {/* Additional info for subscription issues */}
                  {isSubscriptionIssue && (
                    <p className="text-orange-600 text-sm mt-1">
                      Please contact support to reactivate your subscription.
                    </p>
                  )}
                  
                  {/* Additional info for invalid credentials */}
                  {isInvalidCredentials && typeof authError === 'object' && (authError as any)?.remainingAttempts !== undefined && (
                    <p className="text-amber-600 text-sm mt-1">
                      {(authError as any)?.remainingAttempts} attempts remaining before account lockout.
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@hotel.com"
                className={`w-full px-4 py-3 rounded-xl border ${
                  formErrors.email ? 'border-red-300' : 'border-amber-200'
                } bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
                disabled={authStatus === "loading" || isAccountLocked}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    formErrors.password ? 'border-red-300' : 'border-amber-200'
                  } bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pr-12`}
                  disabled={authStatus === "loading" || isAccountLocked}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600"
                  disabled={authStatus === "loading" || isAccountLocked}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500"
                  disabled={authStatus === "loading" || isAccountLocked}
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                disabled={authStatus === "loading" || isAccountLocked}
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={authStatus === "loading" || isAccountLocked || !tenant}
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {authStatus === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Sign In to {tenant?.name}
                </>
              )}
            </button>
          </form>

          {/* Demo Login and Footer */}
          <div className="mt-8 pt-6 border-t border-amber-100 space-y-4">
            <button
              onClick={handleDemoLogin}
              disabled={authStatus === "loading" || isAccountLocked}
              className="w-full border-2 border-amber-300 text-amber-600 hover:bg-amber-50 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Try Demo Account
            </button>
            
            <div className="text-center space-y-3">
              <p className="text-sm text-gray-500">
                Don't have an account?{' '}
                <button
                  onClick={() => router.push('/register')}
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  Register your hotel
                </button>
              </p>
              
              <p className="text-xs text-gray-500">
                Need help?{' '}
                <a href="mailto:support@hotelease.com" className="text-amber-600 hover:text-amber-700 font-medium">
                  support@hotelease.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-xs font-semibold text-[#6B451F]/70">
            This login is scoped to the tenant slug:{" "}
            <span className="font-black text-gray-900">{slug}</span>
          </p>
          <p className="text-xs text-gray-500 mt-2">
            All login attempts are logged and monitored for security purposes.
          </p>
        </div>
      </div>
    </div>
  );
}










// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'
// import { useDispatch, useSelector } from 'react-redux'
// import type { RootState, AppDispatch } from '@/store/index'
// import { loginHotel, clearHotelAuthError } from '@/store/slices/hotelAuthSlice'
// import { Loader2, Eye, EyeOff, AlertCircle, Shield } from 'lucide-react'
// import Cookies from 'js-cookie'

// type Props = {
//   params: { slug: string };
// };

// export default function HotelLoginPage({ params }: Props) {
//   const slug = params.slug;
//   const router = useRouter()
//   const dispatch = useDispatch<AppDispatch>()
  
//   const { hotel, status, error, redirectTo, isAuthenticated } = useSelector((state: RootState) => state.authHotel)
  
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [rememberMe, setRememberMe] = useState(false)
//   const [showPassword, setShowPassword] = useState(false)
//   const [formErrors, setFormErrors] = useState<Record<string, string>>({})

//   // Check if already logged in
//   useEffect(() => {
//     const hotelToken = Cookies.get('hotel_token')
//     if (hotelToken && hotel) {
//       router.push(`/hotel/${hotel.slug || slug}/dashboard`)
//     }
//   }, [hotel, router, slug])

//   // Handle redirect after successful login
//   useEffect(() => {
//     if (redirectTo) {
//       router.push(redirectTo)
//     }
//   }, [redirectTo, router])

//   // Handle account lockout error
//   const isAccountLocked = error?.includes('Account temporarily locked') || 
//                          error?.includes('ACCOUNT_LOCKED')

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setFormErrors({})

//     // Validation
//     const errors: Record<string, string> = {}
//     if (!email.trim()) errors.email = 'Email is required'
//     if (!password) errors.password = 'Password is required'
    
//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors)
//       return
//     }

//     dispatch(loginHotel({ 
//       email: email.trim(), 
//       password, 
//       rememberMe 
//     }))
//   }

//   const handleDemoLogin = () => {
//     // Demo credentials
//     dispatch(loginHotel({ 
//       email: 'demo@hotel.com', 
//       password: 'demo123',
//       rememberMe: false 
//     }))
//   }

//   if (status === 'loading') {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center">
//         <div className="text-center">
//           <Loader2 className="h-12 w-12 text-amber-600 animate-spin mx-auto mb-4" />
//           <p className="text-gray-700 font-medium">Signing in...</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
//       <div className="mx-auto max-w-md px-4 py-14">
//         <div className="rounded-2xl border border-amber-200 bg-white/80 p-6 shadow-xl backdrop-blur">
//           <div className="mb-6 text-center">
//             <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl mb-4">
//               <Shield className="h-6 w-6 text-white" />
//             </div>
//             <h1 className="text-2xl font-bold text-gray-900">Hotel Login</h1>
//             <p className="text-gray-600 text-sm mt-2">
//               Sign in to access your hotel dashboard
//             </p>
//           </div>

//           {error && (
//             <div className={`mb-6 p-4 rounded-xl ${isAccountLocked ? 'bg-red-50 border border-red-200' : 'bg-amber-50 border border-amber-200'}`}>
//               <div className="flex items-start gap-3">
//                 <AlertCircle className={`h-5 w-5 mt-0.5 ${isAccountLocked ? 'text-red-500' : 'text-amber-500'}`} />
//                 <div>
//                   <p className={`font-medium ${isAccountLocked ? 'text-red-700' : 'text-amber-700'}`}>
//                     {error}
//                   </p>
//                   {isAccountLocked && (
//                     <p className="text-red-600 text-sm mt-1">
//                       Please try again later or contact support.
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="admin@hotel.com"
//                 className={`w-full px-4 py-3 rounded-xl border ${formErrors.email ? 'border-red-300' : 'border-amber-200'} bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//                 disabled={status === 'loading'}
//               />
//               {formErrors.email && (
//                 <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
//               )}
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="••••••••"
//                   className={`w-full px-4 py-3 rounded-xl border ${formErrors.password ? 'border-red-300' : 'border-amber-200'} bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pr-12`}
//                   disabled={status === 'loading'}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-amber-600"
//                   disabled={status === 'loading'}
//                 >
//                   {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
//                 </button>
//               </div>
//               {formErrors.password && (
//                 <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
//               )}
//             </div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input
//                   type="checkbox"
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                   className="w-4 h-4 text-amber-600 border-amber-300 rounded focus:ring-amber-500"
//                   disabled={status === 'loading'}
//                 />
//                 <span className="text-sm text-gray-700">Remember me</span>
//               </label>
              
//               <button
//                 type="button"
//                 onClick={() => router.push('/forgot-password')}
//                 className="text-sm text-amber-600 hover:text-amber-700 font-medium"
//                 disabled={status === 'loading'}
//               >
//                 Forgot password?
//               </button>
//             </div>

//             <button
//               type="submit"
//               disabled={status === 'loading' || isAccountLocked}
//               className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {status === 'loading' ? 'Signing in...' : 'Sign In'}
//             </button>
//           </form>

//           <div className="mt-8 pt-6 border-t border-amber-100">
//             <button
//               onClick={handleDemoLogin}
//               disabled={status === 'loading'}
//               className="w-full border-2 border-amber-300 text-amber-600 hover:bg-amber-50 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               Try Demo Account
//             </button>
            
//             <p className="text-center text-sm text-gray-500 mt-6">
//               Need help?{' '}
//               <a href="mailto:support@hotelease.com" className="text-amber-600 hover:text-amber-700 font-medium">
//                 support@hotelease.com
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }