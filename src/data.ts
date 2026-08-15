export type NavId = 'home' | 'about' | 'achievement' | 'projects' | 'contact';
import image from '../img/image.jpg';
import certificate from '../img/Certificate.jpg';
import gemini from '../img/Gemini-certified-Student.jpg'
import volunteer from '../img/Volunteer-certifcation.jpg';
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
  portrait: image,
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
    year: '2025',
    title: 'Started Computer Science',
    desc: 'Began BSc in Computer Science at Cambodia Academy Digital of Technology with focus on Software Engineering.',
  },
   {
    year: '2025',
    title: 'Campus Canteen Food Menu',
    desc: 'Front-End Developer — Developed responsive menu website with HTML, CSS, and JavaScript. Implemented food category filtering.',
  },
  {
    year: '2026',
    title: 'E-Commerce Website',
    desc: 'Front-End Developer — Built a responsive shopping interface with React and Vite. Integrated external APIs using Fetch and implemented product filtering with reusable components.',
  },
    {
    year: '2026',
    title: 'Internship Finder System',
    desc: 'Full-Stack Developer — Built internship platform using React, Node.js, Express, and PostgreSQL. Developed authentication, internship search, and CV Builder.',
  },
    {
    year: '2026',
    title: 'POS System (Present)',
    desc: 'Full-Stack Developer — Developed RESTful APIs with Node.js and Express. Implemented CRUD operations using MongoDB. Managing products, customers, and sales records.',
  },

 
];

export type SkillGroup = {
  title: string;
  icon: 'code' | 'layout' | 'server' | 'database' | 'wrench' | 'sparkles';
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Core Languages',
    icon: 'code',
    skills: ['JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    title: 'UI Engineering',
    icon: 'layout',
    skills: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Responsive UI'],
  },
  {
    title: 'Server-side',
    icon: 'server',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    title: 'Data Layer',
    icon: 'database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Schema Design'],
  },
  {
    title: 'Workflow & Tools',
    icon: 'wrench',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker'],
  },
  {
    title: 'Collaboration',
    icon: 'sparkles',
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Fast Learning', 'Ownership'],
  },
];

export type Achievement = {
  title: string;
  description: string;
  year: string;
  image: string;
  imageFit?: 'cover' | 'contain';
};
export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'CCNA: Introduction to Networks',
    description:
      'Successfully completed the Cisco Networking Academy CCNA: Introduction to Networks course, gaining hands-on knowledge of networking fundamentals, IP addressing, routing, switching, and network security.',
    year: '2025',
    image: certificate,
    imageFit: 'contain',
  },
  {
    title: 'Volunteer - Charity Program',
    description:
      'Participated in a community charity program in Kampong Spue, supporting local initiatives and strengthening teamwork, communication, and leadership skills.',
    year: '2025',
    image: volunteer,
    imageFit: 'contain',
  },
   {
    title: 'Gemini: Continuous Learning',
    description:
      'Earned the Gemini Certified Student badge for completing the Continuous Learning program, demonstrating commitment to ongoing education and skill development in computer science and web development.',
    year: '2026',
    image: gemini,
    imageFit: 'contain',
  },
  {
    title: 'Academic Projects',
    description:
      'Developed multiple real-world software projects including a Point of Sale (POS) System, Internship Finder Platform, and React E-commerce Website as part of academic and personal learning.',
    year: '2026',
    image: '',
    imageFit: 'cover',
  },
   
  // {
  //   title: 'Continuous Learning',
  //   description:
  //     'Continuously expanding technical skills through online courses, certifications, and practical full-stack development projects using React, Node.js, Express, and SQL databases.',
  //   year: '2026',
  //   image,
  //   imageFit: 'cover',
  // },
];
export type Project = {
  title: string;
  description: string;
  image: string;
  video?: string;
  features?: string[];
  tech: string[];
  github: string;
  demo: string;
};

export const PROJECTS: Project[] = [
   {
    title: 'Campus Canteen Food Menu',
    description:
      'Responsive food menu website for campus canteen. Built with vanilla HTML, CSS, and JavaScript with category filtering functionality.',
    image:
      'https://images.pexels.com/photos/374560/pexels-photo-374560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    video: '/video/Canteen_Demo.MP4',
    features: ['Responsive design', 'Food categories', 'Category filtering', 'Mobile friendly'],
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/',
    demo: '/video/Canteen_Demo.MP4',
  },
   {
    title: 'E-Commerce Website',
    description:
      'Frontend e-commerce website built with React and Vite. Integrated external APIs using Fetch and implemented product filtering with reusable components.',
    image:
      'https://images.pexels.com/photos/374560/pexels-photo-374560.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    video: '/video/Ecommerce_Demo.MP4',
    features: ['Responsive design', 'Product filtering', 'Reusable components', 'Mobile friendly'],
    tech: ['React', 'Vite', 'JavaScript'],
    github: 'https://github.com/',
    demo: '/video/Ecommerce_Demo.MP4',
  },
  {
    title: 'POS System',
    description:
      'Full-stack point-of-sale system for managing products, sales, customers, and reports. Developed RESTful APIs with Node.js and Express, implemented CRUD operations using MongoDB.',
    image:
      'https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: ['Product management', 'Sales tracking', 'Customer database', 'Report generation'],
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API'],
    github: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Internship Finder Platform',
    description:
      'Full-stack platform connecting students with internship opportunities. Features include student & company dashboards, authentication system, internship search, and CV builder.',
    image:
      'https://images.pexels.com/photos/2764993/pexels-photo-2764993.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    video: '/video/internship_finder_Demo.mp4',
    features: ['Student dashboard', 'Company dashboard', 'Authentication', 'CV Builder', 'Search & Filter'],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/',
    demo: '/video/internship_finder_Demo.mp4',
  },
 
];

export const CONTACT = {
  email: 'lov.kimtech@example.com',
  phone: '+855 96 678 1505',
  location: 'Phnom Penh, Cambodia',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
};
