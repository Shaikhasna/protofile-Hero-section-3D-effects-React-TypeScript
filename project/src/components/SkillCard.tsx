import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <Icon className="w-6 h-6 text-purple-400" />
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-purple-100">{skill.name}</span>
              <span className="text-purple-300">{skill.level}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;