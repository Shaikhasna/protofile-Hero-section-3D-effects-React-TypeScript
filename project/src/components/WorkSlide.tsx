import React from 'react';
import { ExternalLink } from 'lucide-react';

interface WorkSlideProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const WorkSlide: React.FC<WorkSlideProps> = ({ title, description, image, link }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 p-8">
      <div className="w-full md:w-1/2">
        <img 
          src={image} 
          alt={title} 
          className="rounded-xl shadow-2xl w-full h-[300px] object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="text-purple-100/90">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-100 transition-colors"
        >
          View Project <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default WorkSlide;