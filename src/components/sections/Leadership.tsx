import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { leadership } from '#/data/leadership'

export function Leadership() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%'])

  return (
    <section ref={ref} id="leadership" className="relative px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-4xl font-black sm:text-5xl lg:text-6xl"
          style={{ color: 'var(--palette-text)' }}
        >
          {'Leadership & Activities'.split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.h2>

        <div className="relative space-y-12">
          <motion.div
            className="absolute left-[7px] top-2 h-full w-0.5 sm:left-[9px]"
            style={{
              backgroundColor: 'var(--palette-border)',
              scaleY: lineHeight,
              transformOrigin: 'top',
            }}
          />

          {leadership.map((role, i) => (
            <motion.div
              key={`${role.company}-${role.role}`}
              initial={{ opacity: 0, x: -30, clipPath: 'inset(0 100% 0 0)' }}
              whileInView={{ opacity: 1, x: 0, clipPath: 'inset(0 0% 0 0)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-10 sm:pl-12"
            >
              <motion.div
                className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 sm:h-5 sm:w-5"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.12 + 0.3 }}
                style={{
                  borderColor: 'var(--palette-primary)',
                  backgroundColor: 'var(--palette-background)',
                }}
              />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                <h3
                  className="text-xl font-bold sm:text-2xl"
                  style={{ color: 'var(--palette-text)' }}
                >
                  {role.role}
                </h3>
                <span
                  className="text-sm font-semibold"
                  style={{ color: 'var(--palette-primary)' }}
                >
                  @ {role.company}
                </span>
              </div>

              <p
                className="mt-1 mb-3 text-sm"
                style={{ color: 'var(--palette-text-muted)' }}
              >
                {role.startDate} — {role.endDate} | {role.location}
              </p>

              <ul className="space-y-2">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed"
                    style={{ color: 'var(--palette-text-muted)' }}
                  >
                    <span style={{ color: 'var(--palette-primary)' }} className="mt-1.5 shrink-0">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
