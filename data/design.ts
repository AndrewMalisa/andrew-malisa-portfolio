export interface DesignCategory {
  slug: string
  title: string
  description: string
  // Number of placeholder tiles to render until real images are added.
  count: number
}

export const designCategories: DesignCategory[] = [
  {
    slug: 'brand-identity',
    title: 'Brand Identity',
    description: 'Visual identities built on typography, color systems, and layout composition.',
    count: 2,
  },
  {
    slug: 'event-posters',
    title: 'Event Posters',
    description: 'Marketing collateral supporting campus events and initiatives.',
    count: 6,
  },
  {
    slug: 'certificates',
    title: 'Certificates',
    description: 'Recognition and participation certificates for organizations.',
    count: 3,
  },
  {
    slug: 'social-media-designs',
    title: 'Social Media Designs',
    description: 'Digital communications improving audience awareness and participation.',
    count: 6,
  },
]

export const designClients = {
  organizations: ['DUEA', 'DUSA', 'UDIAA', 'DUFA', 'DARUSO', 'IFMSO'],
  departments: [
    'College of Information and Communication Technology',
    'School of Economics',
    'School of Education',
    'IFM',
    'UDSM',
  ],
}
