
import React from 'react';
import Section from './Section';
import { SkillCategory } from '../types';
import { CodeBracketIcon, CpuChipIcon, PaintBrushIcon, WrenchScrewdriverIcon } from './icons/GenericIcons'; // Example icons

interface SkillsProps {
  skillsCategories: SkillCategory[];
  accentColor: string;
}

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
          <div key={category.id} className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
            <CategoryIcon categoryName={category.name} accentColor={accentColor} />
            <h3 className="text-xl font-semibold text-slate-100 mb-4">{category.name}</h3>
            <ul className="space-y-2 flex-grow">
              {category.skills.map((skill) => (
                <li key={skill.id} className="text-slate-300">
                   <span className={`inline-block bg-slate-700 text-${accentColor}-300 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full`}>
                    {skill.name}
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
