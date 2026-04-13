// ============================================================
// VISHAL KUMAR - PORTFOLIO DATA
// Edit this file to update your portfolio content
// ============================================================

export const personalInfo = {
  name: "Vishal Kumar",
  taglines: [
    "Full Stack MERN Developer",
    "React Native Developer",
    "Machine Learning Engineer",
    "AI Agent Builder",
    "Problem Solver",
  ],
  email: "vkumar26062003@gmail.com",
  phone: "+91 7800982247",
  location: "Gorakhpur, Uttar Pradesh",
  bio: "Engineering intelligent systems at the intersection of web, mobile, and AI. I build scalable full-stack applications, ML-powered tools, and automation workflows that solve real problems.",
  resumeLink: "https://drive.google.com/file/d/15uOcrrv9iTh4miC47VIfdgC8rxIg5x0p/view?usp=sharing",
  portfolioLink: "https://vishal-nu.vercel.app/",
};

export const socialLinks = {
  github: "https://github.com/vk26kumar",
  linkedin: "https://www.linkedin.com/in/vishal-kumar2606/",
  leetcode: "https://leetcode.com/u/code_with_Vishal/",
  gfg: "https://www.geeksforgeeks.org/user/vkumar26wiq5/",
  codechef: "https://www.codechef.com/users/code_vishal_27",
  codeforces: "https://codeforces.com/profile/vishal_26_kumar",
  kaggle: "https://www.kaggle.com/vishalkumar00126",
};

export const education = [
  {
    id: 1,
    degree: "B.Tech — Computer Science & Engineering",
    institution: "MMMUT, Gorakhpur",
    period: "2023 — Ongoing",
    score: "9.28 / 10.0",
    type: "cgpa",
    highlight: true,
  },
  {
    id: 2,
    degree: "Class XII (CBSE)",
    institution: "D.A.V Public Senior Secondary School, Bina",
    period: "2023",
    score: "86.6%",
    type: "percentage",
    highlight: false,
  },
  {
    id: 3,
    degree: "Class X (CBSE)",
    institution: "D.A.V Public School, Kakri",
    period: "2021",
    score: "98.17%",
    type: "percentage",
    highlight: false,
  },
];

export const experience = [
  {
    id: 1,
    role: "IT Intern",
    company: "Aditya Birla Group — Hindalco Industries",
    period: "May 2025 — June 2025",
    type: "Industry",
    color: "#00f5d4",
    certLink: "https://drive.google.com/file/d/1UjFBFPp4kX1biT9tJScWsTKimtgX7wXW/view?usp=sharing",
    points: [
      "Engineered and deployed the 'About Renusagar' web platform, establishing the campus's digital identity.",
      "Enhanced professional skills in corporate collaboration, task ownership, and client communication.",
    ],
  },
  {
    id: 2,
    role: "Development Team Member",
    company: "MMMUT Reso | Technical Society MMMUT",
    period: "July 2025 — Jan 2026",
    type: "Tech Society",
    color: "#7c3aed",
    certLink: "https://drive.google.com/file/d/1TbK13LpBtARZWu1gFyq-LNN75A9ECMW4/view?usp=sharing",
    points: [
      "Spearheading development of MMMUT.XYZ — an interactive academic platform for 5,000+ students.",
      "Fostering innovation and learning culture through active tech contributions.",
    ],
  },
  {
    id: 3,
    role: "Social Intern",
    company: "Save Child Beggar Foundation — Delhi",
    period: "June 2025",
    type: "NGO",
    color: "#ffd60a",
    certLink: "https://drive.google.com/file/d/1UoEEHSBOfR92V3Pi7dLSCoHjdYEv4tsK/view?usp=sharing",
    points: [
      "Executed a social impact initiative under the theme 'Social Health & Social Education'.",
    ],
  },
  {
  id: 4,
  role: "Full Stack Automation & AI Developer Intern",
  company: "Matus Business Ventures Pvt Ltd",
  period: "Feb 2025 - Ongoing",
  type: "Industry",
  color: "#00e5ff",
  certLink: "https://drive.google.com/file/d/1b0U-HXUP5FsiCi1L4Or0RBxeszkyuW9T/view?usp=sharing",
  points: [
    "Contributed to real-time full stack development projects, building scalable frontend and backend systems.",
    "Gained hands-on experience in end-to-end web development in a fast-paced industry environment.",
    "Developed and implemented automation workflows and AI-driven solutions for business operations.",
    "Integrated AI solutions to support live marketing campaigns and improve operational efficiency.",
  ],
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Evaluate",
    subtitle: "AI-Powered Answer Sheet Evaluation Engine",
    description:
      "AI-Powered Grading & Analytics: Engineered an AI-powered automated evaluation engine eliminating bias and accelerating grading."
      "Integrated interactive learning tools including a digital whiteboard and AI dashboard for insights."
      "Automated academic reporting using dynamic PPT generation and real-time analytics.",
    tech: ["AI/ML", "React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    links: {
      live: "https://ai-evaluaite-1.onrender.com/",
      github: "https://github.com/vk26kumar/AI-EvaluAIte",
    },
    color: "#00f5d4",
    featured: true,
    period: "March 2025",
    icon: "🤖",
  },
  {
    id: 2,
    title: "Dine Time",
    subtitle: "Restaurant Reservation Mobile App",
    description:
      "Developed and published a production-ready booking app with Expo & Firebase. "
      "Implemented multi-mode authentication (email, guest login, Google) with real-time data sync."
      "Embedded Google Maps API for live location-based restaurant discovery and navigation."
      "Released APK using EAS Build and facilitated public beta testing."
      "Configured Firebase Realtime Database for instant booking updates and user history tracking.",
    tech: ["React Native", "Expo", "Firebase", "Google Maps API", "Payment Gateway"],
    links: {
      live: "https://drive.google.com/file/d/1GKMG9-JWUVZm-tp3u9P3uh0qjEjt1q-E/view",
      github: "https://github.com/vk26kumar/Dine_Time",
    },
    color: "#7c3aed",
    featured: true,
    period: "May 2025",
    icon: "🍽️",
  },
  {
    id: 3,
    title: "Travel Roots",
    subtitle: "Full-Stack Booking Platform",
    description:
    "Developed a full-stack booking platform using Node.js, Express (MVC architecture), and MongoDB."
    "Implemented secure authentication with Passport.js, supporting local login and Google/GitHub OAuth."
    "Integrated Razorpay payment gateway with server-side verification for secure transactions."
    "Configured Razorpay Webhooks to handle asynchronous payment events and ensure reliable payment confirmation."
    "Enhanced backend security using Helmet and rate limiting to prevent abuse and brute-force attacks.",
    tech: ["MongoDB", "Express.js", "Node.js", "EJS", "Passport.js", "Razorpay"],
    links: {
      live: "https://travel-roots.onrender.com/listings",
      github: "https://github.com/vk26kumar/Travel_Roots",
    },
    color: "#00d68f",
    featured: true,
    period: "Feb 2025",
    icon: "✈️",
  },
  {
    id: 4,
    title: "'Adaptive AI-Driven Intrusion Detection & Protection System with Federated Learning",
    subtitle: "Federated Learning IDPS",
    description:
      "Built a real-time AI-powered IDS using hybrid Autoencoder (Deep Learning) + XGBoost (Machine Learning) ensemble achieving 99.0% accuracy on CIC-IDS2017 benchmark dataset with 99.7% AUC-ROC."
      "Implemented live packet sniffing using Scapy with real-time 30-feature extraction, classifying network traffic as ATTACK or NORMAL at 12.6 ms average latency per packet."
      "Developed an Attack Simulator detecting DDoS, BruteForce, SQL Injection and Port Scan."
      "Deployed a Streamlit real-time dashboard with live packet feed, threat alerts, confusion matrix, traffic timeline, and attack type breakdown with auto-refresh every second.",
    tech: ["Python", "TensorFlow", "Scikit-learn", "Federated Learning", "SHAP", "LIME"],
    links: {
      live: "https://adaptive-ai-driven-intrusion-detection-protection-system.streamlit.app",
      github: "https://github.com/vk26kumar/Adaptive-AI-Driven-Intrusion-Detection-Protection-System",
    },
    color: "#ff3366",
    featured: true,
    period: "March 2026",
    icon: "🛡️",
  },
  {
  id: 5,
  title: "Carbon IQ",
  subtitle: "AI-Powered Carbon Emission Tracker",
  description:
    "Developed a multilingual carbon reporting mobile application using Expo and React Native for real-time emission tracking."
    "Implemented vendor-based data input system with industry-specific parameters for accurate carbon footprint calculation."
    "Designed intelligent emission scoring and normalization logic to compare results with government standards."
    "Built dynamic insights module highlighting overused resources and providing actionable sustainability tips."
    "Enabled CSV export functionality and detailed analytics with visual charts for emission distribution and trends.",
  tech: ["React Native", "Expo", "JavaScript", "i18n", "Data Visualization", "CSV Export"],
  links: {
    live: "https://drive.google.com/file/d/1OXa4h66cdnP-Os2Lz7PSScqKskfksDl8/view?usp=sharing",
    github: "https://github.com/vk26kumar/Carbon-IQ",
  },
  color: "#0071CE",
  featured: true,
  period: "2026",
  icon: "🌱",
  },
  {
  id: 6,
  title: "File Sharing System",
  subtitle: "Secure File Transfer Platform",
  description:
    "Developed a secure file sharing system for uploading, storing, and sharing files via unique access links."
    "Implemented backend using Node.js and Express with efficient file handling and RESTful APIs."
    "Enabled file uploads with size validation and secure storage management on the server."
    "Generated unique shareable links for controlled file access and easy distribution."
    "Designed a simple and responsive frontend interface for seamless user interaction.",
  tech: ["Node.js", "Express", "JavaScript", "HTML", "CSS", "Multer"],
  links: {
    live: "",
    github: "https://github.com/vk26kumar/file-sharing-system",
  },
  color: "#4CAF50",
  featured: false,
  period: "Completed",
  icon: "📁",
 },
 {
  id: 7,
  title: "Resume-Driven Job Automation",
  subtitle: "AI Workflow with n8n",
  description:
    "Built an end-to-end AI automation workflow using n8n to convert resume PDFs into personalized job recommendations."
    "Implemented LLM-based resume parsing with structured data extraction and deterministic normalization."
    "Developed intelligent role detection logic to match users with relevant job opportunities."
    "Integrated real-time job scraping from Naukri using Apify and processed job data programmatically."
    "Automated email delivery of consolidated job recommendations using Gmail API.",
  tech: ["n8n", "JavaScript", "LLM APIs", "Apify", "Google Drive API", "Gmail API"],
  links: {
    live: "",
    github: "https://github.com/vk26kumar/resume-driven-job-automation-n8n",
  },
  color: "#6C63FF",
  featured: true,
  period: "2026",
  icon: "🤖",
  },
  {
  id: 8,
  title: "About Renusagar",
  subtitle: "Corporate Internship Project (Hindalco)",
  description:
    "Engineered and deployed the 'About Renusagar' web platform to establish the campus’s digital identity and online presence."
    "Developed a responsive and user-friendly interface to showcase infrastructure, facilities, and organizational information."
    "Collaborated in a corporate environment at Hindalco Industries (Aditya Birla Group) to deliver a production-ready solution."
    "Strengthened professional skills including client communication, task ownership, and agile development practices."
    "Successfully hosted the platform on Vercel ensuring accessibility and performance optimization.",
  tech: ["React.js", "JavaScript", "HTML", "CSS", "Vercel"],
  links: {
    live: "https://about-renusgar-internship-h5rkp440c-vishals-projects-049043bb.vercel.app/",
    github: "https://github.com/vk26kumar/About_Renusgar-INTERNSHIP",
  },
  color: "#009688",
  featured: true,
  period: "May 2025 - June 2025",
  icon: "🏢",
 }, 
  {
  id: 9,
  title: "Unemployment Analysis",
  subtitle: "Data Analysis & Visualization",
  description:
    "Performed in-depth analysis of unemployment trends using Python and real-world datasets."
    "Cleaned and preprocessed raw data to ensure accuracy and consistency for analysis."
    "Created insightful visualizations to identify patterns, seasonal trends, and regional variations."
    "Used statistical techniques to interpret unemployment rates and economic indicators."
    "Developed an interactive Google Colab notebook for reproducible analysis and experimentation.",
  tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  links: {
    live: "https://colab.research.google.com/drive/10XIXX3fJvhEZdj8pzaTbeGnLrYSBQEhh?usp=sharing",
    github: "https://github.com/vk26kumar/unemployment-analysis-using-python",
  },
  color: "#FF9800",
  featured: false,
  period: "2025",
  icon: "📊",
 },
 {
  id: 10,
  title: "Email Spam Detection",
  subtitle: "Machine Learning Classifier",
  description:
    "Developed a machine learning model to classify emails as spam or not spam using NLP techniques."
    "Performed text preprocessing including tokenization, stopword removal, and vectorization."
    "Trained and evaluated models such as Naive Bayes for efficient classification."
    "Achieved high accuracy through feature extraction and model optimization."
    "Implemented the solution in a Google Colab notebook for easy experimentation and deployment.",
  tech: ["Python", "Scikit-learn", "NLP", "Pandas", "NumPy"],
  links: {
    live: "https://colab.research.google.com/drive/1xeBODBEmD5bOn8zs06l0Ut-jMH9kkHDO?usp=sharing",
    github: "https://github.com/vk26kumar/email_spam_detection_with_machine_learning",
  },
  color: "#E91E63",
  featured: false,
  period: "2025",
  icon: "📧",
 },
 {
  id: 11,
  title: "Car Price Prediction",
  subtitle: "Regression Model",
  description:
    "Built a machine learning regression model to predict car prices based on various features."
    "Performed data cleaning, feature engineering, and exploratory data analysis."
    "Trained regression algorithms to estimate prices with improved accuracy."
    "Evaluated model performance using metrics like R-squared and Mean Squared Error."
    "Implemented the project in Google Colab for easy access and reproducibility.",
  tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Regression"],
  links: {
    live: "https://colab.research.google.com/drive/1vSM5fzm1VLWGSStoMQtNkiKVUohhOpmh?usp=sharing",
    github: "https://github.com/vk26kumar/car_price_predication_machine_learning",
  },
  color: "#3F51B5",
  featured: false,
  period: "2025",
  icon: "🚗",
 },
  {
  id: 12,
  title: "AI Social Media Automation System",
  subtitle: "Using n8n and LLMs",
  description:
      "Architected a scalable AI-driven content automation pipeline integrating LLM-based captioning and AI image generation."
      "Designed an event-driven workflow with human-in-the-loop approval (Telegram bot) improving content quality and control."
      "Automated end-to-end Instagram publishing pipeline, reducing manual effort by ~80% via API integrations."
      "Built a dynamic content scheduling system using Google Sheets as a CMS with real-time filtering and execution.",
  tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Regression"],
  links: {
    live: "",
    github: "https://github.com/vk26kumar/Social-Media-Manager-Automation",
  },
  color: "#3F51B5",
  featured: true,
  period: "2026",
  icon: "🤖",
 },
];

export const skills = {
  "Languages": [
    { name: "JavaScript", level: 92 },
    { name: "Python", level: 85 },
    { name: "TypeScript", level: 78 },
    { name: "C/C++", level: 75 },
    { name: "Java", level: 70 },
    { name: "HTML/CSS", level: 95 },
  ],
  "Frontend": [
    { name: "React.js", level: 92 },
    { name: "React Native", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Framer Motion", level: 75 },
    { name: "Figma", level: 72 },
  ],
  "Backend": [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 87 },
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 78 },
    { name: "RESTful APIs", level: 90 },
  ],
  "AI/ML": [
    { name: "Scikit-learn", level: 80 },
    { name: "TensorFlow", level: 75 },
    { name: "NumPy/Pandas", level: 85 },
    { name: "n8n Automation", level: 82 },
    { name: "OpenAI APIs", level: 80 },
  ],
  "DevOps": [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 70 },
    { name: "Firebase", level: 82 },
    { name: "AWS", level: 65 },
    { name: "Vercel/Render", level: 88 },
  ],
};

export const achievements = [
  {
    id: 1,
    title: "3rd Place — Editing Competition",
    event: "CSA Fest – TECHSRIJAN'24",
    icon: "🥉",
    color: "#00f5d4",
    link: "https://drive.google.com/file/d/1XmDMkpbr7tmL44qfx4c5S2iEdBDaEBmh/view?usp=drive_link",
  },
  {
    id: 2,
    title: "4th Place — GDG Hackathon",
    event: "Competed among 90+ teams",
    icon: "🏆",
    color: "#7c3aed",
    link: "https://drive.google.com/file/d/1wCAzGUqhFQIq2AoxkhVC8hDUYLBl1tiG/view?usp=drive_link",
  },
  {
    id: 3,
    title: "3rd Place — Snap Shuffles",
    event: "ACE Civil Engineering Society",
    icon: "🥉",
    color: "#00d68f",
    link: "https://drive.google.com/file/d/1iKxiZuWsc-drN-0QAr2Dvc_vpgDDlv2I/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Pre-Final Round — Code for Bharat",
    event: "Microsoft Hackathon — Among 10,500+ teams",
    icon: "⚡",
    color: "#ffd60a",
    link: "https://drive.google.com/file/d/1jEPPiJaMVXTIK2oie_pgLQiVPHb2lyqX/view?usp=drive_link",
  },
  {
    id: 5,
    title: "Participated — Sparkathon",
    event: "Walmart All India Hackathon",
    icon: "🔥",
    color: "#ff3366",
    link: "https://drive.google.com/file/d/1sVrlKyl8Q8JHjp2ToS-5ipJiCrpa7c1k/view?usp=drive_link",
  },
  {
    id: 6,
    title: "Core Organizing Committee",
    event: "Internal Smart India Hackathon (SIH'25), MMMUT",
    icon: "🎯",
    color: "#00f5d4",
    link: "https://drive.google.com/file/d/1lArbjNNC6A_E4ZtNhRNGTYZh6d3T1b8m/view?usp=drive_link",
  },
];

export const certifications = [
  {
    id: 1,
    title: "IT Intern Certificate",
    issuer: "Hindalco Industries — Aditya Birla Group",
    date: "June 2025",
    link: "https://drive.google.com/file/d/1UjFBFPp4kX1biT9tJScWsTKimtgX7wXW/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Development Team Certificate",
    issuer: "MMMUT Reso Technical Society",
    date: "Jan 2026",
    link: "https://drive.google.com/file/d/1TbK13LpBtARZWu1gFyq-LNN75A9ECMW4/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Social Internship Certificate",
    issuer: "Save Child Beggar Foundation",
    date: "June 2025",
    link: "https://drive.google.com/file/d/1tirGHbP7IH_7IJNeP6cKe9a0EtY00kkJ/view?usp=drive_link",
  },
    {
    id: 4,
    title: "AI Workshop Participation",
    issuer: "Centre of Excellence – AI Lab, MMMUT (AISpark)",
    date: "July 2025",
    link: "https://drive.google.com/file/d/16qK8W2Ab_wrGWnvNywkonitLNhSMIbzX/view?usp=sharing",
  },
  {
    id: 5,
    title: "Graph Theory Programming Camp",
    issuer: "AlgoUniversity",
    date: "2025",
    link: "https://drive.google.com/file/d/1l-ILXonV4ETYyJ3tMXvG0rIwtMbXw5Wl/view?usp=sharing",
  },
  {
    id: 6,
    title: "Drishyaa Career Counselling Event",
    issuer: "The Social Engineers' Board, MMMUT",
    date: "Nov 2023",
    link: "https://drive.google.com/file/d/12xRjK_YTeXDzCeQYc2c4mFD1SRM2EImu/view?usp=drive_link",
  },
];
