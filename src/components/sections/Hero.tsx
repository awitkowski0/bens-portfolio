import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { profile } from '#/data/profile'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' as const },
  },
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section ref={ref} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          scale,
          background: 'radial-gradient(800px 500px at 50% 30%, var(--palette-glow), transparent 70%)',
          y: bgY,
        }}
      />

      <motion.div
        className="absolute top-20 left-10 w-24 h-24 rounded-full opacity-20 pointer-events-none"
        style={{
          backgroundColor: 'var(--palette-accent)',
          y: useTransform(scrollYProgress, [0, 1], [0, -60]),
        }}
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-40 right-16 w-16 h-16 rounded-full opacity-20 pointer-events-none"
        style={{
          backgroundColor: 'var(--palette-secondary)',
          y: useTransform(scrollYProgress, [0, 1], [0, -40]),
        }}
        variants={floatingVariants}
        animate="animate"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ opacity, y: contentY }}
        className="relative z-10 max-w-4xl"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <img
            src={profile.heroImage}
            alt={profile.name}
            className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
            style={{
              border: '4px solid var(--palette-card)',
              boxShadow: '0 4px 24px var(--palette-glow), 0 0 0 2px var(--palette-primary)',
            }}
          />
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: 'var(--palette-primary)' }}
        >
          {profile.subtitle}
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-6 text-6xl font-black leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl"
          style={{ color: 'var(--palette-text)' }}
        >
          {profile.name.split(' ').map((word, i) => (
            <span key={word} className="inline-block">
              <span
                className="inline-block bg-clip-text text-transparent"
                style={{
                  backgroundImage: i === 0
                    ? 'linear-gradient(135deg, var(--palette-primary), var(--palette-accent))'
                    : 'none',
                  color: i === 0 ? 'transparent' : 'var(--palette-text)',
                }}
              >
                {word}
              </span>
              {i < profile.name.split(' ').length - 1 && '\u00A0'}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed"
          style={{ color: 'var(--palette-text-muted)' }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#experience"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white no-underline transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: 'var(--palette-primary)',
              boxShadow: '0 4px 20px var(--palette-glow)',
            }}
          >
            View My Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M8 13l4-4M8 13l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 rounded-full border-2 px-8 py-3 text-base font-bold no-underline transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'var(--palette-primary)',
              color: 'var(--palette-primary)',
            }}
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--palette-text-muted)' }}>
          <path d="M12 5v14M12 19l6-6M12 19l-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </section>
  )
}
