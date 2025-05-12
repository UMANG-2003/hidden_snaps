import React from 'react'

function Gallery() {
    const images = [
       "https://images.pexels.com/photos/10612260/pexels-photo-10612260.jpeg?auto=compress&cs=tinysrgb&w=600",
       "https://images.pexels.com/photos/6621316/pexels-photo-6621316.jpeg?auto=compress&cs=tinysrgb&w=600",
       "https://images.pexels.com/photos/17739921/pexels-photo-17739921/free-photo-of-mother-and-daughter-together-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=600",
       "https://images.pexels.com/photos/4778374/pexels-photo-4778374.jpeg?auto=compress&cs=tinysrgb&w=600",
       "https://images.pexels.com/photos/9451790/pexels-photo-9451790.jpeg?auto=compress&cs=tinysrgb&w=600",
       "https://images.pexels.com/photos/6565249/pexels-photo-6565249.jpeg?auto=compress&cs=tinysrgb&w=600",
       "https://images.pexels.com/photos/7699255/pexels-photo-7699255.jpeg?auto=compress&cs=tinysrgb&w=600",
       "https://images.pexels.com/photos/6670081/pexels-photo-6670081.jpeg?auto=compress&cs=tinysrgb&w=600",
       "https://images.pexels.com/photos/8795113/pexels-photo-8795113.jpeg?auto=compress&cs=tinysrgb&w=600"
    ]
  return (
    <div className="container mx-auto mt-20" id='gallery'>
      <h2 className="text-black text-4xl font-bold mb-5 text-center">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {images.map((image, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md h-fit">
            <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-fit rounded-t-lg " />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery