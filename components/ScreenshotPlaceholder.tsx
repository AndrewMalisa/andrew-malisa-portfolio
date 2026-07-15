import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ScreenshotPlaceholderProps {
  caption: string
  src?: string
  className?: string
  aspect?: 'video' | 'square' | 'wide'
}

const aspectMap = {
  video: 'aspect-video',
  square: 'aspect-square',
  wide: 'aspect-[16/7]',
}

export function ScreenshotPlaceholder({
  caption,
  src,
  className,
  aspect = 'video',
}: ScreenshotPlaceholderProps) {
  return (
    <figure
      className={cn(
        'group overflow-hidden rounded-lg border border-border bg-secondary/40',
        className,
      )}
    >
      <div className={cn('relative w-full', aspectMap[aspect])}>
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src || '/placeholder.svg'}
            alt={caption}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground">
            <ImageIcon className="h-5 w-5" />
            <span className="px-4 text-center text-xs">{caption}</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/60">
              Screenshot placeholder
            </span>
          </div>
        )}
      </div>
    </figure>
  )
}
