// "use client";

// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { loginUser } from "@/store/slices/authSlice";
// // import Input from "../../components/ui/Input";
// import Input from './../../../components/ui/Input';

// export default function LoginPage() {
//   const dispatch = useDispatch();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (email && password) {
//       dispatch(loginUser({ email, password }));
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
//         <h1 className="mb-2 text-2xl font-semibold text-gray-800">
//           Welcome back
//         </h1>
//         <p className="mb-6 text-sm text-gray-500">
//           Login is just the beginning.
//         </p>

//         <div className="space-y-4">
//           <Input
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <Input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             onClick={handleLogin}
//             className="w-full rounded-md bg-black py-2 text-white
//                        hover:bg-gray-800 transition"
//           >
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
// import { loginUser } from "./store/slices/authSlice";
import { loginAdmin } from "@/store/slices/authSlice";
// import Input from "./components/ui/Input";
import Input from './../../../components/ui/Input';

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      dispatch(loginAdmin({ email, password }));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-2 text-2xl font-semibold text-gray-800">
          Welcome back
        </h1>

        <p className="mb-6 text-sm text-gray-500">
          Login is just the beginning.
        </p>

        <div className="space-y-4">
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full rounded-md bg-black py-2 text-white
                       hover:bg-gray-800 transition"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
