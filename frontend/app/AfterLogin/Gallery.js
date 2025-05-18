"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/images", {
        withCredentials: true,
      });
      setImages(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) return;

    try {
      setDeletingId(id);
      await axios.delete(`http://localhost:5000/api/images/${id}`, {
        withCredentials: true,
      });
      setDeletingId(null);
      fetchImages(); 
    } catch (error) {
      console.error("Failed to delete image:", error);
      setDeletingId(null);
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Gallery</h2>

      {loading ? (
        <p className="text-gray-500">Loading images...</p>
      ) : images.length === 0 ? (
        <p className="text-gray-500">No images uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {images.map((img) => (
            <div key={img._id} className="relative h-fit group rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow bg-white">
              <img
                src={img.url}
                alt="user upload"
                className="w-full transition-transform duration-200 group-hover:scale-105"
              />
              <button
                onClick={() => handleDelete(img._id)}
                disabled={deletingId === img._id}
                className={`absolute top-3 right-3 px-3 py-1 rounded bg-red-600 text-white text-sm font-semibold shadow hover:bg-red-700 transition-colors ${
                  deletingId === img._id ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {deletingId === img._id ? "Deleting..." : "Delete"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
