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
    aboutLong: "I'm a Computer Science student at MMMUT Gorakhpur with a passion for building things that matter. From architecting full-stack platforms serving thousands of students, to training ML models that detect zero-day threats — I thrive at the intersection of engineering and impact.",
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
      id: 1, role: 'Full Stack Automation & AI Developer Intern',
      company: 'Matus Business Ventures Pvt Ltd',
      period: 'Feb 2026 - Ongoing', type: 'Industry', color: '#00e5ff',
      points: 'Contributed to real-time full stack development projects, building scalable frontend and backend systems.\nGained hands-on experience in end-to-end web development in a fast-paced industry environment.\nDeveloped and implemented automation workflows and AI-driven solutions for business operations.\nIntegrated AI solutions to support live marketing campaigns and improve operational efficiency.',
    },
    {
      id: 3, role: 'Development Team Member',
      company: 'MMMUT Reso | Technical Society MMMUT',
      period: 'July 2025 — Jan 2026', type: 'Tech Society', color: '#7c3aed',
      points: 'Spearheading development of MMMUT.XYZ — an interactive academic platform for 5,000+ students.\nFostering innovation and learning culture through active tech contributions.',
    },
    {
      id: 2, role: 'IT Intern',
      company: 'Aditya Birla Group — Hindalco Industries',
      period: 'May 2025 — June 2025', type: 'Industry', color: '#00f5d4',
      points: "Engineered and deployed the 'About Renusagar' web platform, establishing the campus's digital identity.\nEnhanced professional skills in corporate collaboration, task ownership, and client communication.",
    },
    {
      id: 4, role: 'Social Intern',
      company: 'Save Child Beggar Foundation — Delhi',
      period: 'June 2025', type: 'NGO', color: '#ffd60a',
      points: "Executed a social impact initiative under the theme 'Social Health & Social Education'.",
    },
  ],
  projects: [
    {
      id: 1, title: 'AI-Evaluate', subtitle: 'AI-Powered Answer Sheet Evaluation Engine',
      description: 'AI-Powered Grading & Analytics: Engineered an AI-powered automated evaluation engine eliminating bias and accelerating grading. Integrated interactive learning tools including a digital whiteboard and AI dashboard for insights. Automated academic reporting using dynamic PPT generation and real-time analytics.',
      tech: 'AI/ML, React.js, Node.js, Express.js, MongoDB, JavaScript',
      liveLink: 'https://ai-evaluaite-1.onrender.com/', githubLink: 'https://github.com/vk26kumar/AI-EvaluAIte',
      color: '#00f5d4', featured: true, period: 'March 2025', icon: '🤖',
    },
    {
      id: 2, title: 'Dine Time', subtitle: 'Restaurant Reservation Mobile App',
      description: 'Developed and published a production-ready booking app with Expo & Firebase. Implemented multi-mode authentication (email, guest login, Google) with real-time data sync. Embedded Google Maps API for live location-based restaurant discovery and navigation. Released APK using EAS Build and facilitated public beta testing.',
      tech: 'React Native, Expo, Firebase, Google Maps API, Payment Gateway',
      liveLink: 'https://drive.google.com/file/d/1JjEdReBesn06uaraLk9RQe3hJHexakcl/view?usp=sharing', githubLink: 'https://github.com/Tarkeshvar/DineTime',
      color: '#7c3aed', featured: true, period: 'May 2025', icon: '🍽️',
    },
    {
      id: 3, title: 'Travel Roots', subtitle: 'Full-Stack Booking Platform',
      description: 'Developed a full-stack booking platform using Node.js, Express (MVC architecture), and MongoDB. Implemented secure authentication with Passport.js, supporting local login and Google/GitHub OAuth. Integrated Razorpay payment gateway with server-side verification for secure transactions. Enhanced backend security using Helmet and rate limiting.',
      tech: 'MongoDB, Express.js, Node.js, EJS, Passport.js, Razorpay',
      liveLink: 'https://travel-roots.onrender.com/listings', githubLink: 'https://github.com/vk26kumar/Travel_Roots',
      color: '#00d68f', featured: true, period: 'Feb 2025', icon: '✈️',
    },
    {
      id: 6, title: 'Carbon IQ', subtitle: 'AI-Powered Carbon Emission Tracker',
      description: 'Developed a multilingual carbon reporting mobile application using Expo and React Native for real-time emission tracking. Implemented vendor-based data input with industry-specific parameters. Designed intelligent emission scoring and normalization logic. Built dynamic insights module with actionable sustainability tips. Enabled CSV export and detailed analytics with visual charts.',
      tech: 'React Native, Expo, JavaScript, i18n, Data Visualization, CSV Export',
      liveLink: 'https://drive.google.com/file/d/1OXa4h66cdnP-Os2Lz7PSScqKskfksDl8/view?usp=sharing', githubLink: 'https://github.com/vk26kumar/Carbon-IQ',
      color: '#0071CE', featured: true, period: '2026', icon: '🌱',
    },
    {
      id: 9, title: 'About Renusagar', subtitle: 'Corporate Internship Project (Hindalco)',
      description: 'Engineered and deployed the About Renusagar web platform to establish the campus digital identity. Developed a responsive interface showcasing infrastructure and organizational information. Collaborated at Hindalco Industries (Aditya Birla Group) to deliver a production-ready solution.',
      tech: 'React.js, JavaScript, HTML, CSS, Vercel',
      liveLink: 'https://about-renusgar-internship-h5rkp440c-vishals-projects-049043bb.vercel.app/', githubLink: 'https://github.com/vk26kumar/About_Renusgar-INTERNSHIP',
      color: '#009688', featured: true, period: 'May 2025 - June 2025', icon: '🏢',
    },
    {
      id: 8, title: 'Resume-Driven Job Automation', subtitle: 'AI Workflow with n8n',
      description: 'Built an end-to-end AI automation workflow using n8n to convert resume PDFs into personalized job recommendations. Implemented LLM-based resume parsing with structured data extraction. Integrated real-time job scraping from Naukri using Apify. Automated email delivery of consolidated job recommendations using Gmail API.',
      tech: 'n8n, JavaScript, LLM APIs, Apify, Google Drive API, Gmail API',
      liveLink: '', githubLink: 'https://github.com/vk26kumar/resume-driven-job-automation-n8n',
      color: '#6C63FF', featured: true, period: '2026', icon: '⚡',
    },
    {
      id: 5, title: 'Adaptive AI-Driven Intrusion Detection & Protection System with Federated Learning', subtitle: 'Federated Learning IDPS',
      description: 'Built a real-time AI-powered IDPS using hybrid ML and Deep Learning to detect known, unknown, and zero-day cyber threats. Applied Federated Learning for privacy-preserving collaborative training. Implemented Random Forest, XGBoost, LSTM, and Autoencoders with ensemble strategy. Integrated Explainable AI (SHAP, LIME) for transparent security decisions.',
      tech: 'Python, Scikit-learn, TensorFlow, Federated Learning (Flower/FedML), SHAP, LIME, Scapy, NumPy, Pandas, Linux',
      liveLink: '', githubLink: 'https://github.com/vk26kumar/Adaptive-AI-Driven-Intrusion-Detection-Protection-System',
      color: '#ff3366', featured: true, period: 'Ongoing', icon: '🛡️',
    },
    {
      id: 7, title: 'File Sharing System', subtitle: 'Secure File Transfer Platform',
      description: 'Developed a secure file sharing system for uploading, storing, and sharing files via unique access links. Implemented backend using Node.js and Express with efficient file handling and RESTful APIs. Generated unique shareable links for controlled file access and easy distribution.',
      tech: 'Node.js, Express, JavaScript, HTML, CSS, Multer',
      liveLink: '', githubLink: 'https://github.com/vk26kumar/file-sharing-system',
      color: '#4CAF50', featured: false, period: 'Completed', icon: '📁',
    },
    {
      id: 10, title: 'Unemployment Analysis', subtitle: 'Data Analysis & Visualization',
      description: 'Performed in-depth analysis of unemployment trends using Python and real-world datasets. Created insightful visualizations to identify patterns, seasonal trends, and regional variations. Used statistical techniques to interpret unemployment rates and economic indicators.',
      tech: 'Python, Pandas, NumPy, Matplotlib, Seaborn',
      liveLink: 'https://colab.research.google.com/drive/10XIXX3fJvhEZdj8pzaTbeGnLrYSBQEhh?usp=sharing', githubLink: 'https://github.com/vk26kumar/unemployment-analysis-using-python',
      color: '#FF9800', featured: false, period: '2025', icon: '📊',
    },
    {
      id: 11, title: 'Email Spam Detection', subtitle: 'Machine Learning Classifier',
      description: 'Developed a machine learning model to classify emails as spam or not spam using NLP techniques. Performed text preprocessing including tokenization, stopword removal, and vectorization. Trained and evaluated Naive Bayes models for efficient classification.',
      tech: 'Python, Scikit-learn, NLP, Pandas, NumPy',
      liveLink: 'https://colab.research.google.com/drive/1xeBODBEmD5bOn8zs06l0Ut-jMH9kkHDO?usp=sharing', githubLink: 'https://github.com/vk26kumar/email_spam_detection_with_machine_learning',
      color: '#E91E63', featured: false, period: '2025', icon: '📧',
    },
    {
      id: 12, title: 'Car Price Prediction', subtitle: 'Regression Model',
      description: 'Built a machine learning regression model to predict car prices based on various features. Performed data cleaning, feature engineering, and exploratory data analysis. Evaluated model performance using R-squared and Mean Squared Error metrics.',
      tech: 'Python, Scikit-learn, Pandas, NumPy, Regression',
      liveLink: 'https://colab.research.google.com/drive/1vSM5fzm1VLWGSStoMQtNkiKVUohhOpmh?usp=sharing', githubLink: 'https://github.com/vk26kumar/car_price_predication_machine_learning',
      color: '#3F51B5', featured: false, period: '2025', icon: '🚗',
    },
        {
      id: 13, title: 'AI Social Media Automation System', subtitle: 'Using n8n and LLMs',
      description: 'Architected a scalable AI-driven content automation pipeline integrating LLM-based captioning and AI image generation.Designed an event-driven workflow with human-in-the-loop approval (Telegram bot) improving content quality and control.',
      tech: 'n8n, JavaScript, OpenAI APIs, Telegram Bot API, Google Sheets API, Cloudinary, Meta Graph API',
      liveLink: '#', githubLink: 'https://github.com/vk26kumar/Social-Media-Manager-Automation',
      color: '#3F51B5', featured: true, period: '2026', icon: '🤖',
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
  allTechnologies: [
    'C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS',
    'React.js', 'React Native', 'Node.js', 'Express.js', 'MongoDB', 'MySQL',
    'TailwindCSS', 'Bootstrap', 'Material UI', 'Figma',
    'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'OpenAI APIs',
    'Git', 'GitHub', 'Docker', 'Firebase', 'AWS', 'Vercel', 'Render',
    'n8n', 'Postman', 'Passport.js', 'Razorpay', 'Expo', 'Multer', 'i18n',
  ],
  achievements: [
    { id: 1, title: '3rd Place — Editing Competition', event: "CSA Fest – TECHSRIJAN'24", icon: '🥉', color: '#00f5d4', link: 'https://drive.google.com/file/d/1XmDMkpbr7tmL44qfx4c5S2iEdBDaEBmh/view?usp=drive_link' },
    { id: 2, title: '4th Place — GDG Hackathon', event: 'Competed among 90+ teams', icon: '🏆', color: '#7c3aed', link: 'https://drive.google.com/file/d/1wCAzGUqhFQIq2AoxkhVC8hDUYLBl1tiG/view?usp=drive_link' },
    { id: 3, title: '3rd Place — Snap Shuffles', event: 'ACE Civil Engineering Society', icon: '🥉', color: '#00d68f', link: 'https://drive.google.com/file/d/1iKxiZuWsc-drN-0QAr2Dvc_vpgDDlv2I/view?usp=drive_link' },
    { id: 4, title: 'Pre-Final Round — Code for Bharat', event: 'Microsoft Hackathon — Among 10,500+ teams', icon: '⚡', color: '#ffd60a', link: 'https://drive.google.com/file/d/1jEPPiJaMVXTIK2oie_pgLQiVPHb2lyqX/view?usp=drive_link' },
    { id: 5, title: 'Participated — Sparkathon', event: 'Walmart All India Hackathon', icon: '🔥', color: '#ff3366', link: 'https://drive.google.com/file/d/1sVrlKyl8Q8JHjp2ToS-5ipJiCrpa7c1k/view?usp=drive_link' },
    { id: 6, title: 'Core Organizing Committee', event: "Internal Smart India Hackathon (SIH'25), MMMUT", icon: '🎯', color: '#00f5d4', link: 'https://drive.google.com/file/d/1lArbjNNC6A_E4ZtNhRNGTYZh6d3T1b8m/view?usp=drive_link' },
  ],
  certifications: [
    { id: 1, title: 'IT Intern Certificate', issuer: 'Hindalco Industries — Aditya Birla Group', date: 'June 2025', link: 'https://drive.google.com/file/d/1UjFBFPp4kX1biT9tJScWsTKimtgX7wXW/view?usp=drive_link' },
    { id: 2, title: 'Development Team Certificate', issuer: 'MMMUT Reso Technical Society', date: 'Jan 2026', link: 'https://drive.google.com/file/d/1TbK13LpBtARZWu1gFyq-LNN75A9ECMW4/view?usp=drive_link' },
    { id: 3, title: 'Social Internship Certificate', issuer: 'Save Child Beggar Foundation', date: 'June 2025', link: 'https://drive.google.com/file/d/1tirGHbP7IH_7IJNeP6cKe9a0EtY00kkJ/view?usp=drive_link' },
    { id: 4, title: 'AI Workshop Participation', issuer: 'Centre of Excellence – AI Lab, MMMUT (AISpark)', date: 'July 2025', link: 'https://drive.google.com/file/d/16qK8W2Ab_wrGWnvNywkonitLNhSMIbzX/view?usp=sharing' },
    { id: 5, title: 'Graph Theory Programming Camp', issuer: 'AlgoUniversity', date: '2025', link: 'https://drive.google.com/file/d/1l-ILXonV4ETYyJ3tMXvG0rIwtMbXw5Wl/view?usp=sharing' },
    { id: 6, title: 'Drishyaa Career Counselling Event', issuer: "The Social Engineers' Board, MMMUT", date: 'Nov 2023', link: 'https://drive.google.com/file/d/12xRjK_YTeXDzCeQYc2c4mFD1SRM2EImu/view?usp=drive_link' },
  ],
}

// VERSION TAG — increment this whenever you update DEFAULT_DATA
// This forces the live site to pick up new data even if localStorage exists
const DATA_VERSION = '2025-03-17-v2'

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [portfolioData, setPortfolioData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      const savedVersion = localStorage.getItem(STORAGE_KEY + '_version')

      // If version mismatch → portfolioData.js (DEFAULT_DATA) wins, clear old localStorage
      if (savedVersion !== DATA_VERSION) {
        localStorage.removeItem(STORAGE_KEY)
        localStorage.setItem(STORAGE_KEY + '_version', DATA_VERSION)
        return DEFAULT_DATA
      }

      // Same version → use localStorage (admin panel changes)
      if (saved) {
        return { ...DEFAULT_DATA, ...JSON.parse(saved) }
      }
    } catch {}
    return DEFAULT_DATA
  })

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