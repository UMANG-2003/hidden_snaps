"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

function AddPhotos() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

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
      window.location.reload();
    } catch (error) {
      console.error("Upload failed", error);
      setLoading(false);
    }
  };

  return (
    <div className="p-8 w-[90%] mx-auto bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add Photos</h2>

      <form onSubmit={handleUpload} className="mb-4 flex flex-col gap-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          accept="image/*"
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        <button
          type="submit"
          disabled={loading || !file}
          className={`py-2 px-4 rounded bg-blue-600 text-white font-semibold transition-colors duration-200
            ${loading || !file ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"}`}
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>

      {loading && (
        <p className="text-blue-600 font-medium animate-pulse">Please wait, uploading...</p>
      )}
    </div>
  );
}

export default AddPhotos;
