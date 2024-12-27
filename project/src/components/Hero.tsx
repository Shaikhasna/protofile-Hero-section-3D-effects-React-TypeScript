import React from 'react';
import { ChevronRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-violet-950">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full animate-spin-slow blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full animate-float blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-violet-500/30 to-fuchsia-500/30 rounded-full animate-pulse blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl backdrop-blur-sm bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-purple-200 text-transparent bg-clip-text mb-6 animate-fade-in">
            Crafting Digital Experiences
          </h1>
          <p className="text-lg md:text-xl text-purple-100/90 mb-8 animate-fade-in-delay">
            Transforming ideas into elegant, user-centric solutions through creative development and thoughtful design.
          </p>
          <button 
            onClick={() => scrollToSection('work')}
            className="group relative inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 animate-fade-in-delay-2"
          >
            View My Work
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-lg group-hover:blur-xl transition-all"></div>
          </button>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 border-4 border-purple-300/20 rounded-lg animate-float-delay"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-pink-300/20 rotate-45 animate-float"></div>
        <div className="absolute top-40 right-40 w-8 h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-float-delay-2"></div>
      </div>
    </div>
  );
};

export default Hero;