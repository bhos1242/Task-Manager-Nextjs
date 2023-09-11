"use client";
import React, { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import loginsvg from "../../assets/undraw_mobile_login_re_9ntv.svg"; // Import your login image
import { login } from "@/services/userService"; // Import your login service function

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await login(user);
      if (result.status === false) {
        // Handle error cases here
        toast.error(result.message || "Login failed. Please try again.");
      } else {
        // Login was successful
        toast.success("Login successful!");

        // Clear the form fields
        setUser({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-12 p-4 mx-auto">
      <div className="col-span-12 p-6 bg-white rounded-lg shadow-md md:col-span-6 md:col-start-4">
        <div className="flex justify-center my-4">
          <Image src={loginsvg} style={{ width: "50%" }} alt="login image" />
        </div>
        <h1 className="mt-3 mb-6 text-xl font-semibold text-center">Login</h1>

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              value={user.email}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              name="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              value={user.password}
              required
            />
          </div>

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
        <div>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
