import Image from 'next/image'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { navItems, siteConfig } from '@/data/site'

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="relative block h-7 w-7 shrink-0 overflow-hidden rounded-full border border-border bg-secondary">
                <Image
                  src="/profile-photo.jpg"
                  alt="Andrew Asson Malisa"
                  fill
                  sizes="28px"
                  className="object-cover"
                />
              </span>
              <span className="text-sm font-medium">{siteConfig.name}</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Navigate
              </p>
              <ul className="mt-4 space-y-2.5">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GithubIcon className="h-4 w-4" /> GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <LinkedinIcon className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
          </p>
          <p>{siteConfig.location}</p>
        </div>
      </div>
    </footer>
  )
}
