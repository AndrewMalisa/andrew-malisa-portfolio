import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { StatsBlock } from '@/components/StatsBlock'
import { SectionHeading } from '@/components/SectionHeading'
import { ProjectCard } from '@/components/ProjectCard'
import { TechStack } from '@/components/TechStack'
import { ContactSection } from '@/components/ContactSection'
import { Reveal } from '@/components/Reveal'
import { featuredProjects } from '@/data/projects'
import { featuredStack } from '@/data/skills'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Track record */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Track record"
            title="Turning ideas into working software"
            description="A snapshot of the products, systems, and design work I've shipped while studying and freelancing."
          />
          <StatsBlock />
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Featured projects"
              description="Case studies spanning full-stack platforms, AI applications, and freelance builds."
            />
            <Reveal delay={1}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                View all projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="Capabilities"
            title="Building innovative digital products"
            description="I approach products from both engineering and user-experience perspectives — from database design to interface polish."
          />
          <Reveal className="flex flex-wrap gap-2">
            {featuredStack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs text-foreground/80"
              >
                {s}
              </span>
            ))}
          </Reveal>
          <TechStack />
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="Contact" title="Get in touch" />
            <ContactSection />
          </div>
        </div>
      </section>
    </>
  )
}
