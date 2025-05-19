"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

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
    <div className="w-[90%] max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Add Photos</h2>

      <form
        onSubmit={handleUpload}
        className="flex flex-col sm:flex-row items-center gap-4 mb-6"
      >
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*"
          className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 file:font-semibold flex-1"
        />
        <button
          type="submit"
          disabled={loading || !file}
          className={`px-6 py-2 rounded bg-blue-600 text-white font-medium transition-colors ${
            loading || !file
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          }`}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {loading && (
        <p className="text-blue-600 text-center">Please wait, uploading...</p>
      )}
    </div>
  );
}

export default AddPhotos;
