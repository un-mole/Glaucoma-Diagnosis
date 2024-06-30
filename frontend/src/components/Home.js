import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  // Configuration for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="bg-purple-300 grow p-8 flex justify-around md:flex-row flex-col">
      <h1 className="flex flex-col gap-3 justify-center md:text-4xl text- xl md:w-1/2 w-full items-center h-full font-bold leading-relaxed p-3">
        Welcome to the
        <div className="relative inline-block">
          <span className="absolute top-0 left-0 transform -skew-x-12 h-full w-full bg-gradient-to-l from-purple-800 via-purple-600 to-purple-700"></span>
          <span className="relative z-10 block px-5 py-2 text-gray-200 font-bold">
            Glaucoma Diagnosis
          </span>
        </div>
        Tool
        <Link
          to="/diagnosis"
          className="text-lg px-3 text-blue-600 underline hover:font-extrabold hover:text-xl"
        >
          Try Now!
        </Link>
      </h1>
      <div className="flex flex-col bg-white p-3 md:w-2/5 w-full rounded-xl h-auto">
        <Slider {...settings}>
          <div>
            <img
              src="/images/glaucoma-symptoms.jpeg"
              alt="Glaucoma"
              className="rounded-lg md:w-full w-full"
            />
            <div className="flex justify-center text-lg mt-2 font-bold bg-black text-gray-100">
              Glaucoma symptoms
            </div>
          </div>
          <div>
            <img
              src="/images/glaucoma-causes.jpeg"
              alt="Glaucoma"
              className="rounded-lg h-full"
            />
            <div className="flex justify-center text-lg mt-2 font-bold bg-black text-gray-100">
              Glaucoma Causes
            </div>
          </div>
          <div>
            <img
              src="/images/glaucoma-preventions.jpg"
              alt="Glaucoma"
              className="rounded-lg h-full"
            />
            <div className="flex justify-center text-lg mt-2 font-bold bg-black text-gray-100">
              Glaucoma Preventions
            </div>
          </div>
          <div>
            <img
              src="/images/galucoma.jpeg"
              alt="Another Image"
              className="md:w-full w-full"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Home;
