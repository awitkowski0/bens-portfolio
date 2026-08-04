import { useEffect, useState } from 'react'
import { profile } from '#/data/profile'

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'var(--palette-card)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--palette-border)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3 sm:px-10">
        <a href="#" className="text-lg font-bold no-underline transition-colors" style={{ color: 'var(--palette-text)' }}>
          {profile.name.split(' ')[0]}
          <span style={{ color: 'var(--palette-primary)' }}>.</span>
        </a>
        <div className="hidden items-center gap-6 sm:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="text-sm font-semibold no-underline transition-colors duration-200"
              style={{ color: 'var(--palette-text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--palette-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--palette-text-muted)'}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
