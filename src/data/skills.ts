export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Marketing & Advertising',
    skills: ['Meta Ads Manager', 'Google Ads', 'LinkedIn Sales Navigator'],
  },
  {
    name: 'CRM & Data Tools',
    skills: ['HubSpot', 'Salesforce', 'Mailchimp', 'Alteryx', 'Tableau', 'Microsoft Power BI', 'Python'],
  },
  {
    name: 'Productivity & Design',
    skills: ['Adobe Suite', 'Microsoft Office Suite'],
  },
  {
    name: 'Event & Partnership Management',
    skills: ['Sponsorship Acquisition', 'B2B Outreach', 'Budget & Logistics Planning', 'Artist & Vendor Relations'],
  },
]
