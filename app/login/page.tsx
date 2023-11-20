"use client";

import { ChangeEvent, useState } from "react";

const LoginPage = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setState((prev) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-slate-900 p-10 rounded-md w-96">
        <h1 className="text-xl font-bold text-center">Login</h1>
        <div className="mt-8">
          <input
            type="text"
            value={state.username}
            onChange={handleChange}
            placeholder="User Name ..."
            className="w-full p-4 bg-transparent border border-gray-100 rounded-md"
          />
        </div>
        <div className="mt-8">
          <input
            type="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password ..."
            className="w-full p-4 bg-transparent border border-gray-100 rounded-md"
          />
        </div>
        <button className="text-white bg-cyan-600 py-4 px-8 rounded-md w-full mt-8">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
