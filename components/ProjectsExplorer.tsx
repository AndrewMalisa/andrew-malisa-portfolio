'use client'

import { useMemo, useState } from 'react'
import { cn } from '@/lib/utils'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'

export function ProjectsExplorer() {
  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(projects.map((p) => p.category)))]
  }, [])
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () =>
      active === 'All'
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  )

  return (
    <div className="flex flex-col gap-8">
      <Reveal className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-3.5 py-1.5 text-xs transition-colors',
              active === cat
                ? 'border-foreground bg-foreground text-background'
                : 'border-border text-muted-foreground hover:text-foreground',
            )}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={i}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
