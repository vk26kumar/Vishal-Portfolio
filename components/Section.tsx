
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  accentColor?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '', titleClassName = '', accentColor = 'teal' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className} bg-slate-900`}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-slate-100 mb-2 ${titleClassName}`}>
            {title}
          </h2>
          {subtitle && <p className={`text-lg text-${accentColor}-400`}>{subtitle}</p>}
           <div className={`h-1 w-20 bg-${accentColor}-500 mx-auto mt-4 rounded`}></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
