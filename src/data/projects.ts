export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface ProjectVideo {
  src: string
  poster?: string
  label?: string
}

export interface ProjectLink {
  label: string
  url: string
}

export type ProjectCategory = 'Music' | 'Marketing Experience' | 'Music Festival Experiences'

export interface Project {
  name: string
  category: ProjectCategory
  role?: string
  description: string
  tags: string[]
  highlights?: string[]
  images?: ProjectImage[]
  video?: ProjectVideo
  links?: ProjectLink[]
}

export const projectCategories: ProjectCategory[] = ['Music', 'Marketing Experience', 'Music Festival Experiences']

export const projects: Project[] = [
  {
    name: 'MEBA — Music & Entertainment Business Association',
    category: 'Music',
    role: 'Founder',
    description:
      'Founded and scaled a Pitt Business student organization from the ground up, bridging students with the music and entertainment industry through guest speakers, corporate partnerships, and benefit concerts — including a Farina Foundation benefit show with Post Genre.',
    tags: ['Leadership', 'Business Development', 'Partnerships', 'Community Outreach'],
    highlights: [
      '9 general body meetings with guest speakers from Stage AE, Audacy, and Warner Records',
      '134 Instagram followers, 65 GroupMe members, 84 email subscribers in first semester',
      'Booked a Farina Foundation benefit concert with Post Genre',
    ],
    images: [
      { src: '/images/case-studies/meba-general-body-meeting.jpg', alt: 'MEBA general body meeting at Pitt Business', caption: 'A MEBA general body meeting' },
      { src: '/images/case-studies/audacy-studio-visit.jpg', alt: 'MEBA members visiting Audacy’s Pittsburgh studios', caption: 'MEBA members touring Audacy’s Pittsburgh studios' },
    ],
    links: [
      { label: 'Pitt News Feature', url: 'https://pittnews.com/article/186193/featured/passion-meets-profession-club-helps-students-start-music-entertainment-business-careers/' },
      { label: 'MEBA on Instagram', url: 'https://www.instagram.com/meba.pitt/' },
      { label: 'Farina Foundation Benefit Concert', url: 'https://farinafoundation.org/event/mebe-presents-play-it-forward-a-farina-foundation-benefit-concert/' },
    ],
  },
  {
    name: 'Core Capital Lending',
    category: 'Marketing Experience',
    role: 'Marketing Strategist',
    description:
      'Owned multi-channel marketing for a Pittsburgh-based real estate lender — from digital ad campaigns and investor newsletters to a highway digital billboard on I-79 — driving inbound leads and expanding the borrower network.',
    tags: ['Meta Ads', 'Google Ads', 'Billboard/OOH', 'Email Marketing', 'KPI Reporting'],
    highlights: [
      '+35% inbound leads the quarter after launch',
      '200+ prospects added to borrower network via 10+ networking events',
      '12% average newsletter open rate, 6 closed deals tracked by link clicks',
    ],
    images: [
      { src: '/images/case-studies/core-capital-billboard-rt79.jpg', alt: 'Core Capital Lending digital billboard on Route 79', caption: 'I-79 digital billboard, Canonsburg PA' },
      { src: '/images/case-studies/core-capital-billboard-mcknight.jpg', alt: 'Core Capital Lending digital billboard on McKnight Road', caption: 'McKnight Road digital billboard' },
      { src: '/images/case-studies/core-capital-dscr-flyer.jpg', alt: 'Core Capital Lending DSCR rental loan digital flyer' },
      { src: '/images/case-studies/core-capital-budget-performance.jpg', alt: 'Core Capital Lending budget and digital performance report', caption: 'Monthly budget & digital performance reporting' },
      { src: '/images/case-studies/core-capital-promo-billboard.jpg', alt: 'Core Capital Lending promo materials and billboard media plan', caption: 'Promo materials & billboard media plan' },
      { src: '/images/case-studies/core-capital-fix-and-flips.jpg', alt: 'Presenting a Fix and Flips loan program to the team' },
    ],
  },
  {
    name: 'Office Depot / Supra Office Solutions',
    category: 'Marketing Experience',
    role: 'Business Solutions Sales & Operations Intern',
    description:
      'Supported B2B account teams on event logistics and sustainability initiatives, from a multi-campus "Sustainability Show" tour to onboarding clients onto the Keurig K-Cycle recycling program.',
    tags: ['Event Planning', 'Client Onboarding', 'Budget Analysis'],
    highlights: [
      'Sustainability Show tour across 3 university locations',
      'Zero-waste catering plan for a 60-attendee event',
    ],
  },
  {
    name: 'Susquehanna Music Festival',
    category: 'Music Festival Experiences',
    role: 'Founder',
    description:
      'Created and ran a full-day music festival from scratch in Clearfield, PA — booking bands, securing sponsors, and coordinating logistics for 250+ attendees while raising money for a local charity.',
    tags: ['Event Production', 'Sponsorship', 'Fundraising'],
    highlights: [
      '5 local bands, 9 hours of entertainment, 250+ attendees',
      '$3,000+ raised for a local charity',
    ],
    images: [
      { src: '/images/case-studies/susquehanna-band-performance.jpg', alt: 'Social Parasite performing at the Susquehanna Music Festival' },
      { src: '/images/case-studies/susquehanna-crew-shirts.jpg', alt: 'Susquehanna Music Festival organizing crew' },
    ],
    video: {
      src: '/videos/susquehanna-music-festival-promo.mp4',
      label: 'Festival promo video',
    },
    links: [
      { label: 'The Progress News Feature', url: 'https://www.theprogressnews.com/news/local-college-student-organizes-music-festival-on-the-riverwalk-in-clearfield/article_7f0b5584-4515-11ef-93fd-7f04d6941819.html' },
    ],
  },
  {
    name: 'All Out Music Festival | PromoWest Productions / Stage AE',
    category: 'Music Festival Experiences',
    role: 'Assistant, Artist Relations, Logistics & Marketing',
    description:
      'Supported artist relations and marketing for a large-scale music festival at Stage AE — serving as a liaison for headline talent while driving a data-backed Instagram content strategy.',
    tags: ['Artist Relations', 'Social Media Strategy', 'B2B Outreach', 'Data Analysis'],
    highlights: [
      '1.5M organic Instagram impressions',
      'Performance analysis across 130+ productions',
      '15+ local business partnerships',
    ],
    images: [
      { src: '/images/case-studies/all-out-music-festival-crew.jpg', alt: 'All Out Music Festival crew' },
    ],
  },
]
