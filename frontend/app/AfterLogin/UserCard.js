"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserCard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://hidden-snaps-backend.onrender.com/api/logedinUser', {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="w-[90%] mx-auto mt-24 p-6 bg-gray-100 text-black rounded-xl shadow-lg flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">User Information</h2>

      {loading && <p className="text-blue-500">Loading...</p>}

      {error && <p className="text-red-500">Error: {error.message}</p>}

      {user && (
        <div className="mt-3">
          <p className="font-semibold text-sm">👤 Name: <span className="text-gray-700 text-sm">{user.name}</span></p>
          <p className="font-semibold text-sm">📧 Email: <span className="text-gray-700 text-sm">{user.email}</span></p>
        </div>
      )}
    </div>
  );
}

export default UserCard;
