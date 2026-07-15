export interface ExperienceItem {
  role: string
  organization: string
  period: string
  description: string
  highlights: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Full-Stack Developer (Final Year Project)',
    organization: 'Kilindi District License Management System (KDILMS)',
    period: 'Jan 2026 – Jul 2026',
    description:
      'Web-based digital licensing platform for Kilindi District Council, centralizing license registration, debt tracking, and reporting to replace manual processes.',
    highlights: [
      'Built core modules for user management, licensing, debt monitoring, SMS notifications, reporting dashboards, and audit logs.',
      'Applied role-based access control and validation rules to secure data by user role.',
      'Migrated and integrated legacy licensing data from the TAUSI system and tested against real datasets.',
    ],
  },
  {
    role: 'Full-Stack Developer (Personal Project)',
    organization: 'Student Support LLM Platform',
    period: 'Jul 2026',
    description:
      'AI-powered student support assistant serving a locally hosted Llama 1B model for natural-language academic guidance.',
    highlights: [
      'Designed a Retrieval-Augmented Generation (RAG) pipeline grounding responses in a custom knowledge base.',
      'Developed the backend API layer and an interactive Streamlit interface for real-time support.',
      'Optimized for private, cost-effective local inference without external AI APIs.',
    ],
  },
  {
    role: 'Freelance Frontend Developer & UI/UX Designer',
    organization: 'RJAY Barber Website',
    period: 'May 2026',
    description:
      'Responsive React interfaces with reusable components to improve customer interaction and online brand presence.',
    highlights: [
      'Translated UI/UX concepts into functional layouts with attention to visual hierarchy.',
      'Ensured cross-device usability across the experience.',
    ],
  },
  {
    role: 'Freelance UI/UX Designer',
    organization: 'FinWise Financial Management App',
    period: 'Feb 2026',
    description:
      'User flows, wireframes, and high-fidelity interfaces in Figma for a personal finance management application.',
    highlights: [
      'Built a reusable design system and financial dashboards to present complex data clearly.',
      'Applied UX research and accessibility best practices.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    organization: 'Lenga Business Directory Platform',
    period: 'May 2025',
    description:
      'Responsive business directory platform improving online visibility for local businesses.',
    highlights: [
      'Designed structured, search-friendly listing pages and reusable UI components.',
      'Collaborated directly with the client through iterative releases.',
    ],
  },
]

export interface EducationItem {
  institution: string
  qualification: string
  period: string
}

export const education: EducationItem[] = [
  {
    institution: 'The University of Dar es Salaam',
    qualification: 'BSc in Business Information Technology',
    period: 'Oct 2023 – Present',
  },
  {
    institution: 'Loyola High School',
    qualification: 'Advanced Certificate of Secondary Education (ACSE) — PCM, Div I',
    period: 'Jul 2021 – May 2023',
  },
  {
    institution: 'Wenda High School',
    qualification: 'Certificate of Secondary Education (CSEE) — Div I',
    period: 'Jan 2017 – Nov 2020',
  },
]
