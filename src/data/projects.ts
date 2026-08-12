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

export interface ProjectHighlight {
  label: string
  description: string
}

export type ProjectCategory = 'Music Industry' | 'Marketing Strategy' | 'Community & Student Leadership'

export interface Project {
  name: string
  category: ProjectCategory
  role?: string
  description: string
  tags: string[]
  highlights?: ProjectHighlight[]
  images?: ProjectImage[]
  video?: ProjectVideo
  links?: ProjectLink[]
}

export const projectCategories: ProjectCategory[] = ['Music Industry', 'Marketing Strategy', 'Community & Student Leadership']

export const projects: Project[] = [
  {
    name: 'Music Industry',
    category: 'Music Industry',
    description:
      'Building live entertainment networks, managing talent, executing promotional campaigns, and analyzing fan data...',
    tags: ['Talent Management', 'Artist Relations', 'Live Event Production', 'Data Analytics', 'Grassroots Marketing'],
    highlights: [
      {
        label: 'Independent Artist Management',
        description:
          'Manage Red Bull DJ winner Garrett Alan and indie creator Film for Her, directing release strategies, press outreach, merch, socials, and custom pitch decks and EPKs to secure regional bookings and build brand presence.',
      },
      {
        label: '1.5M+ Organic Impressions',
        description:
          'Built and ran trend-focused Instagram campaigns and local influencer partnerships across Stage AE and festival media to boost ticket sales and awareness.',
      },
      {
        label: 'Artist Hospitality & Logistics Lead',
        description:
          'Managed green room setups, ground transport, and day-of schedules for headlining talent at Stage AE, serving as the direct liaison between artists and venue leadership.',
      },
      {
        label: 'Rider & Contract Execution',
        description:
          'Handled hospitality riders, credential distribution, and stage run-times across multi-stage festival setups to keep live show operations running strictly on schedule.',
      },
      {
        label: 'Post-Show Analytics & Dashboards',
        description:
          'Built weekly performance recap decks for venue promoters using Excel and Power BI, evaluating ticket sales pacing, demographic trends, and bar spend across 130+ productions.',
      },
      {
        label: 'Grassroots Street Team Leadership',
        description:
          'Directed campus street-team efforts for upcoming concert dates, coordinating flyer distribution, poster runs, and digital group chat announcements across Pitt.',
      },
      {
        label: '500+ Attendees & $1,000+ Raised',
        description:
          'Produced multiple live benefit concerts through MEBA (scaling our community to over 60 active members) that brought in 500+ attendees and raised over $1,000 for local causes.',
      },
    ],
    images: [
      { src: '/images/case-studies/meba-general-body-meeting.jpg', alt: 'MEBA general body meeting at Pitt Business', caption: 'A MEBA general body meeting' },
      { src: '/images/case-studies/audacy-studio-visit.jpg', alt: 'MEBA members visiting Audacy’s Pittsburgh studios', caption: 'MEBA members touring Audacy’s Pittsburgh studios' },
      { src: '/images/case-studies/all-out-music-festival-crew.jpg', alt: 'All Out Music Festival crew' },
      { src: '/images/case-studies/all-out-music-festival-crowd.jpg', alt: 'Performer on stage at All Out Music Festival with the crowd and Pittsburgh’s Iron City sign in the background' },
      { src: '/images/case-studies/all-out-music-festival-group.jpg', alt: 'Attendees at All Out Music Festival' },
    ],
    links: [
      { label: 'MEBA Instagram', url: 'https://www.instagram.com/meba.pitt/' },
      { label: 'Pitt News Feature', url: 'https://pittnews.com/article/186193/featured/passion-meets-profession-club-helps-students-start-music-entertainment-business-careers/' },
      { label: 'Farina Foundation Benefit Concert', url: 'https://farinafoundation.org/event/mebe-presents-play-it-forward-a-farina-foundation-benefit-concert/' },
    ],
  },
  {
    name: 'Marketing Strategy',
    category: 'Marketing Strategy',
    description:
      'Executing omni-channel acquisition, CRM systems migration, and team-wide strategy implementation...',
    tags: ['HubSpot CRM Migration', 'Meta & Google Ads', 'Billboard / OOH', 'Marketing Budgeting', 'Team Execution'],
    highlights: [
      {
        label: '+35% Inbound Lead Jump',
        description:
          'Designed, launched, and continuously optimized paid digital campaigns across ad platforms that jumped inbound leads by 35% in the following quarter.',
      },
      {
        label: 'Full HubSpot CRM Migration',
        description:
          "Took charge of migrating the company's entire legacy database over to HubSpot, setting up new pipelines and serving as the primary administrator for the platform.",
      },
      {
        label: 'I-79 Highway Billboard Campaign',
        description:
          'Managed the creative direction, media buying, and rollout for a high-visibility digital billboard along I-79, significantly driving regional brand presence and inbound borrower calls.',
      },
      {
        label: 'Conversion-Focused Newsletter Strategy',
        description:
          'Authored monthly investor newsletters maintaining a 12% average open rate, utilizing custom UTM tracking links that directly initiated closed real estate financing deals.',
      },
      {
        label: 'Marketing Intern Leadership',
        description:
          'Directly supervised and mentored a marketing intern, delegating daily content creation, promotional materials, and campaign performance tracking.',
      },
      {
        label: 'Executive Planning & Team Integration',
        description:
          'Created monthly marketing plans, performance reporting dashboards, and ad budgets, working directly with a team of loan officers to keep initiatives aligned.',
      },
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
    name: 'Community & Student Leadership',
    category: 'Community & Student Leadership',
    description:
      'Mobilizing local communities, mentoring future students, and representing university athletics...',
    tags: ['Community Events', 'Student Mentorship', 'NCA Cheer Leader', 'Public Speaking'],
    highlights: [
      {
        label: 'Free Community Charity Festival',
        description:
          'Founded Susquehanna Music Festival as a completely free event, providing paid performance opportunities for local musicians while raising $3,000+ for charity.',
      },
      {
        label: 'NCA Competitive Cheer Leader',
        description:
          'Competed twice at NCA College Nationals as Squad Logistics Lead, while dedicating 30+ hours to public service and community outreach at university events.',
      },
      {
        label: 'Pitt Business Student Ambassador',
        description:
          'Hosted seminars, panel discussions, and Q&A sessions for over 1,000 prospective students and families, serving as a mentor throughout the university admissions process.',
      },
      {
        label: 'Eagle Scout Service Project',
        description:
          'Earned the rank of Eagle Scout by planning and fundraising $800+ for a community flag drop-box, donating all surplus funds directly to American Legion Post #134.',
      },
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
]
