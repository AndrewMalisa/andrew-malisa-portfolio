import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { Reveal } from '@/components/Reveal'
import { siteConfig } from '@/data/site'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: siteConfig.location,
    href: undefined,
  },
]

const socialItems = [
  { icon: GithubIcon, label: 'GitHub', href: siteConfig.links.github },
  { icon: LinkedinIcon, label: 'LinkedIn', href: siteConfig.links.linkedin },
]

export function ContactSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Reveal className="flex flex-col justify-between gap-8 rounded-xl border border-border bg-secondary/30 p-8">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-balance sm:text-2xl">
            Let&apos;s build something worth shipping.
          </h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Open to freelance projects, internships, and collaborations across
            full-stack development, AI applications, and product design.
          </p>
        </div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex w-fit items-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>

      <Reveal delay={1} className="flex flex-col gap-3">
        {contactItems.map((item) => {
          const Icon = item.icon
          const content = (
            <>
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/40">
                <Icon className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </span>
                <span className="text-sm">{item.value}</span>
              </span>
            </>
          )
          return item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-secondary/40"
            >
              {content}
            </a>
          ) : (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-lg border border-border p-4"
            >
              {content}
            </div>
          )
        })}
        <div className="flex gap-3">
          {socialItems.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-border p-4 text-sm transition-colors hover:bg-secondary/40"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </a>
            )
          })}
        </div>
      </Reveal>
    </div>
  )
}
