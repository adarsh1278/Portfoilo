const userData = {
  personal: {
    name: 'Adarsh Tiwari',
    title: 'Full-Stack Engineer | AI Systems Builder | Real-Time Architect',
    goal: 'Seeking Internship & Full-Time SDE / Full-Stack Roles',
    location: 'Ghaziabad, India',
    email: 'adarsh.tiwari.dev@gmail.com',
    resumeUrl: '/assets/Adarsh_Tiwari_Resume.pdf',
    headshot:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80'
  },
  education: {
    degree: 'B.Tech Computer Science',
    institution: 'KIET Group of Institutions',
    duration: '2022–2026 (Expected)',
    cgpa: '8.5 / 10'
  },
  achievements: [
    'LeetCode Knight Badge',
    '1900+ rating (Top 5%)',
    '500+ DSA problems solved',
    'Patent No: 202511061856A'
  ],
  experience: [
    {
      company: 'Opernova LLP',
      role: 'Full-Stack Developer',
      duration: 'Jan 2026 – Present',
      highlights: [
        'Building scalable full-stack applications',
        'Designing modular backend APIs',
        'Production-ready authentication systems'
      ]
    },
    {
      company: 'Agile Growth Tech',
      role: 'Software Engineer Intern',
      duration: 'Jan 2025 – May 2025',
      highlights: [
        'Improved page load performance by 25%',
        'Reduced API latency by 18%',
        'Built scalable backend with Prisma + PostgreSQL on AWS'
      ]
    },
    {
      company: 'Mouse & Cheese Design Studio',
      role: 'Web Developer Intern',
      duration: 'Aug 2024 – Dec 2025',
      highlights: [
        'Built responsive Next.js applications',
        'Implemented JWT authentication',
        'SEO optimization'
      ]
    }
  ],
  projects: [
    {
      id: 'grievance-redressal',
      featured: true,
      title: 'AI-Based Grievance Redressal System',
      description:
        'Patent-backed grievance intelligence system that classifies and routes civic complaints using NLP pipelines and secure backend workflows.',
      techStack: ['Next.js', 'Node.js', 'NLP', 'PostgreSQL', 'JWT'],
      achievements: [
        'Achieved 90% complaint classification accuracy',
        'Reduced manual triage by 70%',
        'Patent published for intelligent routing engine',
        'Implemented secure and auditable backend'
      ],
      githubUrl: '#',
      liveUrl: '#',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
      architecture: {
        title: 'Routing Architecture',
        flow: [
          'Citizen Portal',
          'NLP Classifier',
          'Priority Engine',
          'Department Queue',
          'Resolution Dashboard'
        ]
      }
    },
    {
      id: 'quizbee',
      title: 'QuizBee – Real-Time Quiz Platform',
      description:
        'High-concurrency competitive quiz platform with event-driven architecture and role-based controls.',
      techStack: ['Next.js', 'WebSocket', 'Redis Pub/Sub', 'Node.js', 'JWT'],
      achievements: [
        'Handled 500+ concurrent users in battle rooms',
        'Used Redis Pub/Sub to sync leaderboard states',
        'Implemented secure JWT role system for host/player',
        'Built low-latency scoring updates'
      ],
      githubUrl: '#',
      liveUrl: '#',
      image:
        'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
      architecture: {
        title: 'Real-Time Event Flow',
        flow: [
          'Client Rooms',
          'WebSocket Gateway',
          'Redis Event Bus',
          'Scoring Service',
          'Live Leaderboard'
        ]
      }
    },
    {
      id: 'cheesetalk',
      title: 'CheeseTalk – Blogging SaaS',
      description:
        'Feature-rich MERN SaaS for creators with rich-text editing, identity federation, and community engagement tooling.',
      techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Editor.js', 'OAuth'],
      achievements: [
        'Integrated Editor.js for block-based writing',
        'Added Google OAuth for frictionless login',
        'Built nested comments and analytics dashboard',
        'Improved retention with creator insights'
      ],
      githubUrl: '#',
      liveUrl: '#',
      image:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'connect-senior',
      title: 'Connect Senior – Networking Platform',
      description:
        'Structured networking platform connecting juniors and seniors with secure profiles, validation, and server-rendered performance.',
      techStack: ['Next.js', 'TypeScript', 'Zod', 'JWT', 'PostgreSQL'],
      achievements: [
        'Implemented strict request validation with Zod',
        'Enabled secure JWT-based auth and session flow',
        'Optimized SSR for faster profile discovery',
        'Built clean and scalable TypeScript modules'
      ],
      githubUrl: '#',
      liveUrl: '#',
      image:
        'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'pocket-cloud',
      title: 'Pocket Cloud',
      description:
        'Cloud learning project focused on secure deployment and storage orchestration with production-minded DevOps foundations.',
      techStack: ['AWS EC2', 'AWS S3', 'Docker', 'Nginx', 'Linux'],
      achievements: [
        'Deployed service containers on AWS EC2',
        'Configured S3-backed object storage workflows',
        'Containerized modules with Docker',
        'Documented infra setup and scaling experiments'
      ],
      githubUrl: '#',
      liveUrl: '#',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'anonymous-poll',
      title: 'Anonymous Poll System',
      description:
        'Real-time polling engine with instant vote propagation and synchronization for live audience interaction.',
      techStack: ['Node.js', 'WebSocket', 'Redis', 'TypeScript'],
      achievements: [
        'Delivered real-time vote updates with sockets',
        'Synchronized poll states through Redis',
        'Designed anonymous secure vote flow',
        'Built resilient backend for live events'
      ],
      githubUrl: '#',
      liveUrl: '#',
      image:
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'ecommerce-app',
      title: 'E-Commerce Application',
      description:
        'Commerce platform with robust cart and order orchestration, admin analytics, and dependable checkout lifecycle.',
      techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      achievements: [
        'Engineered dynamic cart and checkout logic',
        'Built admin dashboard for inventory & sales',
        'Implemented order management pipeline',
        'Optimized UI for mobile shoppers'
      ],
      githubUrl: '#',
      liveUrl: '#',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'personal-portfolio',
      title: 'Personal Portfolio',
      description:
        'Performance-focused portfolio engineered for recruiter clarity with reusable content architecture and modern UI.',
      techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      achievements: [
        'Built with fully dynamic data-driven architecture',
        'Implemented clean and responsive dark UI',
        'Integrated subtle motion for polished storytelling',
        'Optimized assets and layout for performance'
      ],
      githubUrl: '#',
      liveUrl: '#',
      image:
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80'
    }
  ],
  profiles: [
    {
      platform: 'LeetCode',
      username: 'adarsh_tiwari',
      stats: '1900+ | Knight Badge',
      url: '#'
    },
    {
      platform: 'GitHub',
      username: 'adarsh-tiwari',
      stats: 'Open-source & full-stack projects',
      url: '#'
    },
    {
      platform: 'LinkedIn',
      username: 'Adarsh Tiwari',
      stats: 'Professional networking & experience',
      url: '#'
    },
    {
      platform: 'Codeforces',
      username: 'coming-soon',
      stats: 'Profile placeholder',
      url: '#'
    },
    {
      platform: 'CodeChef',
      username: 'coming-soon',
      stats: 'Profile placeholder',
      url: '#'
    }
  ],
  leadership: {
    role: 'Web Lead',
    organization: 'Coding Community',
    summary: 'Mentored aspiring engineers and led collaborative learning through regular technical events.',
    metrics: [
      { label: 'Students Mentored', value: 100, suffix: '+' },
      { label: 'Workshops Conducted', value: 20, suffix: '+' }
    ]
  },
  contacts: {
    email: 'adarsh.tiwari.dev@gmail.com',
    github: '#',
    linkedin: '#'
  }
};

export default userData;
