"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import Sidebar2 from "./Sidebar2";

function Navbar2() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/logout",
        {},
        {
          withCredentials: true,
        }
      );
      alert("Logged out successfully!");
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to logout. Try again.");
    }
  };

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <nav className="w-full p-4 h-16 flex items-center justify-between fixed top-0 bg-white shadow-md z-10">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Logo"
            width={28}
            height={28}
            className="w-7 h-7"
          />
          <h1 className="text-black text-xl font-bold">Hidden Snaps</h1>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <ul>
            <li
              onClick={() =>
                document
                  .getElementById("home")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full"
            >
              Home
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full"
            >
              Gallery
            </li>
            <li
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full"
            >
              About
            </li>
          </ul>
        </div>

        <div className="space-x-4 hidden md:flex">
          <button
            onClick={handleLogout}
            className="bg-black text-sm text-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border"
          >
            Logout
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="bg-black text-white px-3 py-1 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            ☰
          </button>
        </div>
      </nav>
      <Sidebar2 isOpen={sidebarOpen} sidebarRef={sidebarRef} />
    </>
  );
}

export default Navbar2;
