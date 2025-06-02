
import { PortfolioData } from './types';
const profile = "/profile.png";
const travelRootsImage = "/Travel.png";
const aiEvaluateImage = "/evalute.png";
const dineTimeImage = "/Dine.png";

export const ACCENT_COLOR = "teal"; 

export const PORTFOLIO_DATA: PortfolioData = {
  name: "Vishal Kumar",
  title: "Full-Stack Developer, App Developer & AI Enthusiast",
  tagline: "Building innovative solutions with a passion for technology and user experience. Exploring the frontiers of AI and scalable web applications.",
  profileImage: profile,
  contact: {
    phone: "+91 7800982247",
    email: "vkumar26062003@gmail.com",
    linkedin: "https://linkedin.com/in/vishal-kumar2606",
    github: "https://github.com/vk26kumar",
    resume: "https://drive.google.com/file/d/1I6ZVffGRXJ589ZjZ0joUi6DQsQT49R-7/view?usp=sharing",
  },
  academicDetails: [
    {
      id: "btech",
      degree: "B.Tech (CSE)",
      institution: "MMMUT, Gorakhpur",
      year: "2023-Ongoing",
      score: "9.23/10.0",
    },
    {
      id: "classxii",
      degree: "Class XII (CBSE)",
      institution: "D.A.V Public Senior Secondary School, Bina",
      year: "2023",
      score: "86.6%",
    },
    {
      id: "classx",
      degree: "Class X (CBSE)",
      institution: "D.A.V Public School, Kakri",
      year: "2021",
      score: "98.17%",
    },
  ],
  projects: [
    {
      id: "travel-roots",
      title: "Travel Roots",
      subtitle: "Full-Stack Web Application",
      date: "February 2025",
      liveDemo: "https://travel-roots.onrender.com/listings", // Placeholder as per resume, update if available
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Passport.js", "Geoapify", "Joi", "Multer"],
      description: [
        "Designed and implemented a scalable backend using Node.js and Express.js, following MVC architecture.",
        "Engineered MongoDB database schema for property listings and user data, achieving query response times under 200ms.",
        "Implemented Google and GitHub OAuth authentication using Passport.js with secure session handling.",
        "Integrated Geoapify API to display property locations dynamically.",
        "Used Joi for schema validation and flash messages for error handling.",
        "Integrated Multer for seamless image uploads and storage.",
        "Built a fully responsive UI using React for a smooth user experience."
      ],
      image: travelRootsImage,
    },
    {
      id: "ai-evaluate",
      title: "AI-Evaluate",
      subtitle: "AI-Powered Automated Answer Sheet Evaluation (Hackathon Project)",
      date: "March 2025",
      liveDemo: "https://ai-evaluaite-1.onrender.com/", 
      techStack: ["AI/ML", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      description: [
        "Developed an AI-driven grading system to automate answer sheet evaluation, reducing manual workload.",
        "Implemented AI-powered marks evaluation and automated answer generation.",
        "Integrated interactive whiteboard for dynamic student engagement.",
        "Created an AI-driven analytics dashboard for tracking academic progress.",
        "Designed a PPT Auto-Generator for instant report and presentation generation.",
        "Optimized AI models for real-time student assessment in a hackathon environment."
      ],
      image: aiEvaluateImage,
    },
    {
      id: "dine-time",
      title: "Dine Time",
      subtitle: "Restaurant Reservation Mobile App (Mobile Project)",
      date: "May 2025",
      githubRepo: "https://github.com/vk26kumar/Dine_Time", 
      demoVideo: "https://drive.google.com/file/d/1RlG27_0I2PsD9izKmgjPzac8MuOPFy41/view", 
      uiPdf: "https://drive.google.com/file/d/1g7f8dP_8vHpLLScrYvwH82NloiTz-37c/view", 
      techStack: ["React Native", "Expo Go", "Firebase", "Google Maps API"],
      description: [
        "Enabled flexible user access: sign up, log in, or continue as guest.",
        "Integrated Google Maps API for restaurant locations and directions.",
        "Designed features for instant table booking (date, time, guest selection).",
        "Built a search system to locate restaurants by name or location.",
        "Managed real-time data and user authentication using Firebase.",
        "Exported production build as APK using EAS Build for public testing."
      ],
      image: dineTimeImage,
    },
  ],
  achievements: [
    {
      id: "techsrijan24",
      text: "3rd Place - Editing Competition",
      organization: "CSA Fest – TECHSRIJAN'24",
      link: "https://drive.google.com/file/d/1XmDMkpbr7tmL44qfx4c5S2iEdBDaEBmh/view",
    },
    {
      id: "gdg-hackathon",
      text: "4th Place - GDG Hackathon (Competed among 90+ teams)",
      link: "https://drive.google.com/file/d/1wCAzGUqhFQIq2AoxkhVC8hDUYLBl1tiG/view", 
    },
    {
      id: "snap-shuffles",
      text: "3rd Place - Snap Shuffles Competition",
      organization: "ACE Civil Engineering Society",
      link: "#", // Resume says LINK
    },
  ],
  skills: [
    {
      id: "languages",
      name: "Programming Languages",
      skills: [
        { id: "c", name: "C" }, { id: "cpp", name: "C++" }, { id: "html", name: "HTML" }, { id: "css", name: "CSS" }, { id: "javascript", name: "JavaScript" }
      ],
    },
    {
      id: "frameworks",
      name: "Libraries & Frameworks",
      skills: [
        { id: "mongodb", name: "MongoDB" }, { id: "express", name: "Express.js" }, { id: "reactjs", name: "ReactJS" }, 
        { id: "reactnative", name: "React Native (Expo)" }, { id: "nodejs", name: "Node.js" }, { id: "restapi", name: "RESTful API" }
      ],
    },
    {
      id: "ui-frameworks",
      name: "UI Frameworks",
      skills: [
        { id: "bootstrap", name: "Bootstrap" }, { id: "tailwindcss", name: "Tailwind CSS" }, { id: "materialui", name: "Material UI" }
      ],
    },
    {
      id: "tools",
      name: "Tools & Platforms",
      skills: [
        { id: "git", name: "Git" }, { id: "github", name: "GitHub" }
      ],
    },
  ],
  responsibilities: [
    {
      id: "mmmut-reso",
      role: "Executive Member – MMMUT Reso",
      organization: "Society MMMUT",
      duration: "April 2025 - Ongoing",
      description: [
        "Contributing to MMMUT.XYZ, a website creating an accessible and dynamic learning environment.",
        "Promoting academic excellence and continuous growth within the society."
      ]
    },
    {
      id: "mmmut-reso",
      role: "IT INTERN",
      organization: "Hindalco Industries Limited",
      duration: "May 2025 - Ongoing",
      description: [
        "Contributing to MMMUT.XYZ, a website creating an accessible and dynamic learning environment.",
        "Promoting academic excellence and continuous growth within the society."
      ]
    }
  ],
  interestsSummary: [
    "Passionate about Full-Stack Development, specializing in scalable web applications, UI/UX design, and API development.",
    "Keenly interested in Artificial Intelligence & Data Science, including:",
    "  - Machine Learning (ML)",
    "  - Deep Learning (DL)",
    "Core curriculum knowledge includes:",
    "  - Data Structures",
    "  - Digital Logic & Design",
    "  - Object-Oriented Programming",
    "  - Database Management Systems",
    "  - Design & Analysis of Algorithms",
    "Enjoys exploring new technologies, participating in hackathons, and collaborating on open-source projects.",
    "Always eager to learn, adapt, and contribute to innovative solutions that make a real-world impact."
  ],
};
