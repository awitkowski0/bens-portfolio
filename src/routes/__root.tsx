import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'

import appCss from '../styles.css?url'

const PALETTE_INIT_SCRIPT = `(function(){try{var L=[ {n:'Cobalt Sky',p:'#1A60D0',s:'#0A40A0',a:'#5090E8',u:'#ECF2FD',t:'#08102A',m:'#385080',b:'#F4F7FE',c:'#FFFFFF',r:'rgba(26,96,208,0.2)',g:'rgba(26,96,208,0.15)'}, {n:'Neon Jungle',p:'#00D4AA',s:'#00886A',a:'#40F0CC',u:'#E6FCF6',t:'#002018',m:'#307060',b:'#F0FEFA',c:'#FFFFFF',r:'rgba(0,212,170,0.2)',g:'rgba(0,212,170,0.15)'}, {n:'Electric Fusion',p:'#7040E0',s:'#4828A0',a:'#A078F0',u:'#F2ECFD',t:'#12082A',m:'#504080',b:'#F8F4FE',c:'#FFFFFF',r:'rgba(112,64,224,0.2)',g:'rgba(112,64,224,0.15)'}, {n:'Fireworks',p:'#E04060',s:'#A82840',a:'#F07888',u:'#FDEFF2',t:'#2A080A',m:'#7A3840',b:'#FEF5F6',c:'#FFFFFF',r:'rgba(224,64,96,0.2)',g:'rgba(224,64,96,0.15)'}, {n:'Golden Hour',p:'#E8A840',s:'#B87A20',a:'#F0C870',u:'#FDF8EE',t:'#2A1A08',m:'#7A6220',b:'#FEFBF5',c:'#FFFFFF',r:'rgba(232,168,64,0.2)',g:'rgba(232,168,64,0.15)'}, {n:'Chili Spice',p:'#C0392B',s:'#8B1A1A',a:'#E57373',u:'#FDF0EF',t:'#2A0A0A',m:'#7A4040',b:'#FEF6F5',c:'#FFFFFF',r:'rgba(192,57,43,0.2)',g:'rgba(192,57,43,0.15)'}, {n:'Electric Kiwi',p:'#60D040',s:'#40A028',a:'#90E878',u:'#F2FEEE',t:'#0A2008',m:'#3A6A30',b:'#F6FEF4',c:'#FFFFFF',r:'rgba(96,208,64,0.2)',g:'rgba(96,208,64,0.15)'}, {n:'Tropical Punch',p:'#E84860',s:'#C02848',a:'#F07888',u:'#FDEEF0',t:'#2A0810',m:'#803848',b:'#FEF5F6',c:'#FFFFFF',r:'rgba(232,72,96,0.2)',g:'rgba(232,72,96,0.15)'}, {n:'Stormy Morning',p:'#4A6FA5',s:'#2C3E6B',a:'#8BA4CC',u:'#F0F4FA',t:'#1A2332',m:'#6B7D98',b:'#F8FAFE',c:'#FFFFFF',r:'rgba(74,111,165,0.2)',g:'rgba(74,111,165,0.15)'}, {n:'Pumpkin Spice',p:'#D48038',s:'#A86020',a:'#E8A868',u:'#FCF4EC',t:'#2A1408',m:'#7A5230',b:'#FEF7F3',c:'#FFFFFF',r:'rgba(212,128,56,0.2)',g:'rgba(212,128,56,0.15)'}, {n:'Calm Blue',p:'#4A8AC8',s:'#2A5A90',a:'#78B0E0',u:'#EEF5FC',t:'#08182A',m:'#406080',b:'#F4F8FE',c:'#FFFFFF',r:'rgba(74,138,200,0.2)',g:'rgba(74,138,200,0.15)'}, {n:'Jewel Box',p:'#1A8A7A',s:'#0A5A50',a:'#40B8A8',u:'#E8F6F4',t:'#08201A',m:'#387060',b:'#F2FAF8',c:'#FFFFFF',r:'rgba(26,138,122,0.2)',g:'rgba(26,138,122,0.15)'}, {n:'Winter Berry',p:'#B84048',s:'#88282A',a:'#D87078',u:'#FCEDEE',t:'#2A080A',m:'#7A3840',b:'#FEF4F4',c:'#FFFFFF',r:'rgba(184,64,72,0.2)',g:'rgba(184,64,72,0.15)'}, {n:'Wildflower Meadow',p:'#B08AC0',s:'#8060A0',a:'#D0B0D8',u:'#F6F0FA',t:'#1A0E28',m:'#604A7A',b:'#FAF7FC',c:'#FFFFFF',r:'rgba(176,138,192,0.2)',g:'rgba(176,138,192,0.15)'}, {n:'Minty Fresh',p:'#60B89A',s:'#388A72',a:'#90D0B8',u:'#EEF8F4',t:'#0A201A',m:'#487060',b:'#F4FBF8',c:'#FFFFFF',r:'rgba(96,184,154,0.2)',g:'rgba(96,184,154,0.15)'}, {n:'Wisteria Bloom',p:'#7E57C2',s:'#4A2C8A',a:'#B39DDB',u:'#F5F0FA',t:'#1F0F3A',m:'#6A4E8A',b:'#FAF7FC',c:'#FFFFFF',r:'rgba(126,87,194,0.2)',g:'rgba(126,87,194,0.15)'}, {n:'Summer Breeze',p:'#60B0D0',s:'#3080A8',a:'#88C8E0',u:'#EEF6FA',t:'#0A1A28',m:'#40708A',b:'#F4F9FC',c:'#FFFFFF',r:'rgba(96,176,208,0.2)',g:'rgba(96,176,208,0.15)'}, {n:'Quiet Luxury',p:'#8A7A6A',s:'#5A4A3A',a:'#B0A090',u:'#F5F2EF',t:'#1A140E',m:'#6A5A4A',b:'#FAF8F6',c:'#FFFFFF',r:'rgba(138,122,106,0.2)',g:'rgba(138,122,106,0.15)'} ];var D=[ {n:'Neon Noir',p:'#FF006E',s:'#B8004A',a:'#FF6B9D',u:'#1A0010',t:'#FFE0EC',m:'#AA6080',b:'#0A0008',c:'#1A0012',r:'rgba(255,0,110,0.3)',g:'rgba(255,0,110,0.2)'}, {n:'Midnight Storm',p:'#00BFFF',s:'#1040A0',a:'#4080E0',u:'#0A0A18',t:'#E0E8F0',m:'#707890',b:'#04040A',c:'#0E0E1A',r:'rgba(0,191,255,0.25)',g:'rgba(0,191,255,0.15)'}, {n:'Dark Emerald',p:'#00E676',s:'#008850',a:'#40C8A0',u:'#080E0A',t:'#D0F0E0',m:'#608870',b:'#020804',c:'#0A120E',r:'rgba(0,230,118,0.25)',g:'rgba(0,230,118,0.15)'}, {n:'Royal Purple',p:'#BB86FC',s:'#7C3AED',a:'#D090FF',u:'#0E0818',t:'#E8D0F8',m:'#8070A0',b:'#06020A',c:'#100A1A',r:'rgba(187,134,252,0.25)',g:'rgba(187,134,252,0.15)'}, {n:'Ember Glow',p:'#FF6D00',s:'#C04000',a:'#FF9E40',u:'#1A0E08',t:'#FFE8D0',m:'#A07050',b:'#0A0402',c:'#1A100A',r:'rgba(255,109,0,0.3)',g:'rgba(255,109,0,0.2)'} ];var palette=window.matchMedia('(prefers-color-scheme:dark)').matches?D:L;var c=palette[Math.floor(Math.random()*palette.length)];var d=document.documentElement;d.style.setProperty('--palette-primary',c.p);d.style.setProperty('--palette-secondary',c.s);d.style.setProperty('--palette-accent',c.a);d.style.setProperty('--palette-surface',c.u);d.style.setProperty('--palette-text',c.t);d.style.setProperty('--palette-text-muted',c.m);d.style.setProperty('--palette-background',c.b);d.style.setProperty('--palette-card',c.c);d.style.setProperty('--palette-border',c.r);d.style.setProperty('--palette-glow',c.g);}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Alex Witkowski — Software Engineer' },
      { name: 'description', content: 'Portfolio of Alex Witkowski — SWE @ Dick\'s Sporting Goods, Georgia Tech MCS' },
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
