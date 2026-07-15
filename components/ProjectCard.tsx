import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/data/projects'
import { ScreenshotPlaceholder } from '@/components/ScreenshotPlaceholder'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background transition-colors hover:border-foreground/30"
    >
      <div className="relative">
        <ScreenshotPlaceholder
          caption={project.screenshots[0]?.caption ?? project.title}
          src={project.screenshots[0]?.src}
          aspect="video"
          className="rounded-none border-0 border-b border-border"
        />
        <span className="absolute left-3 top-3 rounded-md border border-border bg-background/90 px-2 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold leading-snug tracking-tight">
            {project.title}
          </h3>
          <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
