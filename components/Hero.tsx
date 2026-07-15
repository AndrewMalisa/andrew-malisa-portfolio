'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { siteConfig } from '@/data/site'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={item}>
            <div className="relative h-20 w-20 overflow-hidden rounded-full border border-border bg-secondary/60 ring-4 ring-background">
              <Image
                src="/profile-photo.jpg"
                alt="Profile photo placeholder for Andrew Asson Malisa"
                fill
                priority
                sizes="80px"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
            </span>
            Available for freelance & internships
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-pretty text-sm font-medium text-muted-foreground sm:text-base"
          >
            Full-Stack Developer{' '}
            <span className="text-border">/</span> Product Designer{' '}
            <span className="text-border">/</span> UI/UX Designer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {siteConfig.heroDescription}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.links.cv}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary sm:w-auto"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
