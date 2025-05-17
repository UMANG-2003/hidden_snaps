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
          <img className="w-7" src="/logo.png" alt="Logo" />
          <h1 className="text-black text-xl font-bold">Hidden Snaps</h1>
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
