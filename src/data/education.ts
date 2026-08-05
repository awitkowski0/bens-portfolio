export interface Education {
  school: string
  degree: string
  field: string
  startYear: string
  endYear: string
  notes?: string
  details?: string[]
}

export const education: Education[] = [
  {
    school: 'University of Pittsburgh, College of Business Administration',
    degree: 'B.S. Business Administration',
    field: 'Major: Marketing | Certificates: Public & Professional Writing, Digital Media',
    startYear: '2022',
    endYear: '2026',
    details: [
      'BNY Mellon & Alteryx Datathon',
      'Pitt Business Professional Sales Development Academy',
      'Pitt Business Leaders Engaging and Developing Strengths',
      'Panthers Forward Program Mentorship',
      "Student Organization Leader's DEI Summit",
    ],
  },
]
