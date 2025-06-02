import React from 'react';
import Section from './Section';
import { AcademicRecord } from '../types';
import { AcademicCapIcon } from './icons/GenericIcons';
import "./Education.css";

interface EducationProps {
  academicDetails: AcademicRecord[];
  accentColor: string;
}

const Education: React.FC<EducationProps> = ({ academicDetails, accentColor }) => {
  return (
    <Section
      id="education"
      title="My Education"
      subtitle="Academic qualifications and achievements"
      accentColor={accentColor}
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-10 relative pl-8 sm:pl-14">

          {/* Vertical timeline line */}
          <div
            className={`absolute left-5 top-0 bottom-0 w-0.5 bg-${accentColor}-500/40 sm:block hidden animate-grow`}
          ></div>

          {academicDetails.map((record, index) => (
            <div
              key={record.id}
              className="flex items-start space-x-4 relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              {/* Timeline Icon */}
              <div
                className={`z-10 bg-slate-900 p-1.5 rounded-full border-2 border-${accentColor}-500 shadow-md shadow-${accentColor}-400/20`}
              >
                <AcademicCapIcon className={`h-8 w-8 text-${accentColor}-400`} />
              </div>

              {/* Card Content */}
              <div className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 w-full">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                  <h3 className="text-xl font-bold text-slate-100">{record.degree}</h3>
                  <span className={`text-sm text-${accentColor}-400 font-medium mt-1 sm:mt-0`}>
                    {record.year}
                  </span>
                </div>
                <p className="text-slate-300 font-medium mb-1">{record.institution}</p>
                <p className={`text-md font-semibold text-${accentColor}-300`}>
                  Score: {record.score}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
