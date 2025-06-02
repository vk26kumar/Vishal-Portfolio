import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { Responsibility } from '../types';
import { BriefcaseIcon } from './icons/GenericIcons';
import "./Experience.css"; 

interface ExperienceProps {
  responsibilities: Responsibility[];
  accentColor: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Experience: React.FC<ExperienceProps> = ({ responsibilities, accentColor }) => {
  if (responsibilities.length === 0) return null;

  return (
    <Section id="experience" title="Experience" subtitle="Positions of Responsibility" accentColor={accentColor} className="bg-slate-800">
      <div className="max-w-3xl mx-auto space-y-8">
        {responsibilities.map((resp, index) => (
          <motion.div
            key={resp.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bg-slate-800 p-6 rounded-lg shadow-lg border-l-4 border-teal-500 hover:shadow-2xl hover:scale-[1.015] transition-all duration-300"
          >
            <div className="flex items-center mb-3">
              <BriefcaseIcon className={`h-6 w-6 text-${accentColor}-400 mr-3`} />
              <div>
                <h3 className="text-xl font-semibold text-slate-100">{resp.role}</h3>
                <p className={`text-md text-${accentColor}-300`}>{resp.organization}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-3">{resp.duration}</p>
            <ul className="list-disc list-inside space-y-1 text-slate-300">
              {resp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
