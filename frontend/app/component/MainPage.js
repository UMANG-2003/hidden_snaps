import React from "react";
import Gallery from "./Gallery";
import About from "./About";

function MainPage() {
  return (
    <>
      <main className="container mx-auto mt-36 max-md:mt-24 bg1 p-10 rounded-lg shadow-md shadow-black" id="home">
  
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-white text-7xl font-bold shadow-black drop-shadow-lg custom-outline max-md:text-5xl">
            Welcome to Hidden Snaps
          </h1>
          <p className="text-white text-2xl my-5 shadow-black drop-shadow-md custom-outline max-md:text-lg">
            A place to share your hidden moments
          </p>
        </div>

      </main>
        <div className="text-center text-white mt-10 bg-gray-700 px-4 py-2 mx-auto w-fit rounded-full">
            Save your hidden moments with us
        </div>
        <Gallery></Gallery>
        <About></About>
    </>
  );
}

export default MainPage;
