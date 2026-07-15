import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { DesignGallery } from '@/components/DesignGallery'

export const metadata: Metadata = {
  title: 'Design — Andrew Asson Malisa',
  description:
    'Visual and brand design work: brand identity, event posters, certificates, and social media designs.',
}

export default function DesignPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visual design"
        title="Design portfolio"
        description="A supporting craft to my engineering work. Brand identity, posters, certificates, and social graphics created for university organizations and departments."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <DesignGallery />
      </section>
    </>
  )
}
