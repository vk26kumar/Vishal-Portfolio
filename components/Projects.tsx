
import React from 'react';
import Section from './Section';
import { Project } from '../types';
import ProjectCard from './ProjectCard';

interface ProjectsProps {
  projects: Project[];
  accentColor: string;
}

const Projects: React.FC<ProjectsProps> = ({ projects, accentColor }) => {
  return (
    <Section id="projects" title="My Projects" subtitle="Showcasing my recent work" accentColor={accentColor} className="bg-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} accentColor={accentColor} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
