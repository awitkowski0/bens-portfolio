export interface Experience {
  company: string
  location: string
  role: string
  startDate?: string
  endDate?: string
  intro?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'All Out Music Festival | Nick Staples Presents',
    location: 'Pittsburgh, PA',
    role: 'Executive Assistant',
    startDate: 'May 2023',
    endDate: 'Present',
    intro:
      'I am so deeply grateful for my professional and personal relationship with Nick Staples, who took a real chance on me when he brought me onto his team. Working right alongside him to help produce All Out Music Festival across Stage AE and KEMBA Live! has been one of the most fulfilling experiences of my career, giving me the opportunity to help execute major LGBTQ+ Pride events for over 15,000 festivalgoers.',
    bullets: [
      'Helped execute LGBTQ+ music festivals across Stage AE and KEMBA Live!, directing operations for 15,000+ attendees.',
      'Negotiated operational logistics between venue personnel and talent management teams, from the first offer sheet all the way to night-of-show.',
      'Processed official show contracts, performance riders, tax documentation, and post-event financial settlements.',
      'Oversaw artist hospitality, green room setups, and guest ticket allocations as the primary liaison for visiting personnel.',
    ],
  },
  {
    company: 'Office Depot / Supra Office Solutions',
    location: 'Pittsburgh, PA',
    role: 'Operations & Events Intern',
    startDate: 'August 2025',
    endDate: 'April 2026',
    intro:
      'Serving as a direct client facing resource for the University of Pittsburgh gave me incredible hands on experience in supply chain coordination and campus logistics. My favorite part of this role was taking ownership of our University Sustainability Product Showcases, making sure vendor setups and equipment logistics ran seamlessly for attendees.',
    bullets: [
      'Orchestrated vendor logistics and equipment setups for attendees at University Sustainability Product Showcases.',
      'Systematized database tracking in Excel for 80+ purchase orders, inventory, and client onboarding for a new product rollout.',
    ],
  },
  {
    company: 'Core Capital Lending',
    location: 'Pittsburgh, PA',
    role: 'Marketing & Outreach Coordinator',
    startDate: 'March 2025',
    endDate: 'August 2025',
    intro:
      'I am super thankful for the high level hands on strategy experience this role gave me at such an early stage in my career. Getting to work directly alongside the firm owner to build out full campaign plans, manage HubSpot workflows, and track ROI in Power BI was an amazing look into real executive decision making.',
    bullets: [
      'Built, automated, and managed full lifecycle CRM workflows, lead scoring, and investor email newsletters in HubSpot.',
      'Reported to the firm owner on marketing strategy and budgets, building Power BI dashboards to analyze campaign ROI and performance metrics.',
      'Launched paid digital ads in Meta Ads Manager and Google Ads, boosting inbound lead volume by 35%.',
    ],
  },
  {
    company: 'PromoWest Productions / Stage AE',
    location: 'Pittsburgh, PA',
    role: 'Marketing and Promotions Intern',
    startDate: 'January 2023',
    endDate: 'July 2025',
    intro:
      "Stage AE was my very first big step into the music industry, and it completely lit the fire under me to make live entertainment my life's work... It is the exact experience that inspired me to found MEBA on campus! It was so cool to watch the audience demographic research I conducted on show data actually get implemented into real marketing strategy that directly drove stronger campaign KPIs.",
    bullets: [
      'Cleaned raw attendance, revenue, and engagement data across 130+ Stage AE shows using Python and Excel.',
      'Built audience demographic models from show day data by genre, directly correlating to a .8% increase in email opens.',
      'Pioneered a short-form content series alongside supervisor research that outperformed prior content by 150%.',
      'Pitched and ran an influencer promotional campaign that generated 1.5 million organic impressions for a festival.',
    ],
  },
  {
    company: 'Independent Artists & Labels',
    location: 'Pittsburgh, PA',
    role: 'Freelance PR & Copywriting',
    intro:
      'This whole journey started because a professor suggested I pitch artist teams directly, and I just decided to take a chance. I was so excited to even get a response back, let alone get to send over PR materials for them to use. It just so happened that one of the acts I wrote for eventually went on to become a Grammy winning performer, which was so surreal to watch unfold!',
    bullets: [
      'Authored tailored PR copy, press releases, and EPK materials for independent musical acts and a Grammy-winning artist.',
    ],
  },
  {
    company: 'Garrett Alan | Film for Her',
    location: 'Pittsburgh, PA',
    role: 'Artist Management',
    intro:
      'Managing Garrett Alan and Film for Her teaches me something new every single day, and I love the genuine friendships I have grown with local venue staff and the artists themselves. Guiding music rollouts, merch design, and pitch decks for people whose art I truly believe in is easily one of the most rewarding things I do.',
    bullets: [
      'Managed Red Bull DJ winner Garrett Alan with press, outreach, pitch decks, and a full EPK to secure bookings.',
      'Managed indie creator Film for Her, overseeing music releases, merch design and fulfillment, socials, and regional bookings.',
    ],
  },
]
