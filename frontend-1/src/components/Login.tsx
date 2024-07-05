// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e: any) => {
//     e.preventDefault(); // Prevent default form submission

//     if (username === "mo" && password === "abcd1234") {
//       localStorage.setItem("isAuthenticated", "true");
//       navigate("/");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     // <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
//     <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-600 to-gray-800">
//       <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-md">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-white">
//             Welcome to my Portfolio!
//           </h1>
//           <p className="text-gray-300 mt-2">
//             Please login to access and use the credentials below!
//           </p>
//         </div>
//         <form onSubmit={handleLogin}>
//           <input
//             type="text"
//             placeholder="Username: mo"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="border-2 border-gray-700 bg-gray-700 text-white py-2 px-3 mb-4 rounded-lg w-full"
//           />
//           <input
//             type="password"
//             placeholder="Password: abcd1234"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="border-2 border-gray-700 bg-gray-700 text-white py-2 px-3 mb-4 rounded-lg w-full"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg w-full"
//             // type="submit"
//             // className="bg-customRed hover:bg-customRed-dark text-white py-2 px-4 rounded-lg w-full"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
