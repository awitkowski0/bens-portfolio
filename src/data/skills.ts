export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Marketing & Digital Media',
    skills: [
      'Meta Ads Manager',
      'Google Ads',
      'LinkedIn Sales Navigator',
      'Search Engine Optimization (SEO)',
      'Copywriting & Content Strategy',
      'Out-Of-Home (OOH) Advertising',
      'Email Marketing',
    ],
  },
  {
    name: 'CRM & Data Analytics',
    skills: [
      'HubSpot (Platform Admin & Migration)',
      'Salesforce',
      'Mailchimp',
      'Alteryx',
      'Tableau',
      'Microsoft Power BI',
      'Python',
      'Campaign Attribution & Funnel Tracking',
      'A/B Testing',
    ],
  },
  {
    name: 'Event & Operations Management',
    skills: [
      'Artist & Vendor Relations',
      'Sponsorship Acquisition',
      'Talent Hospitality & Rider Execution',
      'Stage & Site Logistics',
      'B2B Outreach & Partnerships',
      'Budget & Proposal Planning',
      'Survey Design & Demographics Analysis',
    ],
  },
  {
    name: 'Productivity & Design',
    skills: [
      'Adobe Creative Suite (Photoshop, Premiere Pro, InDesign, Illustrator)',
      'Microsoft Office Suite (Advanced Excel & Powerpoint)',
      'Google Workspace',
      'Canva',
      'Pitch Deck & Presentation Design',
    ],
  },
  {
    name: 'Leadership & Strategy',
    skills: [
      'Team Mentorship & Intern Supervision',
      'Strategic Planning',
      'Public Speaking & Presentation',
      'Community Outreach',
      'Cross-Functional Communication',
    ],
  },
]
