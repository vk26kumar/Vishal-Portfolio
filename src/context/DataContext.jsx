import { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'vk_portfolio_data'

export const DEFAULT_DATA = {
  personal: {
    name: 'Vishal Kumar',
    email: 'vkumar26062003@gmail.com',
    phone: '+91 7800982247',
    location: 'Gorakhpur, Uttar Pradesh',
    bio: 'Engineering intelligent systems at the intersection of web, mobile, and AI. I build scalable full-stack applications, ML-powered tools, and automation workflows that solve real problems.',
    resumeLink: 'https://drive.google.com/file/d/15uOcrrv9iTh4miC47VIfdgC8rxIg5x0p/view?usp=sharing',
    taglines: [
      'Full Stack MERN Developer',
      'React Native Developer',
      'Machine Learning Engineer',
      'AI Agent Builder',
      'Problem Solver',
    ],
    aboutLong: `I'm a Computer Science student at MMMUT Gorakhpur with a passion for building things that matter. From architecting full-stack platforms serving thousands of students, to training ML models that detect zero-day threats — I thrive at the intersection of engineering and impact.`,
  },
  social: [
    { id: 1, label: 'GitHub', href: 'https://github.com/vk26kumar' },
    { id: 2, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishal-kumar2606/' },
    { id: 3, label: 'LeetCode', href: 'https://leetcode.com/u/code_with_Vishal/' },
    { id: 4, label: 'GeeksForGeeks', href: 'https://www.geeksforgeeks.org/user/vkumar26wiq5/' },
    { id: 5, label: 'CodeChef', href: 'https://www.codechef.com/users/code_vishal_27' },
    { id: 6, label: 'Codeforces', href: 'https://codeforces.com/profile/vishal_26_kumar' },
    { id: 7, label: 'Kaggle', href: 'https://www.kaggle.com/vishalkumar00126' },
  ],
  education: [
    {
      id: 1,
      degree: 'B.Tech — Computer Science & Engineering',
      institution: 'MMMUT, Gorakhpur',
      period: '2023 — Ongoing',
      score: '9.27 / 10.0',
      type: 'cgpa',
      highlight: true,
    },
    {
      id: 2,
      degree: 'Class XII (CBSE)',
      institution: 'D.A.V Public Senior Secondary School, Bina',
      period: '2023',
      score: '86.6%',
      type: 'percentage',
      highlight: false,
    },
    {
      id: 3,
      degree: 'Class X (CBSE)',
      institution: 'D.A.V Public School, Kakri',
      period: '2021',
      score: '98.17%',
      type: 'percentage',
      highlight: false,
    },
  ],
  experience: [
    {
      id: 1, role: 'IT Intern', company: 'Aditya Birla Group — Hindalco Industries',
      period: 'May 2025 — June 2025', type: 'Industry', color: '#00f5d4',
      points: 'Engineered and deployed the About Renusagar web platform, establishing the campus\'s digital identity.\nEnhanced professional skills in corporate collaboration, task ownership, and client communication.',
    },
    {
      id: 2, role: 'Development Team Member', company: 'MMMUT Reso | Technical Society MMMUT',
      period: 'July 2025 — Jan 2026', type: 'Tech Society', color: '#7c3aed',
      points: 'Spearheading development of MMMUT.XYZ — an interactive academic platform for 5,000+ students.\nFostering innovation and learning culture through active tech contributions.',
    },
    {
      id: 3, role: 'Social Intern', company: 'Save Child Beggar Foundation — Delhi',
      period: 'June 2025', type: 'NGO', color: '#ffd60a',
      points: "Executed a social impact initiative under the theme 'Social Health & Social Education'.",
    },
  ],
  projects: [
    {
      id: 1, title: 'AI-Evaluate', subtitle: 'AI-Powered Answer Sheet Evaluation',
      description: 'An AI-powered automated evaluation engine eliminating bias and accelerating grading with interactive learning tools, digital whiteboard, and AI dashboard for insights.',
      tech: 'AI/ML, React.js, Node.js, Express.js, MongoDB',
      liveLink: 'https://ai-evaluaite-1.onrender.com/', githubLink: '',
      color: '#00f5d4', featured: true, period: 'March 2025', icon: '🤖',
    },
    {
      id: 2, title: 'Dine Time', subtitle: 'Restaurant Reservation Mobile App',
      description: 'Production-ready booking app with multi-mode authentication, Google Maps integration, Firebase real-time sync, and public APK release via EAS Build.',
      tech: 'React Native, Expo, Firebase, Google Maps API, Payment Gateway',
      liveLink: 'https://drive.google.com/file/d/1GKMG9-JWUVZm-tp3u9P3uh0qjEjt1q-E/view', githubLink: '',
      color: '#7c3aed', featured: true, period: 'May 2025', icon: '🍽️',
    },
    {
      id: 3, title: 'Travel Roots', subtitle: 'Full-Stack Booking Platform',
      description: 'A full-stack travel booking platform with Passport.js OAuth, Razorpay payment gateway, webhook verification, Helmet security and rate limiting.',
      tech: 'MongoDB, Express.js, Node.js, EJS, Passport.js, Razorpay',
      liveLink: 'https://travel-roots.onrender.com/listings', githubLink: '',
      color: '#00d68f', featured: true, period: 'Feb 2025', icon: '✈️',
    },
    {
      id: 4, title: 'Resume-Driven AI Job Automation', subtitle: 'n8n Automation Workflow',
      description: 'Event-driven AI automation converting resume PDFs into personalized job recommendations using LLMs, Apify scraping, and Google APIs.',
      tech: 'n8n, JavaScript, LLM APIs, Apify, Google Drive API, Gmail API',
      liveLink: '', githubLink: 'https://github.com/vk26kumar/resume-driven-job-automation-n8n',
      color: '#ffd60a', featured: false, period: 'Jan 2025', icon: '⚡',
    },
    {
      id: 5, title: 'AI Intrusion Detection System', subtitle: 'Federated Learning IDPS',
      description: 'Real-time AI-powered IDPS using hybrid ML & Deep Learning for detecting zero-day cyber threats with Federated Learning for privacy-preserving training.',
      tech: 'Python, TensorFlow, Scikit-learn, Federated Learning, SHAP, LIME',
      liveLink: '', githubLink: '',
      color: '#ff3366', featured: false, period: 'Ongoing', icon: '🛡️',
    },
  ],
  skills: {
    Languages: [
      { name: 'JavaScript', level: 92 },
      { name: 'Python', level: 85 },
      { name: 'TypeScript', level: 78 },
      { name: 'C/C++', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'HTML/CSS', level: 95 },
    ],
    Frontend: [
      { name: 'React.js', level: 92 },
      { name: 'React Native', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Framer Motion', level: 75 },
      { name: 'Figma', level: 72 },
    ],
    Backend: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 87 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 78 },
      { name: 'RESTful APIs', level: 90 },
    ],
    'AI/ML': [
      { name: 'Scikit-learn', level: 80 },
      { name: 'TensorFlow', level: 75 },
      { name: 'NumPy/Pandas', level: 85 },
      { name: 'n8n Automation', level: 82 },
      { name: 'OpenAI APIs', level: 80 },
    ],
    DevOps: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 70 },
      { name: 'Firebase', level: 82 },
      { name: 'AWS', level: 65 },
      { name: 'Vercel/Render', level: 88 },
    ],
  },
  // Flat list of all technologies shown in the tag cloud
  allTechnologies: [
    'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS',
    'React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'MySQL',
    'TailwindCSS', 'Bootstrap', 'Material UI', 'Figma',
    'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'OpenAI APIs',
    'Git', 'GitHub', 'Docker', 'Firebase', 'AWS', 'Vercel', 'Render',
    'n8n', 'Postman', 'Passport.js', 'Razorpay', 'Expo',
  ],
  achievements: [
    { id: 1, title: '3rd Place — Editing Competition', event: 'CSA Fest – TECHSRIJAN\'24', icon: '🥉', color: '#00f5d4', link: '#' },
    { id: 2, title: '4th Place — GDG Hackathon', event: 'Competed among 90+ teams', icon: '🏆', color: '#7c3aed', link: '#' },
    { id: 3, title: '3rd Place — Snap Shuffles', event: 'ACE Civil Engineering Society', icon: '🥉', color: '#00d68f', link: '#' },
    { id: 4, title: 'Pre-Final Round — Code for Bharat', event: 'Microsoft Hackathon — Among 10,500+ teams', icon: '⚡', color: '#ffd60a', link: '#' },
    { id: 5, title: 'Participated — Sparkathon', event: 'Walmart All India Hackathon', icon: '🔥', color: '#ff3366', link: '#' },
    { id: 6, title: 'Core Organizing Committee', event: 'Internal Smart India Hackathon (SIH\'25), MMMUT', icon: '🎯', color: '#00f5d4', link: '#' },
  ],
  certifications: [
    { id: 1, title: 'IT Intern Certificate', issuer: 'Hindalco Industries — Aditya Birla Group', date: 'June 2025', link: '#' },
    { id: 2, title: 'Development Team Certificate', issuer: 'MMMUT Reso Technical Society', date: 'Jan 2026', link: '#' },
    { id: 3, title: 'Social Internship Certificate', issuer: 'Save Child Beggar Foundation', date: 'June 2025', link: '#' },
  ],
}

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [portfolioData, setPortfolioData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        // Merge with defaults to handle new fields added later
        return { ...DEFAULT_DATA, ...parsed }
      }
    } catch {}
    return DEFAULT_DATA
  })

  // Listen for storage changes from Admin panel (cross-tab sync)
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try {
          setPortfolioData({ ...DEFAULT_DATA, ...JSON.parse(e.newValue) })
        } catch {}
      }
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  return (
    <DataContext.Provider value={{ portfolioData, setPortfolioData }}>
      {children}
    </DataContext.Provider>
  )
}

export function usePortfolio() {
  return useContext(DataContext)
}

export { STORAGE_KEY }
