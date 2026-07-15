export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Development',
    description: 'Frontend and backend engineering across modern stacks.',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'PHP',
      'Laravel',
      'Python',
      'FastAPI',
    ],
  },
  {
    title: 'Database',
    description: 'Relational data modeling and query design.',
    skills: ['MySQL', 'PostgreSQL', 'MariaDB'],
  },
  {
    title: 'AI Development',
    description: 'Applied LLM systems and retrieval pipelines.',
    skills: [
      'LLM Applications',
      'RAG Architecture',
      'Ollama',
      'Llama Models',
      'AI Integration',
    ],
  },
  {
    title: 'Design',
    description: 'Product design and visual identity — a supporting advantage.',
    skills: [
      'Figma',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Adobe Lightroom',
    ],
  },
  {
    title: 'Tools',
    description: 'Workflow, collaboration, and delivery tooling.',
    skills: ['Git', 'GitHub', 'Linux', 'Postman'],
  },
]

// Featured stack shown as chips on the homepage.
export const featuredStack: string[] = [
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Python',
  'FastAPI',
  'Laravel',
  'PostgreSQL',
  'Ollama',
  'RAG',
]
