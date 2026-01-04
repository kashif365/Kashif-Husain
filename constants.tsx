
import { Project, Skill } from './types';

export const SKILLS: Skill[] = [
  { name: 'React.js', category: 'Frontend', level: 95 },
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 90 },
  { name: 'HTML5/CSS3', category: 'Frontend', level: 98 },
  { name: 'Bootstrap/Tailwind', category: 'Frontend', level: 92 },
  { name: 'Laravel', category: 'Backend', level: 75 },
  { name: 'WordPress', category: 'CMS', level: 85 },
  { name: 'UI/UX Design', category: 'Tools', level: 80 },
  { name: 'Three.js', category: 'Frontend', level: 70 },
  { name: 'GSAP', category: 'Frontend', level: 85 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Modern E-Commerce',
    description: 'A high-performance online store built with React and Tailwind, featuring a seamless shopping experience.',
    tags: ['React', 'Tailwind', 'Stripe'],
    image: 'https://picsum.photos/id/1/600/400',
    link: '#'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Real-time data visualization platform for monitoring crypto and stock assets with interactive charts.',
    tags: ['Next.js', 'D3.js', 'Firebase'],
    image: 'https://picsum.photos/id/2/600/400',
    link: '#'
  },
  {
    id: 3,
    title: 'Laravel CMS',
    description: 'Custom content management system designed for scalability and ease of use for content creators.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    image: 'https://picsum.photos/id/3/600/400',
    link: '#'
  },
  {
    id: 4,
    title: 'Creative Studio Web',
    description: 'Award-winning portfolio design for a digital agency with immersive scroll animations.',
    tags: ['Three.js', 'GSAP', 'HTML/CSS'],
    image: 'https://picsum.photos/id/4/600/400',
    link: '#'
  }
];
