import { Asterisk } from 'lucide-react'

const services = [
  'Full-Stack Development',
  'AI-Powered Application Development',
  'Web Development',
  'UI/UX & Product Design',
]

function ServiceGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {services.map((service) => (
        <div key={service} className="flex shrink-0 items-center gap-6 sm:gap-8">
          <span className="text-sm font-medium text-foreground/80">
            {service}
          </span>
          <Asterisk className="h-4 w-4 text-muted-foreground" aria-hidden />
        </div>
      ))}
    </div>
  )
}

export function Marquee() {
  return (
    <div className="overflow-hidden border-b border-border bg-secondary/30 py-4">
      <div className="marquee-track">
        <ServiceGroup />
        <ServiceGroup hidden />
      </div>
    </div>
  )
}
