
export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface AcademicRecord {
  id: string;
  degree: string;
  institution: string;
  year: string;
  score: string;
  logo?: string; // Optional: path to a logo or a placeholder
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  liveDemo?: string;
  githubRepo?: string;
  uiPdf?: string;
  demoVideo?: string;
  techStack: string[];
  description: string[];
  image: string; 
}

export interface Achievement {
  id: string;
  text: string;
  link?: string;
  organization?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ReactNode; // For potential future icon integration
}
export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Responsibility {
  id: string;
  role: string;
  organization: string;
  duration: string;
  description: string[];
  link?: string; // Optional link for more details
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  contact: ContactInfo;
  academicDetails: AcademicRecord[];
  projects: Project[];
  achievements: Achievement[];
  skills: SkillCategory[];
  responsibilities: Responsibility[];
  interestsSummary: string;
  profileImage: string;
}

export interface NavItem {
  label: string;
  href: string;
}
