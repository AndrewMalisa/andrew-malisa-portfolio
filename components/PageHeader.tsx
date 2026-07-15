import { Reveal } from '@/components/Reveal'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <Reveal className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-px w-6 bg-border" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
