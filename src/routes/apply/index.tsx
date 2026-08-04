import { createFileRoute, Link } from '@tanstack/react-router'
import { companies } from '#/data/companies'

export const Route = createFileRoute('/apply/')({
  component: ApplyIndex,
})

function ApplyIndex() {
  return (
    <div style={{ backgroundColor: '#0f0f1a', minHeight: '100vh' }}>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link to="/" className="text-xs font-semibold no-underline mb-8 block" style={{ color: '#888' }}>
          ← Back to portfolio
        </Link>
        <h1 className="text-3xl font-black mb-2" style={{ color: '#fff' }}>Tailored Applications</h1>
        <p className="text-sm mb-10" style={{ color: '#888' }}>
          Each page is built specifically for the company I'm applying to — brand colors, relevant highlights, and interactive elements.
        </p>
        <div className="space-y-4">
          {Object.entries(companies).map(([slug, c]) => (
            <Link
              key={slug}
              to="/apply/$company"
              params={{ company: slug }}
              className="block rounded-xl border p-6 no-underline transition-all hover:scale-[1.02] hover:shadow-xl"
              style={{
                borderColor: `${c.colors.primary}33`,
                backgroundColor: c.colors.surface,
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-4 w-4 rounded-full" style={{ backgroundColor: c.colors.primary }} />
                <h2 className="text-lg font-bold" style={{ color: c.colors.text }}>{c.name}</h2>
              </div>
              <p className="text-sm" style={{ color: c.colors.textMuted }}>{c.tagline}</p>
              <p className="text-xs mt-2 font-semibold" style={{ color: c.colors.primary }}>
                View tailored page →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
