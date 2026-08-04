export interface Project {
  name: string
  description: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  highlights?: string[]
}

export const projects: Project[] = [
  {
    name: 'Frody.co',
    description:
      'Architected a distributed, real-time fraud detection system leveraging a streaming data pipeline (Kafka) and large-scale data processing (BigQuery).',
    tech: ['Kafka', 'BigQuery', 'Python', 'GCP'],
    highlights: [
      "Best Distributed Systems Hack' at PennApps 2024",
      "'Most Technically Complex' at PennApps 2024",
    ],
  },
  {
    name: "PLAY'r",
    description:
      'Prototyping an application that leverages a large language model (Google Gemini API) for dynamic content generation, exploring the practical integration of foundation models into user-facing games.',
    tech: ['TypeScript', 'Google Gemini', 'Vite', 'PartyKit'],
    githubUrl: 'https://github.com/awitkowski0/playr-web',
  },
  {
    name: 'Cinect',
    description:
      'Created a Google Cloud-based app using ML to aggregate Letterboxd data for group movie recommendations.',
    tech: ['GCP', 'Python', 'ML', 'BigQuery'],
  },
  {
    name: 'FlightAdvisor',
    description:
      'Designed a full-stack flight cancellation and pricing prediction app using linear regression.',
    tech: ['Python', 'Flask', 'Tailwind', 'Docker'],
    githubUrl: 'https://github.com/awitkowski0/FlightPredictions',
  },
  {
    name: 'Idea-Pad',
    description:
      'AI-powered research and project planning desktop app built with Tauri v2, React, and Gemini AI for rapid ideation and prototyping.',
    tech: ['TypeScript', 'Tauri', 'React', 'Gemini'],
    githubUrl: 'https://github.com/awitkowski0/Idea-Pad',
  },
  {
    name: 'pickles',
    description:
      'Pittsburgh pickleball court availability tool — a public utility app serving the local community with real-time court data.',
    tech: ['Next.js', 'Bun', 'Tailwind', 'Vercel'],
    liveUrl: 'https://pickles-iota.vercel.app',
    githubUrl: 'https://github.com/awitkowski0/pickles',
  },
]
