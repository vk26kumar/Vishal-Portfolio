
import React from 'react';
import { Project } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons/SocialIcons'; // Assuming GithubIcon is in SocialIcons
import { VideoCameraIcon, DocumentTextIcon } from './icons/GenericIcons';

interface ProjectCardProps {
  project: Project;
  accentColor: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, accentColor }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-xl font-semibold text-slate-100 mb-1`}>{project.title}</h3>
        {project.subtitle && <p className={`text-sm text-${accentColor}-400 mb-1`}>{project.subtitle}</p>}
        <p className="text-xs text-slate-400 mb-3">{project.date}</p>
        
        <div className="mb-4 flex-grow">
          {project.description.map((desc, index) => (
            <p key={index} className="text-slate-300 text-sm mb-1 list-item list-inside ml-2">&bull; {desc}</p>
          ))}
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-200 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className={`px-2 py-1 bg-slate-700 text-${accentColor}-300 text-xs rounded-full`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-slate-700 flex items-center justify-start space-x-3">
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-sm text-${accentColor}-400 hover:text-${accentColor}-300 transition-colors font-medium`}
            >
              <ExternalLinkIcon className="h-4 w-4 mr-1" /> Live Demo
            </a>
          )}
          {project.githubRepo && (
            <a
              href={project.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-sm text-${accentColor}-400 hover:text-${accentColor}-300 transition-colors font-medium`}
            >
              <GithubIcon className="h-4 w-4 mr-1" /> GitHub
            </a>
          )}
          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-sm text-${accentColor}-400 hover:text-${accentColor}-300 transition-colors font-medium`}
            >
              <VideoCameraIcon className="h-4 w-4 mr-1" /> Demo Video
            </a>
          )}
          {project.uiPdf && (
            <a
              href={project.uiPdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-sm text-${accentColor}-400 hover:text-${accentColor}-300 transition-colors font-medium`}
            >
              <DocumentTextIcon className="h-4 w-4 mr-1" /> UI PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
