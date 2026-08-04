export interface SkillCategory {
  name: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['Python', 'Java', 'C#', 'TypeScript', 'JavaScript', 'SQL', 'C'],
  },
  {
    name: 'AI / ML',
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Pandas',
      'Large Language Models',
      'Google Gemini API',
      'RAG',
    ],
  },
  {
    name: 'Systems & DevOps',
    skills: [
      'AWS',
      'Google Cloud Platform',
      'Docker',
      'Kafka',
      'PostgreSQL',
      'CI/CD',
      'Redis',
    ],
  },
  {
    name: 'Frameworks & Tools',
    skills: [
      'React',
      'React Native',
      'Next.js',
      '.NET',
      'Flask',
      'FastAPI',
      'Flutter',
      'Tauri',
    ],
  },
]
