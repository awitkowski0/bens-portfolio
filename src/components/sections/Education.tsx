import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { education } from '#/data/education'

function EducationCard({ edu, i }: { edu: typeof education[number]; i: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto w-full max-w-2xl rounded-2xl border transition-all duration-300 cursor-pointer"
      style={{
        borderColor: 'var(--palette-border)',
        backgroundColor: 'var(--palette-card)',
      }}
      onClick={() => setOpen(!open)}
    >
      <div className="p-8 sm:p-10">
        <motion.div
          className="mb-2 text-base font-semibold uppercase tracking-wider"
          style={{ color: 'var(--palette-primary)' }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 + 0.2 }}
        >
          {edu.degree}
        </motion.div>
        <h3 className="mb-2 text-2xl font-bold sm:text-3xl" style={{ color: 'var(--palette-text)' }}>
          {edu.school}
        </h3>
        <p className="mb-4 text-base" style={{ color: 'var(--palette-text-muted)' }}>
          {edu.field}
        </p>
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold" style={{ color: 'var(--palette-primary)' }}>
            {edu.startYear} — {edu.endYear}
          </p>
          <button
            className="text-xs font-bold transition-transform duration-200"
            style={{ color: 'var(--palette-primary)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            ▼
          </button>
        </div>
        {edu.notes && (
          <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--palette-text-muted)' }}>
            {edu.notes}
          </p>
        )}
      </div>

      <AnimatePresence>
        {open && edu.details && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div
              className="space-y-3 px-8 pb-8 pt-2 border-t sm:px-10 sm:pb-10"
              style={{ borderColor: 'var(--palette-border)' }}
            >
              {edu.details.map((d) => (
                <div key={d} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--palette-text-muted)' }}>
                  <span style={{ color: 'var(--palette-primary)' }} className="mt-1 shrink-0">
                    <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor"><circle cx="2.5" cy="2.5" r="2.5" /></svg>
                  </span>
                  {d}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Education() {
  return (
    <section id="education" className="relative flex min-h-screen flex-col justify-center px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-4xl font-black sm:text-5xl lg:text-6xl"
          style={{ color: 'var(--palette-text)' }}
        >
          {'Education'.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <EducationCard key={edu.school} edu={edu} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
