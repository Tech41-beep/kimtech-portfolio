export type NavId = 'home' | 'about' | 'achievement' | 'projects' | 'contact';

export const NAV_ITEMS: { id: NavId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'achievement', label: 'Achievement' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const PROFILE = {
  name: 'Lov Kimtech',
  role: 'Computer Science Student',
  subRole: 'Aspiring Full-Stack Web Developer',
  intro:
    'I enjoy building modern web applications that solve real-world problems. I continuously improve my programming, problem-solving, and teamwork skills through academic and personal projects.',
  portrait:
    'https://images.pexels.com/photos/26524772/pexels-photo-26524772.jpeg?auto=compress&cs=tinysrgb&h=900&w=700',
  cvName: 'Lov_Kimtech_CV.pdf',
  socials: {
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    facebook: 'https://facebook.com/',
    telegram: 'https://t.me/',
    email: 'mailto:lov.kimtech@example.com',
  },
};

export const TYPING_WORDS = [
  'Full-Stack Web Developer',
  'React Developer',
  'Computer Science Student',
  'Problem Solver',
];

export const ABOUT = {
  who: 'I am a Computer Science student and aspiring full-stack web developer who loves turning ideas into clean, functional products. I care about readable code, thoughtful UX, and shipping things that actually work.',
  education: 'BSc in Computer Science (in progress)',
  status: 'Currently studying & building personal projects',
  passion:
    'I am passionate about modern web technologies, elegant interfaces, and the craft of solving real problems with simple, maintainable software.',
};

export const TIMELINE = [
  {
    year: '2024',
    title: 'Started Computer Science',
    desc: 'Began my formal CS journey — foundations of programming, data structures, and algorithms.',
  },
  {
    year: '2025',
    title: 'Built POS System',
    desc: 'Designed a full point-of-sale system for products, sales, customers, and reports.',
  },
  {
    year: '2025',
    title: 'Developed Internship Finder',
    desc: 'Created a platform connecting students with companies and internship opportunities.',
  },
  {
    year: '2026',
    title: 'Built React E-Commerce Website',
    desc: 'Shipped a responsive shopping site with search, filtering, cart, and external APIs.',
  },
];

export type SkillGroup = {
  title: string;
  icon: 'code' | 'layout' | 'server' | 'database' | 'wrench' | 'sparkles';
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Programming Languages',
    icon: 'code',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: 'layout',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'REST API'],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    title: 'Soft Skills',
    icon: 'sparkles',
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Fast Learning'],
  },
];

export type Achievement = {
  title: string;
  description: string;
  year: string;
  image: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Dean's List",
    description:
      'Recognized for academic excellence and maintaining a high GPA across the semester.',
    year: '2025',
    image:
      'https://images.pexels.com/photos/6345332/pexels-photo-6345332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Hackathon Participation',
    description:
      'Competed in a 24-hour hackathon, collaborating to build a working prototype under pressure.',
    year: '2025',
    image:
      'https://images.pexels.com/photos/6565250/pexels-photo-6565250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Scholarship',
    description:
      'Awarded a merit-based scholarship in recognition of strong academic performance.',
    year: '2025',
    image:
      'https://images.pexels.com/photos/37012315/pexels-photo-37012315.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Academic Awards',
    description:
      'Received departmental awards for top performance in programming and web development courses.',
    year: '2026',
    image:
      'https://images.pexels.com/photos/6565255/pexels-photo-6565255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
  {
    title: 'Training Certificates',
    description:
      'Completed professional training programs in modern web development and software engineering.',
    year: '2026',
    image:
      'https://images.pexels.com/photos/8177922/pexels-photo-8177922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  features?: string[];
  tech: string[];
  github: string;
  demo: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'POS System',
    description: 'Built for managing products, sales, customers, and reports.',
    image:
      'https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tech: ['React', 'Node.js', 'Express', 'MySQL'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Internship Finder',
    description:
      'Platform that connects students with internship opportunities. Includes student & company dashboards, authentication, and a responsive UI.',
    image:
      'https://images.pexels.com/photos/2764993/pexels-photo-2764993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Student dashboard', 'Company dashboard', 'Authentication', 'Responsive UI'],
    tech: ['React', 'Express', 'PostgreSQL'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'E-Commerce Website',
    description:
      'Responsive shopping website using React and external APIs. Product listing, search, filtering, shopping cart, and fully responsive design.',
    image:
      'https://images.pexels.com/photos/374560/pexels-photo-374560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Product listing', 'Search', 'Filtering', 'Shopping cart', 'Responsive design'],
    tech: ['React', 'Vite', 'Fetch API', 'Tailwind CSS'],
    github: 'https://github.com/',
    demo: '#',
  },
];

export const CONTACT = {
  email: 'lov.kimtech@example.com',
  phone: '+855 00 000 000',
  location: 'Phnom Penh, Cambodia',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
};
