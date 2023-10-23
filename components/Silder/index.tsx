'use client'
import React, { useState } from 'react'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const images = [
    'https://source.unsplash.com/1600x900/?beach',
    'https://source.unsplash.com/1600x900/?cat',
    'https://source.unsplash.com/1600x900/?dog',
    'https://source.unsplash.com/1600x900/?lego',
    'https://source.unsplash.com/1600x900/?textures&patterns',
  ]

  const back = () => {
    if (currentIndex > 1) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const next = () => {
    if (currentIndex < images.length) {
      setCurrentIndex(currentIndex + 1)
    } else if (currentIndex <= images.length) {
      setCurrentIndex(images.length - currentIndex + 1)
    }
  }

  return (
    <article className="relative w-full h-full flex flex-shrink-0 overflow-hidden shadow-2xl">
      {images.map((image, index) => (
        <figure
          key={index}
          className={`h-[500px] ${currentIndex === index + 1 ? '' : 'hidden'}`}
        >
          <img
            src={image}
            alt="Image"
            className="absolute inset-0 z-10 h-full w-full object-fit"
          />
        </figure>
      ))}

      <div className="rounded-full bg-white text-black absolute top-5 right-5 text-sm px-2 text-center z-10">
        <span>{currentIndex}</span>
        <span>/</span>
        <span>{images.length}</span>
      </div>

      <button
        onClick={back}
        className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center z-10"
      >
        <svg
          className="w-20 h-20 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-white hover:text-gray-600 hover:-translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-14 top-[200px] translate-y-1/2 w-11 h-11 flex justify-center items-center z-10"
      >
        <svg
          className="w-20 h-20 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-white hover:text-gray-600 hover:translate-x-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </article>
  )
}

export default Slider
