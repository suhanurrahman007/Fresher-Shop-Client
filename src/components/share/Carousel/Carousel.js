"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import Image from "next/image";
import { useState } from "react";

export const Carousel = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      img: "https://i.ibb.co/3rrK0Lp/Ramadan-H-11-Mar-2024.webp",
      title: "Escape 1",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/h8G822P/pngtree-room-full-of-grocery-foods-picture-image-3179578.png",
      title: "Escape 2",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/drh3fcB/hypatia-h-63245435a917cf783d79f733eebdf403-h-74a81bab3c2f6c64f0a31cab94b2662e-300-scaled.webp",
      title: "Escape 3",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/xHJPD0h/stock-shopping-city-background-thumbnail.jpg",
      title: "Escape 4",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://i.ibb.co/Jx3M09c/pngtree-supermarket-section-with-a-very-dark-aisle-picture-image-3180865.png",
      title: "Escape 5",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
  ];

  const words = sliders[currentSlider].title.split(" ");

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );

  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div
      className="w-full h-60 sm:h-96 md:h-[540px] mt-[50px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-auto overflow-hidden"
      style={{
        backgroundImage: `url(${
          currentSlider === 0
            ? sliders[sliders.length - 1].img
            : sliders[currentSlider - 1].img
        })`,
      }}
    >
      {/* arrow */}
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {/* text container here */}
      <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
        <h1 className="lg:text-3xl mb-3 -ml-12"><TypewriterEffect words={words.map((text) => ({ text }))} /></h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          {sliders[currentSlider].des}
        </p>
        <button>Explore</button>
        
      </div>
      {/* slider container */}
      <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div
          className="ease-linear duration-300 flex gap-4 items-center"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 98 : 200)
            }px)`,
          }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <Image
              width={500}
              height={500}
              key={inx}
              src={slide.img}
              className={`h-[140px] sm:h-[160px] lg:h-[280px] min-w-[90px] lg:min-w-[184px] ${
                currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
              } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
              alt={slide.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
