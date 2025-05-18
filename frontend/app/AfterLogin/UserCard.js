"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserCard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://hidden-snaps-backend.onrender.com/api/logedinUser', { withCredentials: true })
        setUser(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className='w-[90%] mx-auto text-black mt-24 flex flex-col items-center justify-center bg-gray-400 p-4 rounded-xl'>
      <h2 className='text-2xl font-bold text-center'>User Information</h2>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-400'>Error: {error.message}</p>}
      {user && (
        <>
          <p className='mt-2 font-bold'>Name: {user.name}</p>
          <p className='font-bold'>Email: {user.email}</p>
        </>
      )}
    </div>
  )
}

export default UserCard
