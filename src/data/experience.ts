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
      'Orchestrated vendor logistics and equipment setups for attendees at University Sustainability Product Showcases.',
      'Systematized database tracking in Excel for 80+ purchase orders, inventory, and client onboarding for a new product rollout.',
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
      'Built, automated, and managed full lifecycle CRM workflows, lead scoring, and investor email newsletters in HubSpot.',
      'Reported to the firm owner on marketing strategy and budgets, building Power BI dashboards to analyze campaign ROI and performance metrics.',
      'Launched paid digital ads in Meta Ads Manager and Google Ads, boosting inbound lead volume by 35%.',
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
      'Produced a full day of live music featuring 5 local acts and hosting 250+ attendees, all while raising $3,000+ for charity.',
      'Negotiated vendor contracts, sponsor partnerships, and on-site logistics to fund and execute show-day operations.',
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
      'Established the organization from the ground up to foster industry education, career connections, and local philanthropy.',
      'Partnered with regional music charities and service organizations to coordinate community benefit events.',
      'Booked industry guest speakers and talent from CAA, Live Nation, Roc Nation, and indie rock band Flipturn.',
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
      'Helped execute LGBTQ+ music festivals across Stage AE and KEMBA Live!, directing operations for 15,000+ attendees.',
      'Negotiated operational logistics between venue personnel and talent management teams, from the first offer sheet all the way to night-of-show.',
      'Processed official show contracts, performance riders, tax documentation, and post-event financial settlements.',
      'Oversaw artist hospitality, green room setups, and guest ticket allocations as the primary liaison for visiting personnel.',
      'Cleaned raw attendance, revenue, and engagement data across 130+ Stage AE shows using Python and Excel.',
      'Built audience demographic models from show day data by genre, directly correlating to a .8% increase in email opens.',
      'Pioneered a short-form content series alongside supervisor research that outperformed prior content by 150%.',
      'Pitched and ran an influencer promotional campaign that generated 1.5 million organic impressions for a festival.',
    ],
  },
]
