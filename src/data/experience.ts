export interface Experience {
  company: string
  location: string
  role: string
  startDate: string
  endDate: string
  intro?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'Office Depot / Supra Office Solutions',
    location: 'Pittsburgh, PA',
    role: 'Business Solutions Sales & Operations Intern',
    startDate: 'August 2025',
    endDate: 'April 2026',
    intro:
      'Supra Office Solutions is a major B2B office supplier partnered with Office Depot to deliver supply chain and procurement services. During my time here, I served as a direct client facing resource for the University of Pittsburgh while heading up the logistics for our campus sustainability showcase program!',
    bullets: [
      'Worked directly with Senior Account Managers to plan and run a multi-campus "Sustainability Show" tour across three university locations.',
      'Handled client onboarding and day to day logistics for the Keurig K-Cycle recycling program on campus.',
      'Built event proposals and budgets, including zero waste catering setups for 60 attendees.',
    ],
  },
  {
    company: 'Core Capital Lending',
    location: 'Pittsburgh, PA',
    role: 'Marketing Strategy - Lead Intern',
    startDate: 'March 2025',
    endDate: 'August 2025',
    intro:
      'Core Capital Lending is a private real estate lender where I got to step into a real high level strategy role... even managing a marketing intern who reported to me! We managed every layer of marketing for this business, crushing our goals in a single summer and setting the company up for huge long term success.',
    bullets: [
      'Built and optimized ad campaigns across digital platforms, jumping inbound leads by 35% the next quarter.',
      'Planned 10+ networking events and ran targeted outreach that brought in over 200 new borrower prospects.',
      'Put together monthly investor newsletters with a 12% average open rate that led straight to 6 closed real estate deals.',
      'Managed and mentored our marketing intern, working together on social content and promotional materials.',
      'Handled the full marketing plan and budget from scratch, tracking KPIs to hit key growth targets.',
    ],
  },
  {
    company: 'Susquehanna Music Festival',
    location: 'Clearfield, PA',
    role: 'Head of Operations/Founder',
    startDate: 'May 2024',
    endDate: 'July 2024',
    intro:
      'Back home for the summer with extra time after my 9 to 5, I decided to put my love for live music to the test... I built a free benefit concert from scratch for my hometown, running everything from booking bands and securing sponsors to managing marketing, operations, and day of festival logistics!',
    bullets: [
      'Booked 5 local bands, coordinated 9 hours of live music, and brought in over 250 attendees for a full day festival.',
      'Handled all event details from sponsor pitches and local promo to site setup and day of production.',
      'Raised $3,000+ for a local charity by partnering up with small businesses across the community.',
    ],
  },
  {
    company: 'Music & Entertainment Business Association (MEBA), University of Pittsburgh',
    location: 'Pittsburgh, PA',
    role: 'President/Founder',
    startDate: 'August 2023',
    endDate: 'April 2026',
    intro:
      'I founded MEBA because I wanted to create a real home at Pitt Business for students who are genuinely obsessed with music and live entertainment. We built a community that bridges students directly to the industry through guest speakers, corporate networking, and producing live benefit shows!',
    bullets: [
      'Built the student organization completely from scratch, pitching university leadership and securing official department backing.',
      'Spearheaded the end to end business development for benefit concerts, resulting in successful bookings and partnerships.',
      'Led comprehensive outreach initiatives to bridge gaps between prospective students, alumni, and industry professionals.',
      'Built outreach systems to connect members directly with alumni, local promoters, and entertainment companies for internships.',
    ],
  },
  {
    company: 'All Out Music Festival | PromoWest Productions / Stage AE',
    location: 'Pittsburgh, PA',
    role: 'Artist Relations, Logistics, & Marketing Intern',
    startDate: 'March 2023',
    endDate: 'August 2025',
    intro:
      'This was my very first internship in live music, and what a journey it was! I started on the ground floor doing fan engagement at physical booths during show nights at Stage AE, eventually transitioning to work alongside Nick Staples (founder of All Out Music Festival) to lead influencer promotions, artist relations, and show day logistics.',
    bullets: [
      'Started on site at Stage AE running fan engagement booths, managing giveaways, and connecting directly with concertgoers on show nights.',
      'Worked alongside Nick Staples (founder of All Out Music Festival) to build and execute digital marketing campaigns.',
      'Built a trend focused Instagram content strategy that pulled in over 1.5 million organic impressions.',
      'Partnered with local music influencers and creators to drive ticket sales and expand festival brand awareness.',
      'Served as the main point of contact for festival headliners, taking care of artist green rooms, hospitality, and strict stage timing.',
      'Worked right between stage production, venue staff, and talent management to solve sudden logistical issues on fast-paced show days.',
      'Designed and executed audience survey systems for 200+ attendees to capture clear data on fan demographics and event marketing.',
      'Built advanced Excel tracking models to break down annual performance metrics and ticket trends across 130+ venue productions.',
      'Pitched and managed B2B partnerships with 15+ local businesses to scale collegiate brand engagement and cross promotions.',
    ],
  },
]
