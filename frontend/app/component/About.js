import React from 'react'

function About() {
  return (
    <main className='container mx-auto my-20' id='about'>
      <h2 className='text-black text-4xl font-bold mb-5 text-center'>About</h2>
      <div className='flex  justify-between gap-6'>
        <div className='w-[30%] flex flex-col items-center justify-center bg-white rounded-lg p-5'>
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
                    <a href="https://www.instagram.com/hidden_snaps_/" target="_blank" rel="noopener noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="" className='w-[20px] h-[20px]' />
                    </a>
                    <span className='text-black text font-bold'>Instagram</span>
                </button>
            </div>
        </div>

        <div className='bg-black bg2 w-[70%] h-[70vh] rounded-lg'>
            <div className='flex flex-wrap justify-around items-center h-full p-5'>
                <img src="https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[25%] rounded-xl' alt="" />
                <img src="https://images.pexels.com/photos/2130795/pexels-photo-2130795.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[25%] rounded-xl' alt="" />
                <img src="https://images.pexels.com/photos/1882309/pexels-photo-1882309.jpeg?auto=compress&cs=tinysrgb&w=600" className='w-[25%] rounded-xl' alt="" />
            </div>
        </div>
      </div>
    </main>
  )
}

export default About