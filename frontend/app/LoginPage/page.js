"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Image from "next/image";

function Login() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://hidden-snaps-backend.onrender.com/api/login",
        user,
        { withCredentials: true }  
      );
      console.log("User logged in successfully:", response.data);
      router.push("/AfterLogin");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Invalid email or password!");
      } else {
        alert("Login failed. Please try again.");
        console.error("Error logging in user:", error);
      }
    }
  };

  return (
    <>
      <Link
        href={"/"}
        className="absolute top-5 left-5 flex items-center space-x-2"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          className="w-auto h-auto"
          width={28}
          height={28}
        />
        <h1 className="text-black text-xl font-bold">Hidden Snaps</h1>
        <p>(back home)</p>
      </Link>
      <div className="bg-white w-[25%] max-md:w-[80%] h-[80%] mx-auto mt-20 rounded-lg shadow-lg px-5 py-8">
        <h1 className="text-4xl text-center">Login</h1>
        <h5 className="text-center text-xs text-gray-700">Login to continue</h5>
        <form
          className="w-[80%] mx-auto my-6"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
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
          <div>
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
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-7 w-[40%] p-2 bg-green-600 text-white border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
        <div className="">
          <p className="text-center text-sm text-gray-700">
            Dont have an account?{" "}
            <Link
              href="/RegistrationPage"
              className="text-blue-600 hover:text-blue-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(Login), { ssr: false });
