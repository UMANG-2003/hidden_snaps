"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Registration() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://hidden-snaps-backend.onrender.com/api/user", user,{ withCredentials: true } );
      alert("User registered successfully!");
      console.log("User registered successfully:", response.data);
      router.push("/AfterLogin");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("User already exists with this email!");
      } else if (error.response && error.response.status === 400) {
        alert("Please fill all the fields!");
      } else {
        alert("Registration failed. Please try again.");
        console.error("Error registering user:", error);
      }
    }
  };

  return (
    <>
      <Link
        href="/"
        className="absolute top-5 left-5 flex items-center space-x-2"
      >
        <Image className="w-7" src="/logo.png" alt="Logo" width={28} height={28} />
        <h1 className="text-black text-xl font-bold">Hidden Snaps</h1>
        <p>(back home)</p>
      </Link>
      <div className="bg-white w-[25%] max-md:w-[80%] h-[80%] mx-auto mt-20 rounded-lg shadow-lg px-5 py-8">
        <h1 className="text-4xl text-center">Sign Up</h1>
        <h5 className="text-center text-xs text-gray-700">
          Sign up to continue
        </h5>
        <form
          className="w-[80%] mx-auto my-6"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="current-password"
              className="mt-1 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Enter your password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-7 w-[40%] p-2 bg-green-600 text-white border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Registration), { ssr: false });
