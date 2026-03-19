import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {theme} = useContext(ThemeContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password
    };

   
    localStorage.setItem("user", JSON.stringify(userData));

    
    navigate("/dashboard");
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${
        theme === "light"
          ? "bg-gray-200 text-black"
          : "bg-gray-900 text-white"
      }`}>

      <div className="bg-indigo-400 p-8 rounded-xl shadow-lg w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border p-2 mb-4 rounded"
          />

          <button className="w-full bg-blue-500 text-white p-2 rounded">
            Login
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;