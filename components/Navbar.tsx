'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navItems, siteConfig } from '@/data/site'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <span className="relative block h-7 w-7 shrink-0 overflow-hidden rounded-full border border-border bg-secondary">
            <Image
              src="/profile-photo.jpg"
              alt="Andrew Asson Malisa"
              fill
              sizes="28px"
              className="object-cover"
            />
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm transition-colors hover:text-foreground',
                  isActive(item.href)
                    ? 'text-foreground'
                    : 'text-muted-foreground',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            href="/contact"
            className="hidden rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            Hire me
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-md px-3 py-2.5 text-sm transition-colors',
                    isActive(item.href)
                      ? 'bg-secondary text-foreground'
                      : 'text-muted-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-foreground px-3 py-2.5 text-center text-sm font-medium text-background"
              >
                Hire me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
