export const siteConfig = {
  name: 'Andrew Asson Malisa',
  role: 'Full-Stack Developer | Product Designer | UI/UX Designer',
  tagline:
  'I build intelligent digital products through full-stack development, AI, and user-centered design.',

heroDescription:
  'I combine software engineering, AI capabilities, and product design thinking to create solutions that are functional, intuitive, and built around real user needs.',

  location: 'Dar es Salaam, Tanzania',
  email: 'andrewasson95@gmail.com',
  phone: '+255 767 561 957',
  // Update these links with your live URLs.
  links: {
    github: 'https://github.com/AndrewMalisa',
    linkedin: 'https://linkedin.com/in/andrew-malisa-53174a270',
    cv: '/cv/Andrew Asson Malisa_CV (Updated).pdf',
  },
  stats: [
    { value: '5+', label: 'Products shipped' },
    { value: '4', label: 'AI & full-stack projects' },
    { value: '7+', label: 'Organizations designed for' },
    { value: '3+', label: 'Years building' },
  ],
} as const

export type NavItem = { label: string; href: string }

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Design', href: '/design' },
  { label: 'Contact', href: '/contact' },
]
