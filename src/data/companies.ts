export interface CompanyConfig {
  slug: string
  name: string
  tagline: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textMuted: string
  }
  heroTitle: string
  highlights: string[]
}

export const companies: Record<string, CompanyConfig> = {
  phillies: {
    slug: 'phillies',
    name: 'Philadelphia Phillies',
    tagline: 'Turning data into diamond victories',
    colors: {
      primary: '#E81828',
      secondary: '#002D72',
      accent: '#D4A840',
      background: '#F8F6F2',
      surface: '#FFFFFF',
      text: '#0A0A0A',
      textMuted: '#5A5A5A',
    },
    heroTitle: 'Hey Phillies — let me help you win with data.',
    highlights: [
      'Built production ML recommendation models and RAG pipelines at Dick\'s Sporting Goods',
      'Developed real-time athlete performance analytics with Trackman + Fenris for a golf pilot',
      'Architected streaming data pipelines with Kafka and BigQuery for fraud detection',
      'Currently pursuing a Master\'s in AI at Georgia Tech',
    ],
  },

}
