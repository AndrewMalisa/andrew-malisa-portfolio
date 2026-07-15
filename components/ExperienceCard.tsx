import { Reveal } from '@/components/Reveal'
import type { ExperienceItem } from '@/data/experience'

interface ExperienceCardProps {
  item: ExperienceItem
  index: number
}

export function ExperienceCard({ item, index }: ExperienceCardProps) {
  return (
    <Reveal
      as="li"
      delay={index}
      className="relative grid gap-4 border-b border-border py-8 last:border-0 md:grid-cols-[180px_1fr]"
    >
      <div className="flex flex-col gap-1">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">
          {item.period}
        </span>
      </div>
      <div>
        <h3 className="text-base font-semibold tracking-tight">
          {item.organization}
        </h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{item.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {item.description}
        </p>
        <ul className="mt-4 space-y-2">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" aria-hidden />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}
