"use client"
import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import Sidebar from "./Sidebar";

function Navbar() {
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
  return <>
  
    <nav className='w-full  p-4 h-16 flex items-center justify-between fixed top-0 bg-white shadow-md z-10 '>
        <div className='flex items-center space-x-2'>
            <img className='w-7' src="/logo.png" alt="" />
            <h1 className='text-black text-xl font-bold'>Hidden Snaps</h1>
        </div>  

        <div className='hidden md:flex items-center space-x-4'>
            <ul>
                <li href="#home" onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className='inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full'>Home</li>
                <li href="#gallery" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })} className='inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full'>Gallery</li>
                <li href="#about" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className='inline-block text-sm text-black font-semibold px-4 py-2 cursor-pointer hover:bg-gray-200 rounded-full'>About</li>
            </ul>
        </div>

        <div className='space-x-4 hidden md:flex'>
            <Link href="LoginPage">
            <button className='bg-black text-sm text-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border'>Login</button>
            </Link>
            <Link href="RegistrationPage" >
            <button className='bg-black text-sm text-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-black hover:border'>Sign Up</button>
            </Link>
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
    <Sidebar isOpen={sidebarOpen} sidebarRef={sidebarRef} />
  </>
}

export default Navbar