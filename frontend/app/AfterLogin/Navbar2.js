"use client";
import React from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function Navbar2() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/api/logout", {}, {
        withCredentials: true, 
      });
      alert("Logged out successfully!");
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to logout. Try again.");
    }
  };

  return (
    <nav className="w-full p-4 h-16 flex items-center justify-between fixed top-0 bg-white shadow-md z-10">
      <div className="flex items-center space-x-2">
        <img className="w-7" src="/logo.png" alt="Logo" />
        <h1 className="text-black text-xl font-bold">Hidden Snaps</h1>
      </div>

      <div>
        <ul>
          <li
            onClick={() =>
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full"
          >
            Home
          </li>
          <li
            onClick={() =>
              document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full"
          >
            Gallery
          </li>
          <li
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full"
          >
            About
          </li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={handleLogout}
          className="bg-black text-sm text-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar2;
