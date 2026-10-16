export const personalInfo = {
  name: "Shivang Sharma",
  role: "MERN Stack Developer",
  statusLabel: "AVAILABLE FOR SOFTWARE DEVELOPMENT OPPORTUNITIES",
  headline: "Hi, I'm Shivang Sharma.",
  animatedRoles: [
    "MERN Stack Developer",
    "React.js Developer",
    "Full Stack Developer"
  ],
  supportingText: "I build responsive digital experiences and full-stack web applications that solve real-world problems.",
  aboutText: "I'm a MERN Stack Developer with hands-on experience in React.js, Node.js, Express.js, MongoDB, and JavaScript. I have worked on live client projects, responsive web interfaces, REST APIs, and AI-powered applications. I enjoy turning ideas into practical, user-friendly digital products and continuously improving my development skills.",
  
  highlights: [
    {
      title: "Live Client Projects",
      desc: "Delivered production-grade client solutions like Nielacare and Poiya Health with end-to-end full-stack capabilities.",
      tag: "Production",
      iconName: "Briefcase"
    },
    {
      title: "Full-Stack Development Experience",
      desc: "Comprehensive hands-on proficiency across modern React frontends, Express/Node REST APIs, and MongoDB databases.",
      tag: "MERN Stack",
      iconName: "Layers"
    },
    {
      title: "Responsive Web Design",
      desc: "Crafting fluid, mobile-first, cross-browser interfaces using modern CSS, Tailwind, and reusable component architectures.",
      tag: "Pixel Perfect",
      iconName: "Smartphone"
    },
    {
      title: "AI-Powered Application Development",
      desc: "Hands-on experience developing and integrating intelligent AI conversational chatbot services using Node.js.",
      tag: "Intelligent",
      iconName: "Sparkles"
    }
  ],

  contact: {
    email: "Shivangsh350@gmail.com",
    phone: "+91 9680699836",
    location: "Jaipur, Rajasthan, India",
    github: "https://github.com/shivangsha350",
    linkedin: "https://www.linkedin.com/in/shivang-sharma-93ba1727b",
    resumeUrl: "/Shivang_Sharma_Resume.pdf"
  }
};

export const skillsData = [
  {
    category: "Programming Languages",
    description: "Core foundation for algorithmic problem-solving & modern software engineering",
    skills: [
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "Code2" },
      { name: "Python", level: "Intermediate", icon: "Terminal" },
      { name: "Java", level: "Foundational", icon: "Coffee" },
      { name: "HTML5", level: "Advanced", icon: "FileCode" },
      { name: "CSS3", level: "Advanced", icon: "Palette" }
    ]
  },
  {
    category: "Frontend",
    description: "Building responsive, accessible, high-performance web user interfaces",
    skills: [
      { name: "React.js", level: "Proficient", icon: "Atom" },
      { name: "Bootstrap", level: "Proficient", icon: "Layout" },
      { name: "Tailwind CSS", level: "Proficient", icon: "Wind" }
    ]
  },
  {
    category: "Backend",
    description: "Developing scalable server-side architectures, business logic & RESTful services",
    skills: [
      { name: "Node.js", level: "Proficient", icon: "Server" },
      { name: "Express.js", level: "Proficient", icon: "Cpu" }
    ]
  },
  {
    category: "Database",
    description: "Data modeling, schema design, and performant query execution",
    skills: [
      { name: "MongoDB", level: "Proficient", icon: "Database" },
      { name: "Mongoose", level: "Proficient", icon: "HardDrive" }
    ]
  },
  {
    category: "APIs & Authentication",
    description: "Secure data pipelines, token management, and standardized integrations",
    skills: [
      { name: "RESTful APIs", level: "Proficient", icon: "Network" },
      { name: "JWT Authentication", level: "Proficient", icon: "ShieldCheck" }
    ]
  },
  {
    category: "Tools & Deployment",
    description: "Version control, API testing, build systems, and cloud hosting platforms",
    skills: [
      { name: "Git", level: "Proficient", icon: "GitBranch" },
      { name: "GitHub", level: "Proficient", icon: "Github" },
      { name: "VS Code", level: "Proficient", icon: "Code" },
      { name: "Postman", level: "Proficient", icon: "Send" },
      { name: "Vercel", level: "Proficient", icon: "Cloud" },
      { name: "Render", level: "Proficient", icon: "ServerCog" }
    ]
  }
];

export const projectsData = [
  {
    id: "nielacare",
    title: "Nielacare — E-Commerce Website",
    type: "Freelance Project",
    tagline: "Full-Stack Menstrual Hygiene & Wellness Platform",
    technologies: ["Next.js", "TypeScript", "React.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Razorpay"],
    description: "Developed a full-stack e-commerce platform for menstrual hygiene products with secure authentication, product management, shopping cart, checkout, and order management. Integrated Razorpay payments, branded invoice generation, and automated customer email notifications.",
    deployment: "Frontend deployed on Vercel, backend hosted on Render, and scalable cloud database on MongoDB Atlas.",
    liveUrl: "https://nielacare.com",
    githubUrl: null, // Protected client code
    githubNote: "Client repository is confidential under NDA",
    image: "/projects/nielacare.jpg",
    accentColor: "#10f279",
    featured: true,
    highlights: [
      "Secure JWT authentication & profile management",
      "Dynamic product catalog with category & price filtering",
      "Persistent shopping cart and smooth checkout drawer",
      "Seamless Razorpay payment gateway integration",
      "Automated branded PDF invoice generation",
      "Automated customer order confirmation email alerts"
    ]
  },
  {
    id: "poiya-health",
    title: "Poiya Health — Healthcare Corporate Website",
    type: "Freelance Project",
    tagline: "Healthcare Corporate Portal & Admin Control System",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    description: "Built a full-stack healthcare corporate website with a feature-rich admin panel to manage products, categories, enquiries, career applications, and website content. Implemented secure REST APIs and CRUD functionality.",
    deployment: "Production cloud hosting with secure REST API layer and authenticated administrative dashboards.",
    liveUrl: null, // Configurable preview
    liveUrlNote: "Client portal live demo configured upon request",
    githubUrl: null,
    githubNote: "Proprietary client IP under commercial contract",
    image: "/projects/poiya.jpg",
    accentColor: "#38bdf8",
    featured: true,
    highlights: [
      "Robust Admin Panel with role-based security",
      "Dynamic CRUD management for medical categories & services",
      "Patient enquiry intake workflow and status tracker",
      "Healthcare career opportunities and applicant intake",
      "Standardized RESTful API endpoints with validation"
    ]
  },
  {
    id: "jit-polytechnic",
    title: "JIT Polytechnic Website",
    type: "Internship Project",
    tagline: "Modern Educational Institution Web Portal",
    technologies: ["React.js", "JavaScript", "Bootstrap", "Tailwind CSS"],
    description: "Developed a responsive educational website using reusable React components, improving usability, responsiveness, and cross-browser compatibility.",
    deployment: "Institutional web hosting with optimized client-side bundle.",
    liveUrl: null,
    liveUrlNote: "Institutional intranet / deployment URL configurable",
    githubUrl: null,
    githubNote: "Simtrak Solutions internal repository",
    image: "/projects/jit.jpg",
    accentColor: "#f59e0b",
    featured: false,
    highlights: [
      "Modular, reusable React component architecture",
      "Comprehensive academic department & facility showcases",
      "Accessible admissions inquiry and student noticeboard",
      "Cross-browser testing ensuring uniform responsiveness"
    ]
  },
  {
    id: "tici-naturelab",
    title: "TiCi NatureLab Website",
    type: "Internship Project",
    tagline: "Botanical Research & Cosmetic Brand Experience",
    technologies: ["React.js", "JavaScript", "Bootstrap", "Tailwind CSS"],
    description: "Contributed to the development of a responsive business website, implementing modern frontend features and improving the user experience.",
    deployment: "Cloud-hosted modern corporate showcase.",
    liveUrl: null,
    liveUrlNote: "Client business showcase URL configurable",
    githubUrl: null,
    githubNote: "Simtrak Solutions internal repository",
    image: "/projects/tici.jpg",
    accentColor: "#34d399",
    featured: false,
    highlights: [
      "Botanical formulation catalog with clean card grids",
      "Interactive scientific research and lab quality exhibits",
      "Enhanced mobile UX with lightweight touch interactions",
      "Modern CSS styling with smooth responsive scaling"
    ]
  }
];

export const experienceData = [
  {
    role: "Web Development Intern",
    company: "Simtrak Solutions",
    period: "May 2025 – December 2025",
    type: "Internship",
    badge: "Key Achievement: AI Chatbot Integration",
    skills: ["React.js", "JavaScript", "Bootstrap", "Tailwind CSS", "Node.js", "REST APIs"],
    bullets: [
      "Spearheaded frontend development using React.js, modern JavaScript, Bootstrap, and Tailwind CSS.",
      "Contributed directly to two live production client projects: JIT Polytechnic and TiCi NatureLab.",
      "Developed and successfully integrated an AI-powered conversational chatbot assistant utilizing Node.js.",
      "Engineered clean REST API integrations, responsive UI components, and delivered significant cross-browser performance optimizations."
    ]
  },
  {
    role: "Full-Stack Development Intern",
    company: "BR Softech",
    period: "March 2025 – July 2025",
    type: "Internship",
    badge: "MERN Stack Engineering",
    skills: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    bullets: [
      "Engaged in full-stack web engineering across the entire MERN stack ecosystem.",
      "Developed modular and performant React.js interfaces backed by reusable state patterns.",
      "Contributed to backend RESTful API design, database querying, and MongoDB document modeling.",
      "Collaborated actively in sprint debugging, application performance tuning, and cloud deployment pipelines."
    ]
  },
  {
    role: "Frontend Development Intern",
    company: "BR Softech",
    period: "March 2025 – May 2025",
    type: "Internship",
    badge: "UI/UX & Core Web Foundation",
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Layouts"],
    bullets: [
      "Built clean, semantic web layouts utilizing HTML5, CSS3, modern JavaScript, and Bootstrap.",
      "Assisted senior frontend engineers with UI bug fixing, responsive layout tuning, and DOM manipulation.",
      "Acquired deep industry development practices, version control workflows, and team collaboration standards."
    ]
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Pursuing Higher Studies",
    period: "2026 – 2028",
    status: "Pursuing",
    isCurrent: true,
    details: "Focusing on Advanced Software Architecture, Distributed Systems, Cloud Computing, and Enterprise Web Development."
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Undergraduate Degree",
    period: "2023 – 2026",
    status: "CGPA: 7.89",
    isCurrent: false,
    details: "Graduated with 7.89 CGPA. Solid grounding in Data Structures, Object-Oriented Programming, Database Management Systems, and Web Engineering."
  },
  {
    degree: "Class XII — Senior Secondary",
    institution: "CBSE Board",
    period: "2021 – 2022",
    status: "60%",
    isCurrent: false,
    details: "Completed Higher Secondary education with focus on analytical sciences, mathematics, and computer fundamentals."
  },
  {
    degree: "Class X — Secondary School",
    institution: "CBSE Board",
    period: "2019 – 2020",
    status: "57%",
    isCurrent: false,
    details: "Completed Secondary School Examination with foundational curriculum under the Central Board of Secondary Education."
  }
];

export const marqueeTechs = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript (ES6+)",
  "Next.js",
  "Tailwind CSS",
  "RESTful APIs",
  "JWT Authentication",
  "Mongoose",
  "Postman",
  "Git & GitHub",
  "Vercel",
  "Render",
  "Python",
  "Java",
  "Bootstrap"
];
