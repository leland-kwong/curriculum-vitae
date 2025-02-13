export interface ContactInfo {
  email: string
  phone: string
}

export interface WebPresence {
  desc: string
  link: string
}

export interface DateRange {
  start: string
  end?: string
}

export interface Experience {
  company: string
  website?: string
  role: string
  date: DateRange
  techStack?: string[]
  summary?: string
  responsibilities?: string[]
}

export interface Education {
  school: string
  degree: string
  years: [number, number]
  education?: string
}

export interface CVData {
  name: string
  title: string
  contactInfo: ContactInfo
  webPresence: WebPresence[]
  summary: string
  coreCompentencies: string[]
  experience: Experience[]
  interestsAndHobbies: string[]
  education: Education[]
}

const cvData: CVData = {
  name: 'Leland Kwong',
  title: 'Full-Stack Software Engineer',
  contactInfo: {
    email: 'leland.kwong@gmail.com'
  },
  webPresence: [
    {
      desc: 'github',
      link: 'https://github.com/Leland-Kwong'
    },
    {
      desc: 'homepage',
      link: 'https://lelandkwong.com'
    },
    {
      desc: 'linkedIn',
      link: 'https://www.linkedin.com/in/lelandkwong/'
    }
  ],
  summary:
    'Frontend-Focused Full-Stack Software Engineer committed to developing modern, scalable web applications. Proficient in React, Next.js, and frontend architecture, with the flexibility to work across the stack (Node.js, Postgres, MongoDB, Docker). Passionate about delivering user-centric solutions, promoting pragmatic engineering principles, and exploring new technologies such as Clojure and ReasonML. Seeking a collaborative team that values frontend excellence, encourages innovation, and supports continuous learning.',
  coreCompetencies: [
    'React / Next.js',
    'Node.js',
    'UI/UX best practices',
    'Team leadership & mentorship',
    'REST / GraphQL APIs',
    'Docker / CI/CD',
    'Databases (Postgres, MongoDB)'
  ],
  experience: [
    {
      company: 'Palo Alto Networks',
      role: 'Principal Frontend Engineer',
      techStack: [
        'React',
        'Next.js',
        'Node.js',
        'Tailwind CSS',
        'Backstage'
      ],
      summary:
        'Lead Frontend Engineer on the SRE team, responsible for building tools that empower developers and operations teams to manage and monitor services. Architected a new frontend platform to unify workflows, created a robust React component library, and collaborated with cross-functional teams to deliver high-impact features that streamline service deployment and management.'
    },
    {
      company: 'Entercom (Audacy.com)',
      role: 'Full-Stack Software Engineer',
      techStack: [
        'Node.js',
        'Docker',
        'ElasticSearch',
        'PostgreSQL',
        'DynamoDB',
        'Vue.js',
        'SASS'
      ],
      summary:
        'Extended and maintained a high-traffic content management system, serving millions of monthly visitors. Responsibilities included designing a microservice to analyze performance and error metrics, mentoring junior developers, and maintaining reliability in a rapidly evolving codebase.'
    },
    {
      company: 'LK Games',
      role: 'Independent Game Developer',
      techStack: ['Lua', 'LÖVE 2D'],
      summary:
        'Developed the action RPG ‘Citizen of Nowhere,’ implementing custom AI behaviors, a bespoke Entity Component System, and procedurally generated items/environments. Demonstrated strong problem-solving skills and creativity in building game mechanics from scratch.'
    },
    {
      company: 'Independent Contractor',
      role: 'Full-Stack JavaScript Developer',
      techStack: [
        'React',
        'GraphQL',
        'Next.js',
        'Express.js',
        'SASS',
        'PostCSS',
        'Webpack',
        'MongoDB',
        'Node.js',
        'Jest'
      ],
      summary:
        'Provided end-to-end consulting for various clients, building and deploying JavaScript applications. Contributed to both frontend and backend architecture, ensuring maintainable code and solid test coverage.'
    },
    {
      company: 'Awake Security',
      website: 'https://awakesecurity.com',
      role: 'Frontend Developer',
      techStack: [
        'React',
        'SASS',
        'Webpack',
        'Node.js',
        'Jest',
        'BEM'
      ],
      summary:
        'Collaborated with a team of network security researchers to build an MVP that analyzed and visualized network traffic. Created core UI features in React, established frontend architecture guidelines, and optimized the UI for complex data visualization.'
    },
    {
      company: 'Plastiq',
      website: 'https://plastiq.com',
      role: 'UX Engineer',
      techStack: [
        'AngularJS',
        'SASS',
        'Node.js',
        'Gulp',
        'Jasmine'
      ],
      summary:
        'Developed user-centric products to increase engagement, working closely with design and product teams. Streamlined workflows to reduce cognitive load, resulting in improved customer satisfaction and higher product adoption.'
    },
    {
      company: 'Netskope',
      website: 'https://netskope.com',
      role: 'Frontend Developer',
      techStack: [
        'AngularJS',
        'Bootstrap',
        'Highcharts',
        'LESS',
        'jQuery'
      ],
      summary:
        'Pioneered the frontend for Netskope’s cloud security platform, collaborating with designers and project managers to craft a responsive and scalable UI. Established CSS architecture using LESS, mentored engineering teams in UX best practices, and contributed to building a cohesive product vision.'
    }
  ],
  interestsAndHobbies: [
    'Interaction design',
    'Art (digital and traditional)',
    'Hiking',
    'Mountain biking',
    'Video games',
    'Personal development',
    'Game development'
  ],
  education: [
    {
      school: 'San Francisco State University',
      degree: 'Bachelor of Arts, Product Design'
    }
  ]
}

export default cvData
