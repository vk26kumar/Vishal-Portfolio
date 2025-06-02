
import React from 'react';
import { PORTFOLIO_DATA, ACCENT_COLOR } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const { 
    name, 
    title,
    tagline, 
    contact, 
    academicDetails, 
    projects, 
    achievements, 
    skills, 
    responsibilities, 
    interestsSummary,
    profileImage
  } = PORTFOLIO_DATA;

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-slate-100">
      <Header name={name} navItems={navItems} accentColor={ACCENT_COLOR} />
      <main className="flex-grow">
        <Hero name={name} title={title} tagline={tagline} contact={contact} profileImage={profileImage} accentColor={ACCENT_COLOR} />
        <About interestsSummary={interestsSummary} />
        <Skills skillsCategories={skills} accentColor={ACCENT_COLOR} />
        <Projects projects={projects} accentColor={ACCENT_COLOR} />
        <Education academicDetails={academicDetails} accentColor={ACCENT_COLOR} />
        <Experience responsibilities={responsibilities} accentColor={ACCENT_COLOR} />
        <Achievements achievements={achievements} accentColor={ACCENT_COLOR} />
        <Contact contactInfo={contact} accentColor={ACCENT_COLOR} />
      </main>
      <Footer name={name} contact={contact} />
    </div>
  );
};

export default App;
