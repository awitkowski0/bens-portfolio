import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { companies } from '#/data/companies'
import { profile } from '#/data/profile'
import { experience } from '#/data/experience'
import { projects } from '#/data/projects'
import { skillCategories } from '#/data/skills'
import { education } from '#/data/education'

const c = companies.phillies.colors

export const Route = createFileRoute('/apply/phillies')({
  component: PhilliesPage,
})

function PhilliesPage() {
  return (
    <div style={{ backgroundColor: c.background, color: c.text, minHeight: '100vh' }}>
      <div className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ borderColor: `${c.primary}33`, backgroundColor: `${c.surface}dd` }}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <Link to="/" className="text-sm font-bold no-underline" style={{ color: c.text }}>
            {profile.name.split(' ')[0]}<span style={{ color: c.primary }}>.</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold" style={{ backgroundColor: `${c.primary}22`, color: c.primary }}>
              {companies.phillies.name}
            </span>
            <Link to="/" className="text-xs no-underline" style={{ color: c.textMuted }}>Portfolio</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <motion.section className="py-20 sm:py-28" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.primary }}>{profile.subtitle}</p>
          <h1 className="text-4xl font-black leading-[1.05] sm:text-5xl lg:text-6xl mb-4" style={{ color: c.text }}>{companies.phillies.heroTitle}</h1>
          <p className="text-base max-w-2xl leading-relaxed mb-6" style={{ color: c.textMuted }}>{companies.phillies.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {companies.phillies.highlights.map((h, i) => (
              <motion.span key={h} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                className="rounded-full border px-3 py-1.5 text-xs font-semibold"
                style={{ borderColor: `${c.primary}44`, color: c.primary, backgroundColor: `${c.primary}11` }}>
                {h}
              </motion.span>
            ))}
          </div>
        </motion.section>

        <section className="py-16 border-t" style={{ borderColor: `${c.primary}22` }}>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.primary }}>Experience</h2>
          <p className="text-sm mb-8" style={{ color: c.textMuted }}>Relevant work</p>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div key={exp.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.08 }}
                className="border-l-2 pl-4" style={{ borderColor: c.primary }}>
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-base font-bold" style={{ color: c.text }}>{exp.role}</h3>
                  <span className="text-xs font-semibold" style={{ color: c.primary }}>@ {exp.company}</span>
                </div>
                <p className="text-xs mb-2" style={{ color: c.textMuted }}>{exp.startDate} -- {exp.endDate}</p>
                <ul className="space-y-1">
                  {exp.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed" style={{ color: c.textMuted }}>
                      <span style={{ color: c.primary }} className="mt-1.5 shrink-0">
                        <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor"><circle cx="2.5" cy="2.5" r="2.5" /></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t" style={{ borderColor: `${c.primary}22` }}>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.primary }}>Projects</h2>
          <p className="text-sm mb-8" style={{ color: c.textMuted }}>Selected work</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ delay: i * 0.06 }}
                className="rounded-xl border p-4" style={{ borderColor: `${c.primary}22`, backgroundColor: c.surface }}>
                <h3 className="text-sm font-bold mb-1" style={{ color: c.text }}>{p.name}</h3>
                <p className="text-xs leading-relaxed mb-3" style={{ color: c.textMuted }}>{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-full font-semibold" style={{ backgroundColor: `${c.primary}18`, color: c.primary }}>{t}</span>
                  ))}
                </div>
                <div className="flex gap-2 mt-2">
                  {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold no-underline" style={{ color: c.primary }}>Live</a>}
                  {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold no-underline" style={{ color: c.textMuted }}>GitHub</a>}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t" style={{ borderColor: `${c.primary}22` }}>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.primary }}>Skills & Tools</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat) => (
              <div key={cat.name}>
                <h3 className="text-xs font-bold mb-3" style={{ color: c.primary }}>{cat.name}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span key={s} className="text-[11px] px-2 py-1 rounded-full font-semibold" style={{ backgroundColor: `${c.primary}15`, color: c.primary, border: `1px solid ${c.primary}33` }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 border-t" style={{ borderColor: `${c.primary}22` }}>
          <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: c.primary }}>Education</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {education.map((edu) => (
              <div key={edu.school} className="rounded-xl border p-4" style={{ borderColor: `${c.primary}22`, backgroundColor: c.surface }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: c.primary }}>{edu.degree}</p>
                <h3 className="text-sm font-bold" style={{ color: c.text }}>{edu.school}</h3>
                <p className="text-xs mt-1" style={{ color: c.textMuted }}>{edu.field}</p>
                <p className="text-xs font-semibold mt-1" style={{ color: c.primary }}>{edu.startYear} - {edu.endYear}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 text-center border-t" style={{ borderColor: `${c.primary}22` }}>
          <p className="text-sm mb-4" style={{ color: c.textMuted }}>Interested in chatting?</p>
          <a href={`mailto:${profile.email}?subject=Regarding%20${encodeURIComponent(companies.phillies.name)}`}
             className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white no-underline transition-all hover:scale-105"
             style={{ backgroundColor: c.primary }}>
            Get in touch
          </a>
          <div className="flex items-center justify-center gap-4 mt-4">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-xs no-underline" style={{ color: c.textMuted }}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs no-underline" style={{ color: c.textMuted }}>LinkedIn</a>
            <Link to="/" className="text-xs no-underline" style={{ color: c.textMuted }}>Full Portfolio</Link>
          </div>
        </section>

        <div className="py-6 text-center text-[10px]" style={{ color: c.textMuted }}>
          Tailored page for {companies.phillies.name} -- Built with TanStack Start
        </div>
      </div>
    </div>
  )
}
