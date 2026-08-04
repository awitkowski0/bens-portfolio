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
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science',
    field: 'AI Concentration',
    startYear: '2024',
    endYear: '2026',
    notes: 'Relevant Coursework: AI for Robotics, Game AI, Artificial Intelligence, Natural Language Processing, Knowledge-based AI',
    details: [
      'Cognitive Science (CS-6795) — Final project on the LLM Sycophantic Paradox: researched why AI models tend to agree with user stances over being truthful, a current AI alignment problem.',
      'Knowledge-Based AI (CS-7637) — Built iterative knowledge-based systems with multiple mini-projects and a full term project.',
      'AI Ethics (CS-6603) — Assignments and discussions on bias, accountability, and how autonomous systems affect society.',
      'Special Topics (CS-8803) — Health-tech crossover project involving cardio and breathing lab data analysis.',
      'Human-Computer Interaction (CS-6750) — Individual projects on interface design, usability testing, and human-centered AI.',
    ],
  },
  {
    school: 'University of Pittsburgh',
    degree: 'B.S. Computer Science',
    field: 'School of Computing and Information',
    startYear: '2020',
    endYear: '2024',
    details: [
      'Teaching Assistant for programming courses across multiple semesters.',
      'DevOps Engineer for the Pittsburgh Quantum Institute — modernized backend services and ensured long-term reliability.',
      'Organizer of SteelHacks, a university hackathon.',
    ],
  },
]
