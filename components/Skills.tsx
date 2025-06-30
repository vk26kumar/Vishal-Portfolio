import React from 'react';
import Section from './Section';
import { SkillCategory } from '../types';
import {
  CodeBracketIcon,
  CpuChipIcon,
  PaintBrushIcon,
  WrenchScrewdriverIcon
} from './icons/GenericIcons';
import {
  FileCode2,
  Code2,
  Cpu,
  Database,
  Paintbrush2,
  GitBranch,
  Github,
  TerminalSquare,
  Globe,
  Settings2,
  Server,
  FileJson,
  FileText,
  Wrench,
  FolderGit2,
  Brush,
  AppWindow,
  LucideIcon,
} from "lucide-react";


interface SkillsProps {
  skillsCategories: SkillCategory[];
  accentColor: string;
}

// Icon map based on skill name
const skillIcons: Record<string, JSX.Element> = {
  JavaScript: <FileJson color="#f0db4f" className="inline w-5 h-5 mr-1" />,
  HTML: <FileCode2 color="#e34c26" className="inline w-5 h-5 mr-1" />,
  CSS: <Paintbrush2 color="#264de4" className="inline w-5 h-5 mr-1" />,
  C: <Code2 color="#5c6bc0" className="inline w-5 h-5 mr-1" />,
  "C++": <Code2 color="#00599c" className="inline w-5 h-5 mr-1" />,
  MongoDB: <Database color="#4db33d" className="inline w-5 h-5 mr-1" />,
  "Express.js": <Server color="#333" className="inline w-5 h-5 mr-1" />,
  ReactJS: <AppWindow color="#61dafb" className="inline w-5 h-5 mr-1" />,
  "React Native (Expo)": <AppWindow color="#0a84ff" className="inline w-5 h-5 mr-1" />,
  "Node.js": <Cpu color="#3c873a" className="inline w-5 h-5 mr-1" />,
  "RESTful API": <Globe color="#2b6cb0" className="inline w-5 h-5 mr-1" />,
  Bootstrap: <Brush color="#7952b3" className="inline w-5 h-5 mr-1" />,
  "Tailwind CSS": <Paintbrush2 color="#38bdf8" className="inline w-5 h-5 mr-1" />,
  "Material UI": <Paintbrush2 color="#0081cb" className="inline w-5 h-5 mr-1" />,
  Figma: <Brush color="#a259ff" className="inline w-5 h-5 mr-1" />,
  Git: <GitBranch color="#f34f29" className="inline w-5 h-5 mr-1" />,
  GitHub: <Github color="#181717" className="inline w-5 h-5 mr-1" />,
  Postman: <FileText color="#ff6c37" className="inline w-5 h-5 mr-1" />,
  "VS Code": <TerminalSquare color="#0078d7" className="inline w-5 h-5 mr-1" />,
};


const CategoryIcon: React.FC<{ categoryName: string; accentColor: string }> = ({ categoryName, accentColor }) => {
  const iconClass = `h-8 w-8 text-${accentColor}-400 mb-3`;
  switch (categoryName.toLowerCase()) {
    case 'programming languages':
      return <CodeBracketIcon className={iconClass} />;
    case 'libraries & frameworks':
      return <CpuChipIcon className={iconClass} />;
    case 'ui frameworks':
      return <PaintBrushIcon className={iconClass} />;
    case 'tools & platforms':
      return <WrenchScrewdriverIcon className={iconClass} />;
    default:
      return <CodeBracketIcon className={iconClass} />;
  }
};

const Skills: React.FC<SkillsProps> = ({ skillsCategories, accentColor }) => {
  return (
    <Section id="skills" title="My Skillset" subtitle="Technologies I work with" accentColor={accentColor}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsCategories.map((category) => (
          <div
            key={category.id}
            className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
          >
            <CategoryIcon categoryName={category.name} accentColor={accentColor} />
            <h3 className="text-xl font-semibold text-slate-100 mb-4">{category.name}</h3>
            <ul className="space-y-2 flex-grow">
              {category.skills.map((skill) => (
                <li key={skill.id} className="text-slate-300">
                  <span className={`inline-flex items-center bg-slate-700 text-${accentColor}-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
                    {skillIcons[skill.name] || <Settings2 className="inline w-5 h-5 mr-1" />} {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
