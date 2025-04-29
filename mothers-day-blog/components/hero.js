'use client';
import { useState } from 'react';
import posts from '../data/posts';

export default function Hero() {
  const featured = posts.slice(0, 3); // Take first 3 posts
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % featured.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + featured.length) % featured.length);
  };

  return (
    <section className="relative w-full h-96 bg-gray-100 overflow-hidden">
      <img src={featured[current].imageUrl} alt="Featured" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold">{featured[current].title}</h2>
        <p className="max-w-lg mt-4">{featured[current].excerpt}</p>
        <div className="flex space-x-4 mt-6">
          <button onClick={prevSlide} className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">Prev</button>
          <button onClick={nextSlide} className="px-4 py-2 bg-white text-black rounded hover:bg-gray-300">Next</button>
        </div>
      </div>
    </section>
  );
}
