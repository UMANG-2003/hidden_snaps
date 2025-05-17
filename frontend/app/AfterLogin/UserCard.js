"use client"
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function UserCard() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/logedinUser', { withCredentials: true })
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
    <div className='container mx-auto text-black mt-24'>
      <h2 className='text-2xl font-bold text-center'>User Information</h2>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-400'>Error: {error.message}</p>}
      {user && (
        <>
          <p className='mt-2'>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      )}
    </div>
  )
}

export default UserCard
