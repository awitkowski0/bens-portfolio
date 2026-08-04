import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '#/data/projects'

export function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])

  return (
    <section ref={ref} id="projects" className="relative px-6 py-24 sm:px-10 lg:px-20">
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          x: bgX,
          background: `radial-gradient(800px 400px at 30% 50%, var(--palette-glow), transparent 70%)`,
        }}
      />

      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-black sm:text-5xl lg:text-6xl"
          style={{ color: 'var(--palette-text)' }}
        >
          {'Projects'.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -6,
                scale: 1.01,
                transition: { duration: 0.2 },
              }}
              className="group relative overflow-hidden rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-xl"
              style={{
                borderColor: 'var(--palette-border)',
                backgroundColor: 'var(--palette-card)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
              }}
            >
              <motion.div
                className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, var(--palette-glow), transparent 70%)`,
                }}
                whileHover={{ opacity: 1 }}
              />

              <div className="relative z-10">
                <h3
                  className="mb-2 text-xl font-bold"
                  style={{ color: 'var(--palette-text)' }}
                >
                  {project.name}
                </h3>
                <p
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: 'var(--palette-text-muted)' }}
                >
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="mb-4 space-y-1">
                    {project.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-1.5 text-xs font-semibold"
                        style={{ color: 'var(--palette-primary)' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((t, ti) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 + ti * 0.05 + 0.3 }}
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: 'var(--palette-glow)',
                        color: 'var(--palette-primary)',
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold no-underline transition-colors hover:opacity-80"
                      style={{ color: 'var(--palette-primary)' }}
                      whileHover={{ x: 2 }}
                    >
                      Live Demo ↗
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold no-underline transition-colors hover:opacity-80"
                      style={{ color: 'var(--palette-text-muted)' }}
                      whileHover={{ x: 2 }}
                    >
                      GitHub ↗
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
