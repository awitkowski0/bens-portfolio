import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { ProjectImage } from '#/data/projects'

export function ImageGallery({ images }: { images: ProjectImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!images.length) return null

  const active = openIndex !== null ? images[openIndex] : null

  return (
    <div className="mb-4">
      <div className="grid grid-cols-3 gap-2">
        {images.map((img, i) => (
          <motion.button
            key={img.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="aspect-square overflow-hidden rounded-lg border p-0"
            style={{ borderColor: 'var(--palette-border)' }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 p-6"
            style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.img
              key={active.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] max-w-full rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            {active.caption && (
              <p className="max-w-xl text-center text-sm text-white/80">{active.caption}</p>
            )}
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              className="absolute right-6 top-6 rounded-full border border-white/30 px-3 py-1 text-sm font-bold text-white"
            >
              Close ✕
            </button>
            {images.length > 1 && (
              <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenIndex((openIndex! - 1 + images.length) % images.length)
                  }}
                  className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenIndex((openIndex! + 1) % images.length)
                  }}
                  className="rounded-full border border-white/30 px-4 py-2 text-sm font-bold text-white"
                >
                  Next →
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
