import { Reveal } from '@/components/Reveal'
import { siteConfig } from '@/data/site'

export function StatsBlock() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
      {siteConfig.stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i} className="bg-background p-6">
          <p className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {stat.value}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            {stat.label}
          </p>
        </Reveal>
      ))}
    </div>
  )
}
