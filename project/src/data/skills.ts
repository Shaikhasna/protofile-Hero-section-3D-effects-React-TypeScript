import { Code, Layout, Server } from 'lucide-react';

export const skillsData = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 95 }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 }
    ]
  },
  {
    title: "Other Skills",
    icon: Code,
    skills: [
      { name: "Git", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Testing", level: 80 }
    ]
  }
];