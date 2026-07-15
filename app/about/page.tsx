import type { Metadata } from 'next'
import { GraduationCap, Quote } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { SectionHeading } from '@/components/SectionHeading'
import { ExperienceCard } from '@/components/ExperienceCard'
import { Reveal } from '@/components/Reveal'
import { education, experience } from '@/data/experience'

export const metadata: Metadata = {
  title: 'About — Andrew Asson Malisa',
  description:
    'Business Information Technology student at the University of Dar es Salaam building digital products across engineering, AI, and design.',
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineer and designer building real products"
        description="I'm a Bachelor of Science in Business Information Technology student at the University of Dar es Salaam, focused on building digital products that combine software engineering, artificial intelligence, and user-centered design."
      />

      {/* Philosophy */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="flex flex-col gap-5">
            <p className="text-sm leading-relaxed text-foreground/90 sm:text-base">
              My main focus is full-stack development and UI/UX design, 
              building digital products that solve real-world problems. 
              I develop complete software solutions, from business management 
              platforms and information systems to user-focused applications 
              that improve how people interact with technology.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Alongside engineering, I bring a strong foundation in product 
              design and visual communication. This design perspective helps 
              me create solutions that are not only technically functional, 
              but also intuitive, accessible, and thoughtfully crafted from end to end.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <figure className="flex h-full flex-col justify-between gap-6 rounded-xl border border-border bg-secondary/30 p-8">
              <Quote className="h-6 w-6 text-muted-foreground" />
              <blockquote className="text-lg font-medium leading-relaxed tracking-tight text-balance">
                &ldquo;I combine full-stack development with UI/UX design thinking 
                to build digital products that are both technically sound and user-centered.&rdquo;
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="border-t border-border bg-secondary/20">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built"
            description="Selected professional and freelance work across development, AI, and design."
          />
          <ul className="mt-8">
            {experience.map((item, i) => (
              <ExperienceCard key={item.organization} item={item} index={i} />
            ))}
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading eyebrow="Education" title="Academic background" />
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
          {education.map((edu, i) => (
            <Reveal key={edu.institution} delay={i} className="bg-background p-6">
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
                {edu.period}
              </p>
              <h3 className="mt-2 text-sm font-semibold tracking-tight">
                {edu.institution}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {edu.qualification}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
