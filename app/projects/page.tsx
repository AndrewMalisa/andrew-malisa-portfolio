import type { Metadata } from 'next'
import { PageHeader } from '@/components/PageHeader'
import { ProjectsExplorer } from '@/components/ProjectsExplorer'

export const metadata: Metadata = {
  title: 'Projects — Andrew Asson Malisa',
  description:
    'Case studies across full-stack platforms and freelance product builds.',
}

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Projects & case studies"
        description="Real-world software products — from a district licensing platform to a locally-hosted AI student assistant. Each project is documented as a short case study covering the problem, solution, and stack."
      />
      <section className="mx-auto max-w-6xl px-5 py-16">
        <ProjectsExplorer />
      </section>
    </>
  )
}
