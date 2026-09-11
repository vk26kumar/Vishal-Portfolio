import { createContext, useContext, useState, useEffect } from 'react'

const STORAGE_KEY = 'vk_portfolio_data'

export const DEFAULT_DATA = {
  personal: {
    name: 'Vishal Kumar',
    email: 'vkumar26062003@gmail.com',
    phone: '+91 7800982247',
    location: 'Gorakhpur, Uttar Pradesh',
    bio: 'AI Native Web Developer at Spektra Systems (SaaSify), building a live cloud go-to-market platform used by ISVs and channel partners. I work across full-stack web, React Native and ML - shipping automation and AI-driven systems that solve real business problems.',
    resumeLink: 'https://drive.google.com/file/d/1TwmZZa8-fuVq9UTyJ07B856WMsNTnPhY/view?usp=sharing',
    portfolioLink: 'https://www.vishaljaiswal.tech/',
    taglines: [
      'Software Developer',
      'Full Stack Developer',
      'ML Engineer',
      'Android Developer',
      'AI Agent Builder',
    ],
    aboutLong: "I'm a Computer Science student at MMMUT Gorakhpur, currently an AI Native Web Developer Intern at Spektra Systems working on SaaSify - a cloud go-to-market platform spanning AWS, Azure and GCP. Before that I built full-stack automation and AI systems at Matus Business Ventures. From production React/Node platforms and Play Store apps, to ML ensembles that detect network intrusions at 99% accuracy - I thrive at the intersection of engineering and impact.",
  },
  social: [
    { id: 1, label: 'GitHub', href: 'https://github.com/vk26kumar' },
    { id: 2, label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishal-kumar2606/' },
    { id: 3, label: 'LeetCode', href: 'https://leetcode.com/u/code_with_Vishal/' },
    { id: 4, label: 'GeeksForGeeks', href: 'https://www.geeksforgeeks.org/user/vkumar26wiq5/' },
    { id: 5, label: 'CodeChef', href: 'https://www.codechef.com/users/code_vishal_27' },
    { id: 6, label: 'Codeforces', href: 'https://codeforces.com/profile/vishal_26_kumar' },
    { id: 7, label: 'Kaggle', href: 'https://www.kaggle.com/vishalkumar00126' },
    { id: 8, label: 'Portfolio', href: 'https://www.vishaljaiswal.tech/' },
  ],
  education: [
    {
      id: 1,
      degree: 'B.Tech - Computer Science & Engineering',
      institution: 'Madan Mohan Malaviya University of Technology, Gorakhpur',
      period: '2023 - Present',
      score: '9.25 / 10.0',
      type: 'cgpa',
      highlight: true,
    },
    {
      id: 2,
      degree: 'Class XII (CBSE)',
      institution: 'D.A.V. Public Senior Secondary School, Bina',
      period: '2023',
      score: '86.6%',
      type: 'percentage',
      highlight: false,
    },
    {
      id: 3,
      degree: 'Class X (CBSE)',
      institution: 'D.A.V. Public School, Kakri',
      period: '2021',
      score: '98.17%',
      type: 'percentage',
      highlight: false,
    },
  ],
  experience: [
    {
      id: 0,
      role: 'Incoming Intern - Technology',
      company: 'Finnable Technologies Pvt. Ltd.',
      period: 'Jan 2027 - Jun 2027',
      type: 'Fintech',
      status: 'incoming',
      mode: 'Bengaluru · On-site',
      certLink: '',
      points: 'Joining Finnable, a consumer-lending fintech, as a Technology Intern on the engineering team in Bengaluru.\nConverting to Software Development Engineer I (SDE I) on completion of my B.Tech.',
    },
    {
      id: 1,
      role: 'AI Native Web Developer Intern',
      company: 'Spektra Systems Pvt Ltd (SaaSify)',
      period: 'Aug 2026 - Ongoing',
      type: 'Industry',
      status: 'current',
      mode: 'Remote',
      certLink: 'https://drive.google.com/file/d/1Iizk2z_-tG9hru9_QVzSU5EiNaOv0604/view?usp=sharing',
      links: { 'saasify.ai': 'https://saasify.ai/' },
      points: "Contributing to SaaSify (saasify.ai), Spektra's cloud go-to-market platform that helps software companies list and sell SaaS products on AWS, Azure and GCP.\nWorking across AI native web development for a live, customer-facing product used by ISVs and cloud channel partners.\nCollaborating remotely with a cross-functional team under mentorship, shipping features as part of the product's public launch.",
    },
    {
      id: 2,
      role: 'Full Stack Automation & AI Developer Intern',
      company: 'Matus Business Ventures Pvt. Ltd.',
      period: 'Feb 2026 - Aug 2026',
      type: 'Industry',
      mode: 'Remote',
      certLink: 'https://drive.google.com/file/d/1aw5R54S2QqQA0iMXawjnGFca9Bf7-JOt/view?usp=sharing',
      links: {
        'social.markmyad.com': 'https://social.markmyad.com/launches',
        'letsvarta.com': 'https://letsvarta.com/',
      },
      points: 'Engineered a full stack Social Media Manager platform (social.markmyad.com) using React and Node.js, enabling multi-channel content scheduling and publishing automation.\nDeveloped a CRM Chrome Extension integrated with Google Sheets API and webhooks for real-time lead data extraction and ingestion.\nAutomated cold email outreach workflows using n8n and LLM-based generation and contributed to development of an AI Calling (letsvarta.com) SaaS product.\nResolved production issues across AWS cloud infrastructure and VPS deployments and integrated RazorpayX for automated payment processing.',
    },
    {
      id: 3,
      role: 'Advisory Committee Member',
      company: 'MMMUT Reso | Technical Society MMMUT',
      period: 'July 2025 - Ongoing',
      type: 'Tech Society',
      mode: 'Gorakhpur',
      certLink: 'https://drive.google.com/file/d/1E0e3UVK3V5z6XZyMd-K0ZqRSitfPepmg/view?usp=sharing',
      points: 'Contributed to MMMUT.XYZ - an academic platform serving 5,000+ students, implementing features using ReactJS and Node.js with clean, modular code architecture.\nFostering innovation and a learning culture through active technical contributions to the society.',
    },
    {
      id: 4,
      role: 'IT Intern',
      company: 'Aditya Birla Group - Hindalco Industries Limited',
      period: 'May 2025 - Jun 2025',
      type: 'Industry',
      mode: 'On-site',
      certLink: 'https://drive.google.com/file/d/1UjFBFPp4kX1biT9tJScWsTKimtgX7wXW/view?usp=drive_link',
      points: "Engineered and deployed the 'About Renusagar' web platform using HTML/CSS and JavaScript - designed clean, efficient code modules following software development best practices.\nCollaborated with cross-functional teams to clarify requirements, track progress and deliver solutions on schedule, developing strong ownership and a team-player mindset in a corporate environment.",
    },
    {
      id: 5,
      role: 'Social Intern',
      company: 'Save Child Beggar Foundation - Delhi',
      period: 'June 2025',
      type: 'NGO',
      mode: 'On-site',
      certLink: 'https://drive.google.com/file/d/1tirGHbP7IH_7IJNeP6cKe9a0EtY00kkJ/view?usp=drive_link',
      points: "Executed a social impact initiative under the theme 'Social Health & Social Education'.",
    },
  ],
  positions: [
    {
      id: 1,
      role: 'Core Organizing Committee Member',
      org: "Internal Smart India Hackathon (SIH'25), MMMUT",
      period: '2025',
      link: 'https://drive.google.com/file/d/1lArbjNNC6A_E4ZtNhRNGTYZh6d3T1b8m/view?usp=drive_link',
    },
    {
      id: 2,
      role: 'Advisory Committee Member',
      org: 'MMMUT Reso | Technical Society MMMUT - Gorakhpur',
      period: 'July 2025 - Ongoing',
      link: 'https://drive.google.com/file/d/1E0e3UVK3V5z6XZyMd-K0ZqRSitfPepmg/view?usp=sharing',
    },
  ],
  projects: [
    {
      id: 13,
      title: 'Questrix',
      subtitle: 'AI Exam Paper Generation Platform',
      description: 'Teachers upload material, configure an assignment and get a structured question paper generated by GPT-4o-mini, then export it to PDF. Generation runs as a BullMQ job on a Redis queue rather than blocking the request, with live progress streamed back over Socket.io and responses validated with Zod.',
      metrics: [{ value: 'Real-time', label: 'WebSocket progress' }, { value: 'Queued', label: 'BullMQ + Redis jobs' }],
      tech: 'Next.js 14, TypeScript, Redux Toolkit, Tailwind CSS, Node.js, Express, MongoDB, Redis (Upstash), BullMQ, Socket.io, OpenAI GPT-4o-mini, Zod',
      liveLink: 'https://questrix.vercel.app',
      githubLink: 'https://github.com/vk26kumar/questrix', featured: true, period: '2026',
    },
    {
      id: 14,
      title: 'Candidate Data Transformer',
      subtitle: 'Multi-Source Identity Resolution Pipeline',
      description: 'Ingests candidate records from CSV, ATS JSON, GitHub, resume text and recruiter notes, then resolves them into one canonical profile per person. Clusters identities using Levenshtein similarity above 0.85 plus email and phone matching, settles conflicts by source priority, and emits per-field confidence scores with full provenance. Per-record failures are logged without halting the pipeline.',
      metrics: [{ value: '5+', label: 'Source formats' }, { value: 'Per-field', label: 'Confidence + provenance' }],
      tech: 'Node.js, csv-parse, libphonenumber-js, AJV JSON Schema, Commander CLI, Express',
      liveLink: '',
      githubLink: 'https://github.com/vk26kumar/Eightfold_ai', featured: true, period: '2026',
    },

    {
      id: 4,
      title: 'Adaptive AI-Driven Intrusion Detection & Protection System',
      subtitle: 'Federated Learning IDPS',
      description: 'A hybrid detector fusing an unsupervised autoencoder with a supervised XGBoost classifier over 30 CIC-IDS2017 flow features, trained across four non-IID federated nodes with Flower/FedAvg so raw traffic never leaves a node. Adds per-prediction explanations via TreeSHAP, live Scapy packet capture and autonomous firewall blocking behind a dry-run guard.',
      metrics: [{ value: '99.23%', label: 'Accuracy' }, { value: '99.95%', label: 'Recall' }, { value: '0.95%', label: 'False positive rate' }],
      tech: 'Python, TensorFlow, XGBoost, Flower (FedAvg), Scapy, Streamlit, TreeSHAP, SQLite, NumPy, Pandas',
      liveLink: 'https://adaptive-ai-driven-intrusion-detection-protection-system.streamlit.app',
      githubLink: 'https://github.com/vk26kumar/Adaptive-AI-Driven-Intrusion-Detection-Protection-System', featured: true, period: 'Mar 2026',
    },
    {
      id: 2,
      title: 'Dine Time',
      subtitle: 'Restaurant Reservation Mobile App',
      description: 'A three-sided restaurant booking platform published to the Play Store. Consumers discover restaurants by GPS and book through a 4-step wizard; owners register via a 5-step flow and manage listings, bookings and revenue from a real-time analytics dashboard; admins approve restaurants and govern the platform. Payments run through Razorpay (UPI, cards, net banking) and media through a Cloudinary CDN.',
      metrics: [{ value: '3', label: 'User roles' }, { value: 'Play Store', label: 'Published, Android + iOS' }],
      tech: 'React Native 0.81, Expo SDK 54, TypeScript, Expo Router, Firebase Auth, Cloud Firestore, Cloudinary, Razorpay, expo-location, EAS Build',
      liveLink: 'https://play.google.com/store/apps/details?id=com.project.dinetime',
      liveLabel: 'Play Store',
      githubLink: 'https://github.com/vk26kumar/Dine-Time-App', featured: true, period: 'March 2026',
    },
    {
      id: 12,
      title: 'AI Social Media Automation System',
      subtitle: 'Multi-Channel Scheduling & Publishing',
      description: 'Reads a Google Sheets content calendar on a daily trigger, drafts captions with GPT-4o-mini and generates artwork, then sends a Telegram preview carrying POST and REGENERATE controls. Approved posts publish to Instagram and Facebook through the Graph APIs, including Reels, and the sheet is written back with status and timestamp.',
      metrics: [{ value: '~80%', label: 'Manual effort removed' }],
      tech: 'n8n, JavaScript, OpenAI APIs, Telegram Bot API, Google Sheets API, Cloudinary, Meta Graph API',
      liveLink: 'https://social.markmyad.com/launches',
      githubLink: 'https://github.com/vk26kumar/Social-Media-Manager-Automation', featured: true, period: '2026',
    },
    {
      id: 1,
      title: 'AI-Evaluate',
      subtitle: 'AI-Powered Automated Answer Sheet Evaluation',
      description: 'Designed and delivered a full-stack MERN application - an Express.js REST API backend with MongoDB data models and a ReactJS frontend featuring an interactive digital whiteboard and real-time analytics dashboard. Integrated third-party AI/ML APIs with clean request-response pipelines and robust error handling, structuring server-side modules using SOLID principles.',
      tech: 'React.js, Node.js, Express.js, MongoDB, JavaScript, REST APIs, AI/ML APIs',
      liveLink: 'https://ai-evaluaite-1.onrender.com/',
      githubLink: 'https://github.com/vk26kumar/AI-EvaluAIte', featured: true, period: 'Mar 2025',
    },
    {
      id: 3,
      title: 'Travel Roots',
      subtitle: 'Hotel Reservation Website',
      description: 'Architected a full-stack booking platform using the MVC design pattern with Node.js/Express and MongoDB. Implemented secure multi-strategy authentication (local + Google/GitHub OAuth via Passport.js) and a Razorpay payment gateway with server-side verification and webhook-based async event handling. Strengthened backend security using Helmet and rate limiting.',
      tech: 'MongoDB, Express.js, Node.js, EJS, Passport.js, Razorpay, Webhooks, Helmet, Rate Limiter',
      liveLink: 'https://travel-roots.onrender.com/listings',
      githubLink: 'https://github.com/vk26kumar/Travel_Roots', featured: true, period: 'Feb 2025',
    },
    {
      id: 5,
      title: 'Carbon IQ',
      subtitle: 'AI-Powered Carbon Emission Tracker',
      description: 'A vendor-facing mobile app for tracking industrial carbon emissions, with industry-specific inputs for textile, dairy, agriculture and manufacturing. Normalises emission scores against benchmarks, flags overused resources such as electricity, water, chemicals and fuel, and exports analytics to CSV. Localised into six languages.',
      metrics: [{ value: '6', label: 'Languages supported' }],
      tech: 'React Native, Expo, Expo Router, i18n, Data Visualization, CSV Export',
      liveLink: 'https://drive.google.com/file/d/1OXa4h66cdnP-Os2Lz7PSScqKskfksDl8/view?usp=sharing',
      githubLink: 'https://github.com/vk26kumar/Carbon-IQ', featured: false, period: '2026',
    },
    {
      id: 7,
      title: 'Resume-Driven Job Automation',
      subtitle: 'AI Workflow with n8n',
      description: 'Built an end-to-end AI automation workflow using n8n to convert resume PDFs into personalized job recommendations. Implemented LLM-based resume parsing with structured data extraction, intelligent role detection, real-time job scraping from Naukri using Apify and automated email delivery of consolidated recommendations via the Gmail API.',
      tech: 'n8n, JavaScript, LLM APIs, Apify, Google Drive API, Gmail API',
      liveLink: '',
      githubLink: 'https://github.com/vk26kumar/resume-driven-job-automation-n8n', featured: false, period: '2026',
    },
    {
      id: 8,
      title: 'About Renusagar',
      subtitle: 'Corporate Internship Project (Hindalco)',
      description: 'Engineered and deployed the About Renusagar web platform to establish the campus digital identity. Developed a responsive interface showcasing infrastructure and organizational information, delivered in a corporate environment at Hindalco Industries (Aditya Birla Group) as a production-ready solution.',
      tech: 'HTML, CSS, JavaScript, React.js, Vercel',
      liveLink: 'https://about-renusgar-internship-h5rkp440c-vishals-projects-049043bb.vercel.app/',
      githubLink: 'https://github.com/vk26kumar/About_Renusgar-INTERNSHIP', featured: false, period: 'May 2025 - Jun 2025',
    },
    {
      id: 6,
      title: 'File Sharing System',
      subtitle: 'Secure File Transfer Platform',
      description: 'Developed a secure file sharing system for uploading, storing and sharing files via unique access links. Implemented the backend using Node.js and Express with efficient file handling and RESTful APIs, generating unique shareable links for controlled file access.',
      tech: 'Node.js, Express, JavaScript, HTML, CSS, Multer',
      liveLink: '',
      githubLink: 'https://github.com/vk26kumar/file-sharing-system', featured: false, period: '2025',
    },
    {
      id: 9,
      title: 'Unemployment Analysis',
      subtitle: 'Data Analysis & Visualization',
      description: 'Performed in-depth analysis of unemployment trends using Python and real-world datasets. Created insightful visualizations to identify patterns, seasonal trends and regional variations, using statistical techniques to interpret unemployment rates and economic indicators.',
      tech: 'Python, Pandas, NumPy, Matplotlib, Seaborn',
      liveLink: 'https://colab.research.google.com/drive/10XIXX3fJvhEZdj8pzaTbeGnLrYSBQEhh?usp=sharing',
      githubLink: 'https://github.com/vk26kumar/unemployment-analysis-using-python', featured: false, period: '2025',
    },
    {
      id: 10,
      title: 'Email Spam Detection',
      subtitle: 'Machine Learning Classifier',
      description: 'Developed a machine learning model to classify emails as spam or not spam using NLP techniques. Performed text preprocessing including tokenization, stopword removal and vectorization, then trained and evaluated Naive Bayes models for efficient classification.',
      tech: 'Python, Scikit-learn, NLP, Pandas, NumPy',
      liveLink: 'https://colab.research.google.com/drive/1xeBODBEmD5bOn8zs06l0Ut-jMH9kkHDO?usp=sharing',
      githubLink: 'https://github.com/vk26kumar/email_spam_detection_with_machine_learning', featured: false, period: '2025',
    },
    {
      id: 11,
      title: 'Car Price Prediction',
      subtitle: 'Regression Model',
      description: 'Built a machine learning regression model to predict car prices based on various features. Performed data cleaning, feature engineering and exploratory data analysis, evaluating model performance using R-squared and Mean Squared Error metrics.',
      tech: 'Python, Scikit-learn, Pandas, NumPy, Regression',
      liveLink: 'https://colab.research.google.com/drive/1vSM5fzm1VLWGSStoMQtNkiKVUohhOpmh?usp=sharing',
      githubLink: 'https://github.com/vk26kumar/car_price_predication_machine_learning', featured: false, period: '2025',
    },
  ],
  skills: {
    Languages: [
      { name: 'JavaScript', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'C/C++', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'HTML/CSS', level: 95 },
    ],
    'Full Stack Web': [
      { name: 'ReactJS', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 87 },
      { name: 'REST APIs', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'MVC Architecture', level: 85 },
      { name: 'Webhook Integration', level: 84 },
      { name: 'JWT / OAuth 2.0', level: 82 },
      { name: 'EJS', level: 78 },
    ],
    'Mobile Development': [
      { name: 'React Native (Expo)', level: 88 },
      { name: 'Firebase Auth', level: 85 },
      { name: 'EAS Build', level: 82 },
      { name: 'Play Store Deployment', level: 80 },
      { name: 'Deep Linking', level: 72 },
    ],
    'ML / DL': [
      { name: 'Supervised & Unsupervised Learning', level: 85 },
      { name: 'Classification & Regression', level: 85 },
      { name: 'Feature Engineering', level: 82 },
      { name: 'Ensemble Methods', level: 80 },
      { name: 'Neural Networks / Deep Learning', level: 78 },
      { name: 'Federated Learning', level: 72 },
      { name: 'SHAP', level: 70 },
    ],
    'NLP & AI Agents': [
      { name: 'Prompt Engineering', level: 88 },
      { name: 'LLM APIs (OpenAI, OpenRouter)', level: 85 },
      { name: 'n8n AI Automation', level: 85 },
      { name: 'AI Agent Design', level: 82 },
      { name: 'Natural Language Processing', level: 78 },
      { name: 'RAG', level: 75 },
      { name: 'LangChain', level: 70 },
    ],
    'Cloud & DevOps': [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Vercel / Render', level: 88 },
      { name: 'Firebase', level: 85 },
      { name: 'VPS Deployment', level: 74 },
      { name: 'AWS', level: 72 },
      { name: 'Docker', level: 68 },
    ],
  },
  allTechnologies: [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'HTML', 'CSS',
    'ReactJS', 'Node.js', 'Express.js', 'REST APIs', 'EJS', 'MVC Architecture',
    'Webhook Integration', 'JWT', 'OAuth 2.0', 'MongoDB', 'MySQL',
    'TailwindCSS', 'Bootstrap', 'Material UI', 'Figma',
    'React Native (Expo)', 'EAS Build', 'Play Store Deployment', 'Deep Linking', 'Firebase Auth',
    'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'XGBoost', 'Scapy', 'Streamlit', 'SHAP',
    'Federated Learning', 'NLP', 'RAG', 'Fine Tuning', 'LangChain',
    'LLM APIs', 'Prompt Engineering', 'n8n', 'AI Agent Design',
    'AWS', 'Azure', 'GCP', 'Docker', 'Vercel', 'Render', 'VPS',
    'Git', 'GitHub', 'Postman', 'Passport.js', 'Razorpay', 'RazorpayX', 'Multer', 'i18n',
  ],
  achievements: [
    { id: 1, title: '3rd Place - Editing Competition', event: "CSA Fest - TECHSRIJAN'24", link: 'https://drive.google.com/file/d/1XmDMkpbr7tmL44qfx4c5S2iEdBDaEBmh/view?usp=drive_link' },
    { id: 2, title: '4th Place - GDG Hackathon', event: 'Competed among 90+ teams', link: 'https://drive.google.com/file/d/1wCAzGUqhFQIq2AoxkhVC8hDUYLBl1tiG/view?usp=drive_link' },
    { id: 3, title: '3rd Place - Snap Shuffles Competition', event: 'ACE Civil Engineering Society', link: 'https://drive.google.com/file/d/1iKxiZuWsc-drN-0QAr2Dvc_vpgDDlv2I/view?usp=drive_link' },
    { id: 4, title: 'Qualified Pre-Final Round - Code for Bharat S2', event: 'Microsoft Hackathon - among 10,500+ participants', link: 'https://drive.google.com/file/d/1jEPPiJaMVXTIK2oie_pgLQiVPHb2lyqX/view?usp=drive_link' },
    { id: 5, title: 'Participated - Sparkathon', event: 'Walmart All India Hackathon', link: 'https://drive.google.com/file/d/1sVrlKyl8Q8JHjp2ToS-5ipJiCrpa7c1k/view?usp=drive_link' },
  ],
  certifications: [
    { id: 7, title: 'AI Native Web Developer Internship', issuer: 'Spektra Systems Pvt Ltd (SaaSify)', date: 'Aug 2026', link: 'https://drive.google.com/file/d/1Iizk2z_-tG9hru9_QVzSU5EiNaOv0604/view?usp=sharing' },
    { id: 8, title: 'Full Stack Automation & AI Developer Internship', issuer: 'Matus Business Ventures Pvt. Ltd.', date: 'Aug 2026', link: 'https://drive.google.com/file/d/1aw5R54S2QqQA0iMXawjnGFca9Bf7-JOt/view?usp=sharing' },
    { id: 1, title: 'IT Intern Certificate', issuer: 'Hindalco Industries - Aditya Birla Group', date: 'June 2025', link: 'https://drive.google.com/file/d/1UjFBFPp4kX1biT9tJScWsTKimtgX7wXW/view?usp=drive_link' },
    { id: 2, title: 'Development Team Certificate', issuer: 'MMMUT Reso Technical Society', date: '2026', link: 'https://drive.google.com/file/d/1E0e3UVK3V5z6XZyMd-K0ZqRSitfPepmg/view?usp=sharing' },
    { id: 3, title: 'Social Internship Certificate', issuer: 'Save Child Beggar Foundation', date: 'June 2025', link: 'https://drive.google.com/file/d/1tirGHbP7IH_7IJNeP6cKe9a0EtY00kkJ/view?usp=drive_link' },
    { id: 4, title: 'AI Workshop Participation', issuer: 'Centre of Excellence - AI Lab, MMMUT (AISpark)', date: 'July 2025', link: 'https://drive.google.com/file/d/16qK8W2Ab_wrGWnvNywkonitLNhSMIbzX/view?usp=sharing' },
    { id: 5, title: 'Graph Theory Programming Camp', issuer: 'AlgoUniversity', date: '2025', link: 'https://drive.google.com/file/d/1l-ILXonV4ETYyJ3tMXvG0rIwtMbXw5Wl/view?usp=sharing' },
    { id: 6, title: 'Drishyaa Career Counselling Event', issuer: "The Social Engineers' Board, MMMUT", date: 'Nov 2023', link: 'https://drive.google.com/file/d/12xRjK_YTeXDzCeQYc2c4mFD1SRM2EImu/view?usp=drive_link' },
  ],
}

// VERSION TAG - increment this whenever you update DEFAULT_DATA
// This forces the live site to pick up new data even if localStorage exists
const DATA_VERSION = '2026-09-11-v12'

const DataContext = createContext(null)

export function DataProvider({ children }) {
  const [portfolioData, setPortfolioData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      const savedVersion = localStorage.getItem(STORAGE_KEY + '_version')

      // If version mismatch → DEFAULT_DATA wins, clear old localStorage
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
