import React from "react";
import Image from "next/image";

function Gallery() {
  const images = [
    "/gal1.jpeg",
    "/gal2.webp",
    "/gal3.jpeg",
    "/gal4.jpeg",
    "/gal5.jpeg",
    "/gal6.webp",
    "/gal7.webp",
    "/gal8.webp",
    "/gal9.webp",
  ];
  return (
    <div className="container mx-auto mt-20" id="gallery">
      <h2 className="text-black text-4xl font-bold mb-5 text-center">
        Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md h-fit">
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-fit rounded-t-lg "
              width={600}
              height={400}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
