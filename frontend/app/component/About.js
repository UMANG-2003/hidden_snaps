import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <main className='container mx-auto my-20' id='about'>
      <h2 className='text-black text-4xl font-bold mb-5 text-center'>About</h2>
      <div className='flex  justify-between gap-6 max-md:flex-col max-md:gap-10'>
        <div className='w-[30%] max-md:w-full flex flex-col items-center justify-center bg-white rounded-lg p-5'>
            <div>
            <p className='text-black text-3xl font-bold mb-5'>
                Together we can create a community that celebrates the beauty of hidden moments.
            </p>
            <p>
                hidden snaps is a platform designed to help you share your hidden moments with the world. We believe that every moment, no matter how small, deserves to be captured and shared. Our mission is to provide a space where you can showcase your unique perspective and connect with others who appreciate the beauty in the little things.
            </p>
            </div>

            <div>
                <button className='flex items-center gap-2 bg-pink-300 text-black rounded-full px-4 py-2 mt-5 cursor-pointer'>
                    <a href="https://www.instagram.com/_umang_k991/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="" className='w-[20px] h-[20px]' />
                    </a>
                    <span className='text-black text font-bold'>Instagram</span>
                </button>
            </div>
        </div>

        <div className='bg-black bg2 w-[70%] h-[70vh] max-md:h-[100%] max-md:w-full rounded-lg'>
            <div className='flex flex-wrap justify-around items-center h-full p-5'>
                <Image src="/ab1.jpeg" className='w-[25%] max-md:h-[45%] max-md:w-[30%]  rounded-xl' width={600} height={400} alt="" />
                <Image src="/ab2.jpeg" className='w-[25%] max-md:h-[45%] max-md:w-[30%] rounded-xl'  width={600} height={400} alt="" />
                <Image src="/ab3.webp" className='w-[25%] max-md:h-[45%] max-md:w-[30%] rounded-xl'  width={600} height={400} alt="" />
            </div>
        </div>
      </div>
    </main>
  )
}

export default About
