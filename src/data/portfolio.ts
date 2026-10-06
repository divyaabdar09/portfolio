import {
  Bell,
  Braces,
  Code2,
  Database,
  Globe2,
  LayoutDashboard,
  LockKeyhole,
  ServerCog,
  Smartphone,
  Workflow,
} from "lucide-react";

const projectImage = (name: string) => `${import.meta.env.BASE_URL}projects/${name}`;
const projectRoute = (slug: string) => `#project-${slug}`;

export const profile = {
  name: "Divya Abdar",
  initials: "DA",
  role: "Software Developer | Full-Stack Developer",
  location: "Pune, Maharashtra",
  email: "divyaabdar98@gmail.com",
  linkedin: "https://www.linkedin.com/in/divya-abdar-ab896a249",
  github: "https://github.com",
  hireMailto:
    "mailto:divyaabdar98@gmail.com?subject=Software%20Development%20Opportunity&body=Hi%20Divya%2C%0A%0AI%20would%20like%20to%20connect%20with%20you%20regarding%20a%20software%20development%20opportunity.%0A%0AThanks%2C",
  summary:
    "I build web, mobile, and backend applications across frontend interfaces, Laravel APIs, authentication, databases, admin systems, Firebase workflows, and automation.",
};

export const stats = [
  { value: "Full-stack", label: "Web, mobile, APIs" },
  { value: "8.64", label: "CS engineering CGPA" },
  { value: "2025", label: "BE Computer Science" },
  { value: "Pune", label: "Open to opportunities" },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "Complete applications that connect frontend interfaces, backend services, APIs, databases, and admin workflows.",
  },
  {
    icon: ServerCog,
    title: "Backend & APIs",
    desc: "Laravel and PHP backends, REST APIs, authentication, validation, business logic, and database operations.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Flutter and React Native features with API integration, Firebase authentication, dynamic screens, and notifications.",
  },
  {
    icon: Database,
    title: "Data & CMS",
    desc: "MySQL and PostgreSQL structures, CMS modules, dashboards, content management, query work, and admin panels.",
  },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "PHP", "Python", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design", "UI/UX"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "REST APIs", "Flask", "Python", "MVC"],
  },
  {
    title: "Mobile",
    skills: ["Flutter", "React Native", "Firebase", "FCM", "Push Notifications"],
  },
  {
    title: "Database",
    skills: ["MySQL", "PostgreSQL", "CRUD", "Relationships", "Query Optimization"],
  },
  {
    title: "Security",
    skills: ["JWT", "OTP Auth", "Firebase Auth", "RBAC", "API Validation"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "XAMPP", "npm", "Composer"],
  },
  {
    title: "Learning",
    skills: ["Node.js", "Next.js", "NestJS", "DevOps", "System Design", "Cloud"],
  },
];

export const experienceHighlights = [
  "Developed and maintained web applications using Laravel, PHP, JavaScript, React, and REST APIs.",
  "Integrated frontend and mobile applications with Laravel backend services.",
  "Implemented authentication, role-based access control, API validation, and error handling.",
  "Built administrative dashboards, CMS functionality, dynamic content systems, and Firebase notification workflows.",
];

export const projects = [
  {
    title: "MedMinder",
    slug: "medminder",
    route: projectRoute("medminder"),
    category: "Healthcare Management Platform",
    desc: "A healthcare system focused on medication adherence, caregiver communication, QR tracking, IoT workflows, JWT security, and PostgreSQL data.",
    tech: ["PHP", "PostgreSQL", "JWT", "REST APIs", "IoT", "QR"],
    image: projectImage("medminder.png"),
    highlights: ["Backend architecture", "Secure APIs", "Database integration", "QR workflows"],
  },
  {
    title: "JISO Organization Platform",
    slug: "jiso-organization-platform",
    route: projectRoute("jiso-organization-platform"),
    category: "Community Management & Digital Ecosystem",
    desc: "A large-scale Jain community platform bringing services, events, galleries, members, support teams, and CMS-managed pages into one ecosystem.",
    tech: ["React", "JavaScript", "Laravel", "PHP", "MySQL", "REST APIs", "Flutter"],
    image: projectImage("jiso-organization.png"),
    highlights: ["Dynamic frontend modules", "Laravel APIs", "Admin CMS", "Role-based access"],
  },
  {
    title: "Kent Logistics",
    slug: "kent-logistics",
    route: projectRoute("kent-logistics"),
    category: "Logistics App & Admin Portal",
    desc: "A logistics management system with Flutter mobile features, Laravel APIs, Firebase OTP authentication, admin approval, and notification handling.",
    tech: ["Flutter", "Laravel", "PHP", "MySQL", "REST APIs", "Firebase"],
    image: projectImage("kent-logistics.png"),
    highlights: ["Orders and shipments", "OTP auth", "FCM tokens", "Admin portal"],
  },
  {
    title: "TailorMate - Tailor Management System",
    slug: "tailormate-tailor-management-system",
    route: projectRoute("tailormate-tailor-management-system"),
    category: "Tailor Workflow Management",
    desc: "A complete tailor management solution I developed as a project, not as a deployed product. It includes a Flutter mobile app for tailors, a React admin website, a Python Flask REST API backend, and Firebase integration to help manage customers, measurements, orders, and tailor-related records in one place while reducing manual record keeping.",
    tech: ["Flutter", "React", "Python", "Flask", "REST APIs", "Firebase"],
    image:
      "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=1200",
    highlights: [
      "Flutter mobile app",
      "React admin website",
      "Flask API development",
      "Firebase integration",
      "API integration",
      "Data and workflow management",
    ],
  },
  {
    title: "Scan Rewards",
    slug: "scan-rewards",
    route: projectRoute("scan-rewards"),
    category: "Digital Rewards Platform",
    desc: "A customer engagement and reward platform with backend modules, product tracking, REST APIs, MySQL workflows, and responsive operations.",
    tech: ["PHP", "MySQL", "REST APIs", "JavaScript"],
    image: projectImage("scan-rewards.png"),
    highlights: ["Reward management", "Product tracking", "Backend modules", "Data workflows"],
  },
];

export const focusAreas = [
  { icon: LockKeyhole, label: "Authentication", detail: "OTP, JWT, Firebase Auth, RBAC" },
  { icon: Bell, label: "Notifications", detail: "FCM tokens, push workflows, click handling" },
  { icon: LayoutDashboard, label: "Admin Panels", detail: "Dashboards, CMS modules, content operations" },
  { icon: Workflow, label: "Automation", detail: "API workflows and repetitive process reduction" },
  { icon: Braces, label: "APIs", detail: "CRUD, user, admin, notification, CMS APIs" },
  { icon: Globe2, label: "Interfaces", detail: "Responsive pages, forms, mobile screens" },
];

export const approach = ["Understand", "Design", "Develop", "Test", "Debug", "Improve"];
