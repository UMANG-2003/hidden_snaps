import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";

function Sidebar2({ isOpen, sidebarRef }) {
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
  return (
    <div
      ref={sidebarRef}
      className={`md:hidden bg-slate-200 w-[60%] h-screen py-5 fixed top-16 right-0 z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <ul className="flex flex-col gap-2 font-bold text-white p-2">
        <li
          href="#home"
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-block text-sm text-white font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-xl bg-gray-700 p-3"
        >
          Home
        </li>
        <li
          href="#gallery"
          onClick={() =>
            document
              .getElementById("gallery")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-block text-sm text-white font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-xl bg-gray-700 p-3"
        >
          Gallery
        </li>
        <li
          href="#about"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="inline-block text-sm text-white font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-xl bg-gray-700 p-3"
        >
          About
        </li>
      </ul>

      <div className="p-2 flex flex-col gap-2">
        <div className="flex space-x-4">
          <button
            onClick={handleLogout}
            className="bg-black text-sm text-white py-2  rounded-xl w-full cursor-pointer hover:bg-white hover:text-black hover:border"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar2;
