// Authoritative Portfolio Data for Jison Joseph Sebastian
// Preserving 100% of all real data from CV and previous portfolio (myporfolio)

export const PERSONAL_INFO = {
  name: "Jison Joseph Sebastian",
  title: "AI/ML Engineer · Generative AI · Full Stack Developer",
  shortBio: "B.Tech Computer Science graduate, GATE 2026 qualified, with expertise in AI/ML, Full Stack Development, and Generative AI. Experienced in building intelligent applications using Software Development, Deep Learning, LLMs, Agentic AI, and RAG.",
  mission: "Use technology to drive real-world change. Whether developing AI for cybersecurity or crafting digital tools for healthcare, I build with purpose, empathy, and efficiency.",
  email: "jisonjosephsebastian7007@gmail.com",
  phone: "+91 62385 25147",
  location: "Kannur, Kerala, India",
  coordinates: "11.8745° N, 75.3704° E",
  status: "Open to Work",
  profileImage: "/images/Profile.jpg",
  resumePdf: "/Resume.pdf",
  resumeAtsPdf: "/Resume-ATS.pdf",
  links: {
    github: "https://github.com/nosij-playz",
    linkedin: "https://linkedin.com/in/nosij-playz44",
    domain: "https://jisonjosephsebastian.work.gd"
  },
  stats: [
    { label: "Total Projects", value: "15+" },
    { label: "Internships", value: "4" },
    { label: "Accolades", value: "GATE '26" },
    { label: "B.Tech CGPA", value: "8.25" }
  ]
};

export const AWARDS_AND_EDUCATION = {
  awards: [
    {
      title: "Best Project Award (SRISHTI 2026)",
      project: "NeuroWave (CAIRS) – Climate-Aware Intelligent Radio",
      description: "Recognized as the Best Computer Science Project at the prestigious SRISHTI 2026 techfest for combining weather monitoring and multi-modal ensemble learning."
    },
    {
      title: "GATE 2026 Qualified",
      description: "Qualified Graduate Aptitude Test in Engineering (GATE 2026) in Computer Science & Information Technology, demonstrating strong theoretical and algorithmic foundations."
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Vimal Jyothi Engineering College, Kerala",
      timeline: "2022 – 2026",
      score: "CGPA: 8.25 / 10.0",
      coursework: "Data Structures & Algorithms, DBMS, Machine Learning, Computer Networks, Operating Systems, OOP, Discrete Mathematics"
    },
    {
      degree: "Higher Secondary Education (Science)",
      institution: "St. Thomas Higher Secondary School, Kerala State Board",
      timeline: "2020 – 2022"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "St. Mary's English Medium High School, Kerala State Board",
      timeline: "2018 – 2020"
    }
  ],
  certifications: [
    { name: "SAP Technology Consultant Specialization", issuer: "SAP" },
    { name: "Learn SAP ABAP by Doing", issuer: "SAP" },
    { name: "Digital Transformation Using AI/ML with Google Cloud", issuer: "Google Cloud" },
    { name: "Deep Learning", issuer: "NPTEL, IIT Ropar" },
    { name: "Machine Learning", issuer: "Infosys Springboard" }
  ],
  leadership: [
    "Senior Patrol Leader (Bharat Scouts & Guides)",
    "NSS Volunteer (National Service Scheme)",
    "Techfest Website Development Team Member"
  ],
  languages: [
    { name: "Malayalam", level: "Native" },
    { name: "English", level: "Advanced Professional" }
  ]
};

export const INTERNSHIPS = [
  {
    role: "Machine Learning Intern",
    company: "CODSOFT",
    timeline: "Jun 2025 – Jul 2025",
    type: "Remote",
    highlights: [
      "Processed 10,000+ data points from 5+ sources using Pandas and NumPy; evaluated 8+ models (Logistic Regression, SVM, Random Forest) with Scikit-learn, boosting accuracy by 15%.",
      "Built three high-performance classifiers (up to 87% accuracy) and conducted thorough exploratory data analysis (EDA) with Matplotlib and Jupyter."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "UNIFIED MENTOR",
    timeline: "May 2025 – Jul 2025",
    type: "Remote",
    highlights: [
      "Developed 5+ responsive production pages with HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and rapid rendering.",
      "Architected Firebase and SQL schemas and implemented robust REST APIs for seamless client-server synchronization."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "PRODIGY INFOTECH",
    timeline: "Apr 2025 – Jun 2025",
    type: "Remote",
    highlights: [
      "Built customer segmentation models using Scikit-learn and engineered 12+ features with Pandas, substantially improving precision and recall.",
      "Optimized the end-to-end ML pipeline through feature selection, outlier handling, and hyperparameter tuning."
    ]
  },
  {
    role: "Data Science Intern",
    company: "STEM ROBOTICS",
    timeline: "Jul 2024 – Jul 2024",
    type: "Remote",
    highlights: [
      "Cleaned and transformed heterogeneous sensor datasets with Pandas, creating 15+ engineered features to streamline preprocessing and maximize model readiness."
    ]
  }
];

export const ALL_PROJECTS = [
  {
    id: "neurowave",
    title: "NeuroWave (CAIRS)",
    subtitle: "AI Climate-Aware Intelligent Radio",
    category: "ai",
    award: "SRISHTI 2026 Winner",
    featured: true,
    description: "Award-winning intelligent radio platform combining real-time weather monitoring and AI-powered recommendations. Achieved 92% recommendation accuracy using ensemble learning on multi-modal sensor data.",
    tech: ["Python", "TensorFlow", "Climate AI", "Signal Processing"],
    github: "https://github.com/nosij-playz"
  },
  {
    id: "sustainai",
    title: "Sustain_AI",
    subtitle: "Agentic AI Environmental Platform",
    category: "ai",
    featured: true,
    description: "Agentic AI platform integrating LLMs, Computer Vision, and environmental data for automated waste analysis. Built modular AI agents with REST communication and cut classification error by 30% via a custom CNN architecture.",
    tech: ["Python", "Flask", "React", "LLMs", "OpenCV", "REST APIs"],
    github: "https://github.com/nosij-playz/Sustain_AI"
  },
  {
    id: "retraceai",
    title: "Retrace_Ai",
    subtitle: "Age-Invariant Face Recognition",
    category: "ai",
    featured: true,
    description: "GAN-based deep learning system for age-invariant facial recognition with enhanced feature extraction. Devised a novel data augmentation strategy boosting cross-age matching accuracy by 12% under varying illumination.",
    tech: ["Python", "PyTorch", "TensorFlow", "GANs", "OpenCV"],
    github: "https://github.com/nosij-playz/Retrace-Ai"
  },
  {
    id: "talkhub",
    title: "TalkHub",
    subtitle: "Real-Time WebSocket Messaging",
    category: "web",
    featured: true,
    description: "Full-stack messaging platform featuring WebSocket-based ultra-low latency communication and secure authentication. Optimized connection management delivering sub-50ms latency for 100+ concurrent active users.",
    tech: ["Node.js", "WebSockets", "Firebase", "React", "JavaScript"],
    github: "https://github.com/nosij-playz"
  },
  {
    id: "epanchayat",
    title: "ePanchayat-360",
    subtitle: "Digital Rural Governance Portal",
    category: "web",
    featured: true,
    description: "Web-based governance platform facilitating citizen service delivery and role-based administrative dashboards. Automated task routing to reduce query resolution turnaround time by 40%.",
    tech: ["Django", "PostgreSQL", "SQLite", "Bootstrap"],
    github: "https://github.com/nosij-playz"
  },
  {
    id: "mediai",
    title: "Medi AI",
    subtitle: "Intelligent Healthcare Chatbot",
    category: "ai",
    featured: false,
    description: "NLP-powered symptom analysis assistant with an intuitive web interface. Handled 95% of common medical inquiries correctly, reducing false positives by 25% via a hybrid rule-based/ML approach.",
    tech: ["Python", "Flask", "NLTK", "NLP", "TensorFlow"],
    github: "https://github.com/nosij-playz/MediAi-chatbot"
  },
  {
    id: "churncast",
    title: "ChurnCast",
    subtitle: "Customer Churn Prediction Pipeline",
    category: "ai",
    featured: false,
    description: "Machine learning pipeline leveraging ensemble learning and advanced feature engineering to forecast customer churn. Improved recall by 20% using XGBoost with SMOTE balancing.",
    tech: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "SMOTE"],
    github: "https://github.com/nosij-playz"
  },
  {
    id: "fraudshield",
    title: "FraudShield",
    subtitle: "Real-Time Fraud Detection System",
    category: "ai",
    featured: false,
    description: "Supervised ML model incorporating SMOTE to conquer extreme class imbalance in financial transaction streams. Achieved 95% precision via rigorous cross-validation and hyperparameter tuning.",
    tech: ["Python", "Scikit-Learn", "SMOTE", "Pandas"],
    github: "https://github.com/nosij-playz"
  },
  {
    id: "curecart",
    title: "CureCart",
    subtitle: "Smart Online Medicine Cart",
    category: "web",
    featured: false,
    description: "Digital medicine ordering and cart management system designed with Flask, HTML5, and JavaScript for intuitive, rapid prescription and OTC purchases.",
    tech: ["Flask", "HTML/CSS", "JavaScript", "SQLite"],
    github: "https://github.com/nosij-playz/Curecart"
  },
  {
    id: "realestimate",
    title: "RealEstiMate",
    subtitle: "Real Estate Valuation Predictor",
    category: "ai",
    featured: false,
    description: "Property price prediction engine featuring automated data preprocessing, outlier filtering, and regression model training over multi-source real estate indices.",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy"],
    github: "https://github.com/nosij-playz/RealEstiMate"
  },
  {
    id: "envirotrack",
    title: "EnviroTrack",
    subtitle: "Disaster Prediction & Early Warning",
    category: "ai",
    featured: false,
    description: "Environmental sensor monitoring and disaster early warning system leveraging time-series ML models to detect anomalous climate patterns ahead of severe weather events.",
    tech: ["Python", "Scikit-Learn", "Time Series", "Pandas"],
    github: "https://github.com/nosij-playz"
  },
  {
    id: "mailsense",
    title: "MailSense",
    subtitle: "Automated Email Classification",
    category: "ai",
    featured: false,
    description: "Smart email triage and categorization tool using NLP and supervised learning to parse and automatically sort incoming messages into priority workflow categories.",
    tech: ["Python", "Scikit-Learn", "NLP", "Text Processing"],
    github: "https://github.com/nosij-playz/MailSense"
  },
  {
    id: "cyclesense",
    title: "CycleSense",
    subtitle: "Menstrual Health & Analytics",
    category: "mobile",
    featured: false,
    description: "Mobile-responsive women's wellness application with predictive menstrual cycle analytics, symptom tracking, and an empathetic interface built for reliability.",
    tech: ["Python", "Flask", "HTML/CSS", "JavaScript"],
    github: "https://github.com/nosij-playz/CycleSense"
  },
  {
    id: "gitloader",
    title: "Git_Loader",
    subtitle: "Desktop GUI for GitHub Workflows",
    category: "desktop",
    featured: false,
    description: "Cross-platform graphical desktop application for Git repository management. Allows developers to push folders and clone repositories without invoking terminal commands.",
    tech: ["Python", "Tkinter", "GitHub API", "Git CLI"],
    github: "https://github.com/nosij-playz/Git_Loader"
  },
  {
    id: "qrstudio",
    title: "QR Studio",
    subtitle: "Desktop QR Generator & Scanner",
    category: "desktop",
    featured: false,
    description: "Clean utility software for high-resolution QR code generation and instant barcode/QR decoding with customizable export parameters.",
    tech: ["Python", "Tkinter", "qrcode", "OpenCV"],
    github: "https://github.com/nosij-playz/QR-Studio"
  }
];

export const SKILLS_GALAXY = {
  ai_ml: [
    { name: "PyTorch", level: "Advanced", category: "Deep Learning", highlight: true },
    { name: "TensorFlow", level: "Advanced", category: "Deep Learning", highlight: true },
    { name: "Scikit-Learn", level: "Expert", category: "Machine Learning", highlight: true },
    { name: "OpenCV", level: "Advanced", category: "Computer Vision", highlight: true },
    { name: "CNNs & GANs", level: "Advanced", category: "Vision & Generative", highlight: true },
    { name: "RNN / LSTM", level: "Advanced", category: "Sequential Models", highlight: false },
    { name: "Object Detection", level: "Advanced", category: "Computer Vision", highlight: true },
    { name: "Face Recognition", level: "Advanced", category: "Computer Vision", highlight: true },
    { name: "Supervised & Unsupervised", level: "Expert", category: "ML Foundations", highlight: false },
    { name: "XGBoost & SMOTE", level: "Advanced", category: "Ensemble ML", highlight: true },
    { name: "Feature Engineering", level: "Expert", category: "Data Science", highlight: true },
    { name: "Model Optimization", level: "Advanced", category: "ML Pipelines", highlight: false },
    { name: "Pandas & NumPy", level: "Expert", category: "Data Analysis", highlight: true },
    { name: "EDA & Matplotlib", level: "Advanced", category: "Data Analytics", highlight: false }
  ],
  gen_ai_nlp: [
    { name: "LLMs & Prompt Eng", level: "Advanced", category: "Generative AI", highlight: true },
    { name: "RAG Architectures", level: "Advanced", category: "Generative AI", highlight: true },
    { name: "Agentic AI", level: "Advanced", category: "Autonomous Agents", highlight: true },
    { name: "LangChain", level: "Advanced", category: "LLM Framework", highlight: true },
    { name: "CrewAI & AutoGPT", level: "Proficient", category: "Multi-Agent Systems", highlight: true },
    { name: "Hugging Face", level: "Advanced", category: "Open Source AI", highlight: true },
    { name: "NLP & NLTK", level: "Advanced", category: "Text Processing", highlight: true },
    { name: "AI Chatbots", level: "Expert", category: "Conversational AI", highlight: true },
    { name: "Text Processing", level: "Advanced", category: "NLP Pipeline", highlight: false }
  ],
  development: [
    { name: "Python", level: "Expert", category: "Primary Language", highlight: true },
    { name: "React", level: "Advanced", category: "Modern Frontend", highlight: true },
    { name: "Node.js", level: "Advanced", category: "Backend Runtime", highlight: true },
    { name: "Flask", level: "Expert", category: "Microservices", highlight: true },
    { name: "Django", level: "Advanced", category: "Web Framework", highlight: true },
    { name: "FastAPI", level: "Advanced", category: "High-Perf APIs", highlight: true },
    { name: "WebSockets", level: "Advanced", category: "Real-Time Comms", highlight: true },
    { name: "REST APIs", level: "Expert", category: "Distributed Systems", highlight: true },
    { name: "MongoDB", level: "Advanced", category: "NoSQL Database", highlight: false },
    { name: "JavaScript", level: "Advanced", category: "Full Stack", highlight: true },
    { name: "HTML5 & CSS3", level: "Expert", category: "Modern UI/UX", highlight: false }
  ],
  languages_core: [
    { name: "Python", level: "Expert", category: "Primary Language", highlight: true },
    { name: "Java", level: "Proficient", category: "OOP Language", highlight: true },
    { name: "C", level: "Proficient", category: "Systems Programming", highlight: false },
    { name: "JavaScript", level: "Advanced", category: "Core Web", highlight: true },
    { name: "SQL", level: "Advanced", category: "Relational Queries", highlight: true },
    { name: "Data Structures & Algos", level: "GATE '26", category: "Algorithmic Core", highlight: true },
    { name: "System Design", level: "Advanced", category: "Architecture", highlight: true },
    { name: "Object-Oriented Design", level: "Expert", category: "Software Patterns", highlight: true },
    { name: "Operating Systems", level: "GATE '26", category: "Systems Engineering", highlight: false },
    { name: "Computer Networks", level: "GATE '26", category: "Distributed Networks", highlight: false }
  ],
  enterprise_cloud: [
    { name: "SAP ABAP", level: "Certified", category: "Enterprise ERP", highlight: true },
    { name: "SAP Tech Consultant", level: "Certified", category: "Data Integration", highlight: true },
    { name: "SAP Fiori & Automation", level: "Proficient", category: "Enterprise UX & RPA", highlight: true },
    { name: "Docker", level: "Advanced", category: "Containerization", highlight: true },
    { name: "Git & GitHub", level: "Expert", category: "Version Control", highlight: true },
    { name: "Linux / Bash", level: "Advanced", category: "OS & Shell", highlight: true },
    { name: "Google Cloud (GCP)", level: "Certified", category: "Cloud & AI", highlight: true },
    { name: "PostgreSQL & MySQL", level: "Advanced", category: "Database Engines", highlight: true },
    { name: "Firebase", level: "Advanced", category: "Realtime DB", highlight: false },
    { name: "SQLite", level: "Expert", category: "Embedded DB", highlight: false }
  ],
  certifications: [
    { title: "GATE 2026 Qualified", issuer: "IIT / MoE India", year: "2026", type: "National Engineering Exam", icon: "🎓" },
    { title: "SRISHTI 2026 Best Project Award", issuer: "SRISHTI Techfest", year: "2026", type: "AI Innovation", icon: "🏆" },
    { title: "Claude 101", issuer: "Anthropic", year: "2026", type: "Generative AI", icon: "🧠" },
    { title: "Claude Code in Action", issuer: "Anthropic", year: "2026", type: "Agentic Tooling", icon: "⚡" },
    { title: "SAP Technology Consultant", issuer: "SAP Specialization", year: "2025", type: "Enterprise ERP", icon: "🏢" },
    { title: "Learn SAP ABAP by Doing", issuer: "Udemy", year: "2026", type: "Enterprise Dev", icon: "💻" },
    { title: "Deep Learning (NPTEL)", issuer: "IIT Ropar", year: "2024", type: "Advanced AI", icon: "🧬" },
    { title: "Machine Learning Foundation", issuer: "Infosys Springboard", year: "2024", type: "ML Core", icon: "📊" },
    { title: "Digital Transformation Using AI/ML", issuer: "Google Cloud", year: "2025", type: "Cloud Architecture", icon: "☁️" }
  ]
};

