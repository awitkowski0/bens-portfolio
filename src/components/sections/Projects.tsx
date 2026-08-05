import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projectCategories, projects } from '#/data/projects'
import { ImageGallery } from '#/components/ui/ImageGallery'

const orderedProjects = projectCategories.flatMap((category) =>
  projects.filter((p) => p.category === category)
)

function ProjectPage({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const bgX = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])

  return (
    <div ref={ref} className="relative flex min-h-screen flex-col justify-center px-6 py-24 sm:px-10 lg:px-20">
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          x: bgX,
          background: `radial-gradient(800px 400px at 30% 50%, var(--palette-glow), transparent 70%)`,
        }}
      />

      <div className="relative mx-auto w-full max-w-3xl">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className="mb-3 text-sm font-bold uppercase tracking-[0.2em]"
          style={{ color: 'var(--palette-primary)' }}
        >
          {`0${index + 1}`} / {`0${orderedProjects.length}`} — {project.category}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-3xl font-black sm:text-4xl lg:text-5xl"
          style={{ color: 'var(--palette-text)' }}
        >
          {project.name}
        </motion.h3>

        {project.role && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-sm font-semibold uppercase tracking-wider"
            style={{ color: 'var(--palette-text-muted)' }}
          >
            {project.role}
          </motion.p>
        )}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 text-base leading-relaxed sm:text-lg"
          style={{ color: 'var(--palette-text-muted)' }}
        >
          {project.description}
        </motion.p>

        {project.highlights && (
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 space-y-2"
          >
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: 'var(--palette-primary)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                {h}
              </li>
            ))}
          </motion.ul>
        )}

        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <ImageGallery images={project.images} />
          </div>
        )}

        {project.video && (
          <video
            controls
            playsInline
            preload="none"
            poster={project.video.poster}
            className="mb-8 w-full rounded-lg"
          >
            <source src={project.video.src} type="video/mp4" />
          </video>
        )}

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((t, ti) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ti * 0.05 + 0.3 }}
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

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <motion.a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-bold no-underline transition-colors hover:opacity-80"
                style={{ color: 'var(--palette-primary)' }}
                whileHover={{ x: 2 }}
              >
                {link.label} ↗
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="relative">
      <div className="mx-auto max-w-5xl px-6 pt-24 sm:px-10 lg:px-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-black sm:text-5xl lg:text-6xl"
          style={{ color: 'var(--palette-text)' }}
        >
          {'Highlights'.split('').map((char, i) => (
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
      </div>

      {orderedProjects.map((project, i) => (
        <ProjectPage key={project.name} project={project} index={i} />
      ))}
    </section>
  )
}
