import React from 'react';
import { Code2, Palette, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-950 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-purple-100/90">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. With years of experience in web development, I specialize in building modern, scalable applications.
            </p>
            <p className="text-lg text-purple-100/90">
              My approach combines technical expertise with creative problem-solving to deliver solutions that not only work flawlessly but also delight users.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Clean Code",
                description: "Writing maintainable, efficient, and scalable code"
              },
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Creative Design",
                description: "Crafting beautiful and intuitive user interfaces"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description: "Finding creative solutions to complex problems"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                <div className="text-purple-400">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-purple-100/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;