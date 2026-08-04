export interface Experience {
  company: string
  location: string
  role: string
  startDate: string
  endDate: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: "Dick's Sporting Goods",
    location: "Pittsburgh, PA",
    role: "Software Engineer",
    startDate: "June 2025",
    endDate: "Present",
    bullets: [
      "Architected cross-platform scheduling features using React, .NET, and React Native, optimizing workforce management.",
      "Integrated production ML recommendation models into e-commerce shopping carts and search engines.",
      "Engineered end-to-end RAG pipelines utilizing Elastic Agent Builder to streamline data retrieval for L2 support applications.",
      "Developed a data-driven athlete performance framework for a 6-store golf pilot program, integrating Trackman and Fenris analytics to capture, process, and visualize real-time swing metrics.",
    ],
  },
  {
    company: "Sheetz",
    location: "Pittsburgh, PA",
    role: "Scrum Master",
    startDate: "May 2024",
    endDate: "May 2025",
    bullets: [
      "Facilitated Agile ceremonies for 5 cross-functional IT teams, balancing roadmaps with resource management constraints.",
      "Spearheaded technical capacity planning and resource allocation strategies for FY2025 project pipelines.",
    ],
  },
  {
    company: "Sheetz",
    location: "Pittsburgh, PA",
    role: "Software Engineering Intern",
    startDate: "May 2023",
    endDate: "Dec 2023",
    bullets: [
      "Collaborated within a fast-paced R&D team to engineer a data-driven MVP, building a scalable system to process and aggregate large-scale data from Teradata to support strategic research and analysis.",
      "Built a React front-end application with ChartJS to provide intuitive data visualization, delivering actionable insights to stakeholders, and provided technical support to executives for seamless application adoption.",
    ],
  },
  {
    company: "B. Braun Medical Inc",
    location: "Allentown, PA",
    role: "R&D Software Engineer Intern",
    startDate: "May 2022",
    endDate: "Dec 2022",
    bullets: [
      "Led a key contribution to re-architecting a real-time data platform, scaling the system to support a distributed network of 40,000 IoT endpoints (infusion pumps) across multiple facilities.",
      "Developed Python scripts with Microsoft Azure Translation API to localize the platform into German, Spanish, and Italian.",
    ],
  },
  {
    company: "University of Pittsburgh",
    location: "Pittsburgh, PA",
    role: "DevOps Engineer",
    startDate: "Aug 2021",
    endDate: "Apr 2022",
    bullets: [
      "Modernized backend services for the Pittsburgh Quantum Institute, streamlining operations and ensuring long-term reliability.",
    ],
  },
]
