import axios from "axios";

export const api = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
    // baseURL: "http://localhost:4000",
    baseURL: "https://cafe-management-system-b9fa.onrender.com",

  withCredentials: true, // ✅ SEND/RECEIVE COOKIES
  headers: { "Content-Type": "application/json" },
});

// Optional: normalize errors
export function getApiError(err: any, fallback = "Request failed") {
  return (
    err?.response?.data?.message ||
    err?.message ||
    fallback
  );
}
