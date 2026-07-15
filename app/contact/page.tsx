import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { ContactSection } from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Contact — Andrew Asson Malisa',
  description:
    'Get in touch with Andrew Asson Malisa for freelance projects, internships, and collaborations.',
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's work together"
        description="Have a product idea, a project, or an opportunity? I'd love to hear about it."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <ContactSection />
      </section>
    </>
  )
}
