import React, { useEffect, useState } from 'react';
import Section from './Section';
import { ACCENT_COLOR } from '../constants';
import './About.css';

interface AboutProps {
  interestsSummary: string;
}

const About: React.FC<AboutProps> = ({ interestsSummary }) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDark);
  }, [isDark]);

  return (
    <Section
      id="about"
      title="About Me"
      subtitle=""
      accentColor={ACCENT_COLOR}
      className="about-section"
    >
      <div className="typing-container">
        <h2 className="typing-text">A glimpse into my passion and expertise</h2>
      </div>

      <div className="content-box">
        {interestsSummary.map((line, index) => (
      <p className="about-text" key={index}>{line}
     </p>
     ))}
     </div>

    </Section>
  );
};

export default About;
