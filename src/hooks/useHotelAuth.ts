// // hooks/useHotelAuth.ts
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useRouter } from 'next/navigation';
// import type { RootState, AppDispatch } from "../store/index"
// import { checkAuthStatus, setHotelSlug, clearRedirectTo } from '@/store/slices/hotelAuthSlice';
// import Cookies from 'js-cookie';

// export const useHotelAuth = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const router = useRouter();
  
//   const {
//     hotel,
//     hotelSlug,
//     isAuthenticated,
//     authCheckLoading,
//     status,
//     error,
//     redirectTo
//   } = useSelector((state: RootState) => state.authHotel);

//   // Check auth status on mount
//   useEffect(() => {
//     const checkAuth = async () => {
//       await dispatch(checkAuthStatus());
//     };
    
//     checkAuth();
//   }, [dispatch]);

//   // Handle redirects when redirectTo changes
//   useEffect(() => {
//     if (redirectTo) {
//       router.push(redirectTo);
//       dispatch(clearRedirectTo()); // Clear after redirect
//     }
//   }, [redirectTo, router, dispatch]);

//   // Sync hotel slug with cookies on changes
//   useEffect(() => {
//     const slugFromCookie = Cookies.get('hotel_slug');
    
//     if (hotelSlug && !slugFromCookie) {
//       Cookies.set('hotel_slug', hotelSlug, {
//         expires: 7,
//         path: '/',
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'lax'
//       });
//     } else if (!hotelSlug && slugFromCookie && isAuthenticated) {
//       // If we have a cookie but no slug in state, update state
//       dispatch(setHotelSlug(slugFromCookie));
//     } else if (!isAuthenticated && slugFromCookie) {
//       // Clear stale cookie if not authenticated
//       Cookies.remove('hotel_slug');
//     }
//   }, [hotelSlug, isAuthenticated, dispatch]);

//   return {
//     hotel,
//     hotelSlug,
//     isAuthenticated,
//     isLoading: authCheckLoading || status === 'loading',
//     error,
//     status,
//     redirectTo
//   };
// };


// hooks/useHotelAuth.ts (updated)
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import type { RootState, AppDispatch } from "../store/index"
import { checkAuthStatus, setHotelSlug, clearRedirectTo } from '@/store/slices/hotelAuthSlice';
import Cookies from 'js-cookie';

export const useHotelAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  
  // Changed from state.authHotel to state.hotelAuth
  const {
    hotel,
    hotelSlug,
    isAuthenticated,
    authCheckLoading,
    status,
    error,
    redirectTo
  } = useSelector((state: RootState) => state.authHotel); // Changed here

  // Check auth status on mount
  useEffect(() => {
    const checkAuth = async () => {
      await dispatch(checkAuthStatus());
    };
    
    checkAuth();
  }, [dispatch]);

  // Handle redirects when redirectTo changes
  useEffect(() => {
    if (redirectTo) {
      router.push(redirectTo);
      dispatch(clearRedirectTo());
    }
  }, [redirectTo, router, dispatch]);

  // Sync hotel slug with cookies
  useEffect(() => {
    const slugFromCookie = Cookies.get('hotel_slug');
    
    if (hotelSlug && !slugFromCookie) {
      Cookies.set('hotel_slug', hotelSlug, {
        expires: 7,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax'
      });
    } else if (!hotelSlug && slugFromCookie && isAuthenticated) {
      dispatch(setHotelSlug(slugFromCookie));
    } else if (!isAuthenticated && slugFromCookie) {
      Cookies.remove('hotel_slug');
    }
  }, [hotelSlug, isAuthenticated, dispatch]);

  return {
    hotel,
    hotelSlug,
    isAuthenticated,
    isLoading: authCheckLoading || status === 'loading',
    error,
    status,
    redirectTo
  };
};