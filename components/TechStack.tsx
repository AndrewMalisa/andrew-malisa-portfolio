import { Reveal } from '@/components/Reveal'
import { skillCategories } from '@/data/skills'

export function TechStack() {
  return (
    <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
      {skillCategories.map((category, i) => (
        <Reveal
          key={category.title}
          delay={i}
          className="flex flex-col gap-4 bg-background p-6"
        >
          <div>
            <h3 className="text-sm font-semibold tracking-tight">
              {category.title}
            </h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>
          <ul className="mt-auto flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/80"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  )
}
