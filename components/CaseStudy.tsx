import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Network } from 'lucide-react'
import type { Project } from '@/data/projects'
import { Reveal } from '@/components/Reveal'
import { ScreenshotPlaceholder } from '@/components/ScreenshotPlaceholder'

interface CaseStudyProps {
  project: Project
}

export function CaseStudy({ project }: CaseStudyProps) {
  const archIndex = project.screenshots.findIndex((s) =>
    /arch|architecture|rag|diagram/i.test(s.caption) ||
    !!s.src && (s.src.includes('architecture') || s.src.includes('/3'))
  )
  const arch = archIndex !== -1 ? project.screenshots[archIndex] : undefined
  return (
    <article className="mx-auto max-w-4xl px-5 py-16">
      <Reveal>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          All projects
        </Link>
      </Reveal>

      <Reveal delay={1} className="mt-8">
        <span className="inline-block rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          {project.category}
        </span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      </Reveal>

      {/* Meta */}
      <Reveal delay={2} className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        <div className="bg-background p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Role
          </p>
          <p className="mt-1.5 text-sm font-medium">{project.role}</p>
        </div>
        <div className="bg-background p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Year
          </p>
          <p className="mt-1.5 text-sm font-medium">{project.year}</p>
        </div>
        <div className="bg-background p-5">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Category
          </p>
          <p className="mt-1.5 text-sm font-medium">{project.category}</p>
        </div>
      </Reveal>

      {/* Links */}
      {project.links.length > 0 && (
        <Reveal delay={3} className="mt-6 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('#') ? undefined : '_blank'}
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          ))}
        </Reveal>
      )}

      {/* Cover screenshot */}
      <Reveal delay={2} className="mt-10">
        <ScreenshotPlaceholder
          caption={project.screenshots[0]?.caption ?? project.title}
          src={project.screenshots[0]?.src}
          aspect="wide"
        />
      </Reveal>

      {/* Problem & Solution */}
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            The problem
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {project.problem}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            The solution
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-foreground/90">
            {project.solution}
          </p>
        </Reveal>
      </div>

      {/* Tech stack */}
      <Reveal className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Technology stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground/80"
            >
              {t}
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Architecture diagram */}
      {project.hasArchitecture && (
        <Reveal className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Architecture
          </h2>
          {arch?.src ? (
            <div className="mt-4">
              <ScreenshotPlaceholder caption={arch.caption} src={arch.src} aspect="wide" />
            </div>
          ) : (
            <div className="mt-4 flex aspect-[16/7] w-full flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-secondary/30 text-muted-foreground">
              <Network className="h-6 w-6" />
              <span className="text-xs">RAG pipeline architecture diagram</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
                Diagram placeholder
              </span>
            </div>
          )}
        </Reveal>
      )}

      {/* Screenshot gallery */}
      <Reveal className="mt-12">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Screenshots
        </h2>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          {project.screenshots
            .filter((_, i) => i !== archIndex)
            .map((shot, i) => (
              <ScreenshotPlaceholder
                key={i}
                caption={shot.caption}
                src={shot.src}
                aspect="video"
              />
            ))}
        </div>
      </Reveal>
    </article>
  )
}
