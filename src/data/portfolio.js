/**
 * Single source of truth for every piece of content on the site.
 * Edit this file to make the portfolio yours — no component changes needed.
 */

export const profile = {
  name: 'Mark Kinyanjui',
  initials: 'MK',
  role: 'Full-Stack Developer',
  tagline: 'I build fast, accessible web applications with React.',
  summary:
    'Software developer based in Nairobi, Kenya. I care about clean component architecture, ' +
    'performance budgets, and interfaces that stay usable for everyone. Currently focused on ' +
    'React, modern JavaScript and the tooling around them.',
  location: 'Nairobi, Kenya',
  email: 'mckinyanjui3@gmail.com',
  availability: 'Open to new opportunities',
  resumeUrl: '/resume.pdf',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/GHOST-CLOUD0', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
];

export const stats = [
  { value: '3+', label: 'Years writing code' },
  { value: '15+', label: 'Projects shipped' },
  { value: '100%', label: 'Lighthouse a11y target' },
];

export const skills = [
  {
    group: 'Frontend',
    items: ['React', 'JavaScript (ES2023)', 'HTML5', 'CSS3', 'Vite', 'Responsive Design'],
  },
  {
    group: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'Authentication'],
  },
  {
    group: 'Tooling & Practice',
    items: ['Git & GitHub', 'ESLint', 'Jest', 'Accessibility (WCAG)', 'CI/CD', 'Agile'],
  },
];

export const projects = [
  {
    id: 'project-portfolio',
    title: 'Project Portfolio',
    description:
      'This site. A responsive React portfolio with a themeable design system, client-side ' +
      'search and filtering, and zero UI framework dependencies.',
    tags: ['React', 'Vite', 'CSS'],
    year: '2025',
    featured: true,
    repo: 'https://github.com/GHOST-CLOUD0/React-Portfolio',
    demo: '',
  },
  {
    id: 'task-manager',
    title: 'Task Manager API',
    description:
      'A REST API for task tracking with JWT authentication, role-based permissions and ' +
      'PostgreSQL persistence. Documented with OpenAPI and covered by integration tests.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Testing'],
    year: '2025',
    featured: true,
    repo: 'https://github.com/GHOST-CLOUD0',
    demo: '',
  },
  {
    id: 'weather-dashboard',
    title: 'Weather Dashboard',
    description:
      'Location-aware weather client that caches responses, degrades gracefully offline and ' +
      'renders forecast trends with a hand-rolled SVG chart.',
    tags: ['React', 'JavaScript', 'API'],
    year: '2024',
    featured: false,
    repo: 'https://github.com/GHOST-CLOUD0',
    demo: '',
  },
  {
    id: 'markdown-notes',
    title: 'Markdown Notes',
    description:
      'Offline-first note taking app with live markdown preview, full-text search and ' +
      'local storage sync — built to explore React state patterns without a store library.',
    tags: ['React', 'JavaScript', 'CSS'],
    year: '2024',
    featured: false,
    repo: 'https://github.com/GHOST-CLOUD0',
    demo: '',
  },
];

export const experience = [
  {
    role: 'Full-Stack Developer',
    org: 'Freelance',
    period: '2024 — Present',
    location: 'Nairobi, Kenya',
    points: [
      'Design and ship React front-ends and Node.js services for small businesses and startups.',
      'Cut median page load on a client dashboard from 4.2s to under 1.5s through code splitting and asset budgets.',
      'Work directly with stakeholders to scope features, estimate effort and deliver in two-week increments.',
    ],
  },
  {
    role: 'Software Engineering Student',
    org: 'Moringa School',
    period: '2023 — 2024',
    location: 'Nairobi, Kenya',
    points: [
      'Completed an intensive full-stack curriculum covering JavaScript, React, Python and relational databases.',
      'Built and presented capstone projects under weekly code review from senior engineers.',
    ],
  },
];

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];
