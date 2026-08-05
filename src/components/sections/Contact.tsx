import { motion } from 'framer-motion'
import { profile } from '#/data/profile'

const links = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z' },
  { label: 'Phone', href: `tel:${profile.phone}`, icon: 'M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.25 1.01l-2.2 2.23z' },
]

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-4xl font-black sm:text-5xl"
          style={{ color: 'var(--palette-text)' }}
        >
          {"Let's Connect".split('').map((char, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: i * 0.025 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 text-lg leading-relaxed"
          style={{ color: 'var(--palette-text-muted)' }}
        >
          I'm always open to interesting conversations, collaborations, and opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-bold no-underline transition-all duration-300 hover:scale-105"
              style={{
                borderColor: 'var(--palette-border)',
                color: 'var(--palette-text)',
                backgroundColor: 'var(--palette-card)',
              }}
              whileHover={{ y: -2 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="transition-colors duration-300"
                style={{ color: 'var(--palette-primary)' }}
              >
                <path d={link.icon} />
              </svg>
              {link.label}
            </motion.a>
          ))}
        </motion.div>


      </div>
    </section>
  )
}
