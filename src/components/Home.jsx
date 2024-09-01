
import React from 'react';
import bookCover1 from "../../public/book-cover1.jpg";
import bookCover2 from "../../public/book-cover2.jpg";
import bookCover3 from "../../public/book-cover3.jpg";
import backgroundPattern from "../../public/background-pattern.jpg";

const Home = () => {
  return (
    <div name="Home" className="h-screen container max-w-screen-2xl mx-auto px-4 md:px-20 my-20 relative flex items-center justify-between bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      {/* Overlay to darken background for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Text Content */}
      <div className="relative z-10 text-white max-w-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Book Haven
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-6">
          Your Gateway to a World of Endless Stories and Knowledge
        </p>
        <p className="text-lg md:text-xl">
          Discover your next favorite book today. Explore our collection and find the perfect story that speaks to you.
        </p>
      </div>

      {/* Vertical Book Covers */}
      <div className="relative z-10 hidden lg:flex flex-col items-center gap-8">
        <div className="w-48 h-72 overflow-hidden rounded-lg shadow-lg">
          <img src={bookCover1} alt="Book Cover 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-48 h-72 overflow-hidden rounded-lg shadow-lg">
          <img src={bookCover2} alt="Book Cover 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-48 h-72 overflow-hidden rounded-lg shadow-lg">
          <img src={bookCover3} alt="Book Cover 3" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;





