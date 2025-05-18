"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function AddPhotos() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false); // loading state

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/upload", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFile(null);
      setLoading(false);
      window.location.reload(); // 🔄 Reload page after upload
    } catch (error) {
      console.error("Upload failed", error);
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Add Photos</h2>

      <form onSubmit={handleUpload} style={{ marginBottom: "1rem" }}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*"
        />
        <button type="submit" disabled={loading || !file}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {loading && <p>Please wait, uploading...</p>}
    </div>
  );
}

export default AddPhotos;
