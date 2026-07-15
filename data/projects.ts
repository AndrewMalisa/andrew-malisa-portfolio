export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectScreenshot {
  // Optional image path in /public/projects. When omitted a styled placeholder is shown.
  src?: string
  caption: string
}

export interface Project {
  slug: string
  title: string
  category: string
  year: string
  role: string
  summary: string
  problem: string
  solution: string
  tech: string[]
  screenshots: ProjectScreenshot[]
  links: ProjectLink[]
  featured?: boolean
  hasArchitecture?: boolean
}

export const projects: Project[] = [
  {
    slug: 'kdilms',
    title: 'Kilindi District License Management System',
    category: 'Full-Stack Web Application',
    year: '2026',
    role: 'Full-Stack Developer',
    summary:
      'Digital licensing management system that improves business license registration, monitoring, debt tracking, reporting, and administration for a district council.',
    problem:
      'Kilindi District Council relied on manual, paper-based processes for business license registration and debt tracking. This made monitoring, reporting, and auditing slow, error-prone, and difficult to scale across departments.',
    solution:
      'A centralized Laravel platform covering the full licensing lifecycle — user management, licensing, debt monitoring, SMS notifications, reporting dashboards, and audit logs — with role-based access control and validation. Legacy data from the TAUSI system was migrated and verified against real datasets.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    screenshots: [
      { src: '/projects/kdilms/overview1.png', caption: 'Licensing dashboard overview' },
      { src: '/projects/kdilms/overview2.png', caption: 'Debt tracking & monitoring module' },
      { src: '/projects/kdilms/overview3.png', caption: 'SMS module' },
      { src: '/projects/kdilms/overview4.png', caption: 'Reporting and audit logs' },
    ],
    links: [
      { label: 'Live System', href: 'https://kdilms-kdilms-kdilms.monkeys.cloud/login' },
      { label: 'GitHub', href: '#' },
    ],
    featured: true,
  },
  {
    slug: 'student-support-llm',
    title: 'Student Support LLM Platform',
    category: 'AI Application',
    year: '2026',
    role: 'Full-Stack Developer (AI Integration)',
    summary:
      'AI-powered student assistant that provides academic support through conversational AI, grounded in a custom knowledge base using Retrieval-Augmented Generation.',
    problem:
      'Students needed fast, reliable academic guidance, but general-purpose language models produced generic or inaccurate answers and depended on costly external APIs with privacy concerns.',
    solution:
      'A locally hosted assistant serving a Llama 1B model through Ollama. A Retrieval-Augmented Generation (RAG) pipeline retrieves relevant information from a knowledge base before generating responses, improving accuracy and relevance. A FastAPI backend and Streamlit interface deliver real-time conversational support with private, cost-effective local inference.',
    tech: ['Python', 'FastAPI', 'Streamlit', 'Ollama', 'Llama 1B', 'RAG Architecture'],
    screenshots: [
      { src: '/projects/student-support-llm/1.png', caption: 'Conversational assistant interface' },
      { src: '/projects/student-support-llm/2.png', caption: 'Knowledge base retrieval view' },
      { src: '/projects/student-support-llm/architecture.png', caption: 'RAG architecture diagram' },
    ],
    links: [
      { label: 'Live Demo', href: '#' },
      { label: 'GitHub', href: '#' },
    ],
    featured: true,
    hasArchitecture: true,
  },
  {
    slug: 'lenga-directory',
    title: 'Lenga Business Directory Platform',
    category: 'Freelance Web Development',
    year: '2025',
    role: 'Freelance Web Developer',
    summary:
      'Business directory platform connecting users with local businesses and service providers.',
    problem:
      'Local businesses lacked online visibility, and users had no central, searchable place to discover services in their area.',
    solution:
      'A responsive directory with structured, search-friendly listing pages and reusable UI components. Built iteratively in direct collaboration with the client to improve discoverability and online presence.',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP'],
    screenshots: [
      { src: '/projects/lenga/1.png', caption: 'Business listings grid' },
      { src: '/projects/lenga/3.png', caption: 'Listing detail page' },
      { src: '/projects/lenga/3.png', caption: 'Search and filter functionality' },
      { src: '/projects/lenga/4.png', caption: 'Contact information section' },
    ],
    links: [{ label: 'Live Site', href: '#' }],
    featured: true,
  },
  {
    slug: 'rjay-barber',
    title: 'RJAY Barber Website',
    category: 'Frontend Development + UI/UX',
    year: '2026',
    role: 'Frontend Developer & UI/UX Designer',
    summary:
      'Modern barber website developed using React to improve online customer experience and brand presence.',
    problem:
      'The barber brand had no cohesive online presence, making it hard for customers to explore services and engage with the business.',
    solution:
      'A responsive React site with reusable components, translating UI/UX concepts into functional layouts with strong visual hierarchy and cross-device usability.',
    tech: ['React', 'Tailwind CSS'],
    screenshots: [
      { src: '/projects/rjay-barber/1.png', caption: 'Landing experience' },
      { src: '/projects/rjay-barber/2.png', caption: 'Services section' },
      { src: '/projects/rjay-barber/3.png', caption: 'Contact form' },
    ],
    links: [{ label: 'Live Website', href: 'https://rjaybarber.shop' }],
  },
  {
    slug: 'finwise',
    title: 'FinWise Financial Management App',
    category: 'UI/UX Product Design',
    year: '2026',
    role: 'UI/UX Designer',
    summary:
      'Financial management application concept designed to help users understand and manage their finances.',
    problem:
      'Personal finance data is often overwhelming and poorly visualized, leaving users unable to make confident decisions.',
    solution:
      'User flows, wireframes, and high-fidelity interfaces in Figma, built on a reusable design system with financial dashboards that present complex data clearly — applying UX research and accessibility best practices.',
    tech: ['Figma'],
    screenshots: [
      { src: '/projects/finwise/1.png', caption: 'Dashboard concept' },
      { src: '/projects/finwise/2.png', caption: 'Design system components' },
      { src: '/projects/finwise/3.png', caption: 'User flow and wireframes' },
    ],
    links: [{ label: 'Figma Prototype', href: 'https://www.figma.com/proto/TWFLlfa6evGTlOwml6buma/Finwise-App?node-id=83-1186&t=MwGlsiwQz6uaxCZV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&fuid=1443827525960694326' }],
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const featuredProjects = projects.filter((p) => p.featured)
