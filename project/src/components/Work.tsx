import React, { useState } from 'react';
import WorkSlide from './WorkSlide';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with React and Node.js, featuring real-time inventory management and seamless payment integration.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=1280",
    link: "https://github.com"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Data visualization platform using machine learning to provide actionable insights from complex datasets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1280",
    link: "https://github.com"
  },
  {
    title: "Social Media App",
    description: "Real-time social platform with features like live messaging, story sharing, and content recommendation.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1280",
    link: "https://github.com"
  }
];

const Work: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div id="work" className="min-h-screen bg-gradient-to-br from-indigo-950 to-purple-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Featured Work
        </h2>
        
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <WorkSlide {...projects[currentSlide]} />
            </div>
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-purple-400 w-6' : 'bg-purple-400/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;