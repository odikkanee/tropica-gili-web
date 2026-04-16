import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import { useEffect } from 'react'

export type GalleryImage = {
  src: string
  alt: string
}

type GalleryLightboxProps = {
  images: GalleryImage[]
  activeIndex: number | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowLeft') {
        onPrev()
      }

      if (event.key === 'ArrowRight') {
        onNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, onClose, onNext, onPrev])

  if (activeIndex === null) {
    return null
  }

  const image = images[activeIndex]

  return (
    <div
      className="fixed inset-0 z-101 flex items-center justify-center bg-sand-950/85 p-4 backdrop-blur-sm"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Close gallery"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <figure className="mx-auto flex w-full max-w-5xl flex-col gap-4">
        <div className="overflow-hidden rounded-4xl border border-white/10 bg-black shadow-2xl">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[80vh] w-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        <figcaption className="text-center text-sm font-medium text-white/80">
          {image.alt}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}
