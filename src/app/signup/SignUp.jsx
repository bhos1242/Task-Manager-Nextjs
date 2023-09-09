"use client";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import signupsvg from "../../assets/undraw_sign_up_n6im.svg";
import React, { useState } from "react";
import { SignUp } from "@/services/userService";
const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    about: "",
    profileUrl: "imgurl.com", // Add the profileImg field to store the selected image file
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const result = await SignUp(user);
      if (result.status === false) {
        // Handle error cases here
        toast.error(result.message || "Signup failed. Please try again.");
      } else {
        // Signup was successful
        toast.success("Signup successful!");

        // Clear the form fields
        setUser({
          username: "",
          email: "",
          password: "",
          about: "",
          profileUrl: "",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during signup. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-12 p-4 mx-auto">
      <div className="col-span-12 p-6 bg-white rounded-lg shadow-md md:col-span-6 md:col-start-4">
        <div className="flex justify-center my-4">
          <Image src={signupsvg} style={{ width: "50%" }} alt="signup image" />
        </div>
        <h1 className="mt-3 mb-6 text-xl font-semibold text-center">Signup</h1>

        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your username"
              name="username"
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              value={user.username}
              required
            />
          </div>

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

          {/* About */}
          <div className="mb-4">
            <label htmlFor="about" className="block text-gray-700">
              About
            </label>
            <textarea
              id="about"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
              placeholder="Tell us about yourself"
              name="about"
              onChange={(e) => setUser({ ...user, about: e.target.value })}
              value={user.about}
            />
          </div>

          {/* Profile Image */}
          {/* <div className="mb-4">
            <label htmlFor="profileImg" className="block text-gray-700">
              Profile Image
            </label>
            <input
              type="file"
              id="profileImg"
              accept="image/*"
              onChange={handleProfileImgChange}
            />
          </div> */}

          {/* Submit button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Signup
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

export default Signup;
