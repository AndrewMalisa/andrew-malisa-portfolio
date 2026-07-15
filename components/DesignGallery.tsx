import fs from 'fs'
import path from 'path'
import { ImageIcon } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { designCategories, designClients } from '@/data/design'

function getDesignImages(categorySlug: string, count: number) {
  const categoryDir = path.join(process.cwd(), 'public', 'design', categorySlug)

  if (!fs.existsSync(categoryDir)) {
    return Array(count).fill('')
  }

  const files = fs
    .readdirSync(categoryDir)
    .filter((file) => /\.(png|jpe?g|svg|webp)$/i.test(file))
    .slice(0, count)
    .map((file) => `/design/${categorySlug}/${file}`)

  return [...files, ...Array(Math.max(0, count - files.length)).fill('')]
}

export function DesignGallery() {
  return (
    <div className="flex flex-col gap-16">
      {designCategories.map((category) => {
        const images = getDesignImages(category.slug, category.count)

        return (
          <section key={category.slug}>
            <Reveal className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold tracking-tight">
                {category.title}
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>
            </Reveal>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: category.count }).map((_, i) => {
                const src = images[i]

                return (
                  <Reveal key={i} delay={i}>
                    <div className="overflow-hidden rounded-lg border border-border bg-secondary/40">
                      {src ? (
                        <img
                          src={src}
                          alt={`${category.title} design ${i + 1}`}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex aspect-[4/3] flex-col items-center justify-center gap-1.5 rounded-lg border border-border bg-secondary/40 text-muted-foreground">
                          <ImageIcon className="h-5 w-5" />
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
                            {category.title}
                          </span>
                        </div>
                      )}
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </section>
        )
      })}

      <section className="rounded-xl border border-border bg-secondary/30 p-8">
        <Reveal>
          <h2 className="text-lg font-semibold tracking-tight">
            Trusted by campus organizations & departments
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Delivered posters, certificates, social graphics, and branding —
            applying typography, color systems, and layout composition to build
            consistent visual identities.
          </p>
        </Reveal>
        <div className="mt-6 grid gap-8 sm:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Organizations
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {designClients.organizations.map((org) => (
                <li
                  key={org}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground/80"
                >
                  {org}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={1}>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Departments
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {designClients.departments.map((dept) => (
                <li
                  key={dept}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm text-foreground/80"
                >
                  {dept}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
