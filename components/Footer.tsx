
import React from 'react';
import { ContactInfo } from '../types';
import { GithubIcon, LinkedInIcon, EmailIcon } from './icons/SocialIcons';

interface FooterProps {
  name: string;
  contact: ContactInfo;
}

const Footer: React.FC<FooterProps> = ({ name, contact }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-8">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-teal-400 transition-colors">
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-400 hover:text-teal-400 transition-colors">
            <GithubIcon className="h-6 w-6" />
          </a>
          <a href={`mailto:${contact.email}`} aria-label="Email" className="text-slate-400 hover:text-teal-400 transition-colors">
            <EmailIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
