export interface Project {
  id: string;
  title: string;
  featured?: boolean;
  description: string;
  techStack: string[];
  achievements: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  architecture?: {
    title: string;
    flow: string[];
  };
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
}

export interface Profile {
  platform: string;
  username: string;
  stats: string;
  url: string;
}

export interface UserData {
  personal: {
    name: string;
    title: string;
    goal: string;
    location: string;
    email: string;
    resumeUrl: string;
    headshot: string;
  };
  education: {
    degree: string;
    institution: string;
    duration: string;
    cgpa: string;
  };
  achievements: string[];
  experience: Experience[];
  leadership: {
    role: string;
    organization: string;
    metrics: { label: string; value: number; suffix?: string }[];
    summary: string;
  };
  projects: Project[];
  profiles: Profile[];
  contacts: {
    email: string;
    github: string;
    linkedin: string;
  };
}
