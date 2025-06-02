
import React from 'react';
import Section from './Section';
import { Achievement } from '../types';
import { TrophyIcon } from './icons/GenericIcons';
import { ExternalLinkIcon } from './icons/SocialIcons';

interface AchievementsProps {
  achievements: Achievement[];
  accentColor: string;
}

const Achievements: React.FC<AchievementsProps> = ({ achievements, accentColor }) => {
  return (
    <Section id="achievements" title="Achievements" subtitle="Recognitions and accomplishments" accentColor={accentColor}>
      <div className="max-w-2xl mx-auto space-y-6">
        {achievements.map((ach) => (
          <div key={ach.id} className="bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-start space-x-4">
            <div className={`flex-shrink-0 text-${accentColor}-400 mt-1`}>
              <TrophyIcon className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-100">{ach.text}</h3>
              {ach.organization && <p className="text-sm text-slate-400 mb-1">{ach.organization}</p>}
              {ach.link && ach.link !== "#" && (
                <a 
                  href={ach.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`inline-flex items-center text-sm text-${accentColor}-400 hover:text-${accentColor}-300 transition-colors font-medium`}
                >
                  View Link <ExternalLinkIcon className="h-3 w-3 ml-1" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
