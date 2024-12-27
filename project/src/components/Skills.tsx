import React from 'react';
import SkillCard from './SkillCard';
import { skillsData } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <div id="skills" className="min-h-screen bg-gradient-to-br from-indigo-950 to-violet-950 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;