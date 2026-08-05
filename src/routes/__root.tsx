import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'

import appCss from '../styles.css?url'

const PALETTE_INIT_SCRIPT = `(function(){try{var L={p:'#E8720C',s:'#B8560A',a:'#F5A356',u:'#FDF1E6',t:'#241004',m:'#7A5230',b:'#FFFBF7',c:'#FFFFFF',r:'rgba(232,114,12,0.2)',g:'rgba(232,114,12,0.15)'};var D={p:'#FF8C3D',s:'#FF6D00',a:'#FFB380',u:'#1A0F08',t:'#FFE8D0',m:'#C09068',b:'#0A0503',c:'#160D07',r:'rgba(255,140,61,0.28)',g:'rgba(255,140,61,0.18)'};var d=document.documentElement;function apply(c){d.style.setProperty('--palette-primary',c.p);d.style.setProperty('--palette-secondary',c.s);d.style.setProperty('--palette-accent',c.a);d.style.setProperty('--palette-surface',c.u);d.style.setProperty('--palette-text',c.t);d.style.setProperty('--palette-text-muted',c.m);d.style.setProperty('--palette-background',c.b);d.style.setProperty('--palette-card',c.c);d.style.setProperty('--palette-border',c.r);d.style.setProperty('--palette-glow',c.g);}var mql=window.matchMedia('(prefers-color-scheme:dark)');window.__themeMql=mql;apply(mql.matches?D:L);function onChange(e){apply(e.matches?D:L);}if(mql.addEventListener){mql.addEventListener('change',onChange);}else if(mql.addListener){mql.addListener(onChange);}}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Benjamin Leighow — Marketing & Business' },
      { name: 'description', content: 'Portfolio of Benjamin Leighow — Marketing Strategist, Founder of MEBA, Pitt Business \'26' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: PALETTE_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
      </body>
    </html>
  )
}
