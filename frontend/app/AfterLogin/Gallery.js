"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null); 

  const fetchImages = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://hidden-snaps-backend.onrender.com/api/images", {
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
      await axios.delete(`https://hidden-snaps-backend.onrender.com/api/images/${id}`, {
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
    <div style={{ padding: "2rem" }}>
      <h2>Your Gallery</h2>

      {loading ? (
        <p>Loading images...</p>
      ) : images.length === 0 ? (
        <p>No images uploaded yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          {images.map((img) => (
            <div key={img._id} style={{ position: "relative" }}>
              <Image
                src={img.url}
                alt="user upload"
                width={400}
                height={300}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
                 priority
              />
              <button
                onClick={() => handleDelete(img._id)}
                disabled={deletingId === img._id}
                style={{
                  position: "absolute",
                  top: "5px",
                  right: "5px",
                  backgroundColor: deletingId === img._id ? "gray" : "rgba(255, 0, 0, 0.7)",
                  color: "#fff",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
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
