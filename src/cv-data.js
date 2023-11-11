export default {
  name: 'Leland Kwong',
  title: 'Full-Stack Software Engineer',
  contactInfo: {
    email: 'leland.kwong@gmail.com',
    phone: '415-326-6018'
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
    'Full-stack engineer focused on building web applications to solve interesting problems. My experience has been mainly frontend with a few years of backend using Nodejs, Postgres, and MongoDB. I have an open interest in working with new programming languages, in particular ones that focus on functional purity and immutability, including Clojure and ReasonML. I believe that React is the best choice for the frontend (unless something better comes along!) and am looking to join a company that is pragmatic, yet open to new ideas and technologies.',
  coreCompentencies: [],
  experience: [
    {
      company: 'Entercom',
      role: 'Full-stack Software Engineer',
      date: {
        start: '7/2019'
      },
      techStack: [
        'Node.js',
        'Docker',
        'Elastic Search',
        'Postgresql',
        'DynamoDB',
        'Vue.js',
        'SASS'
      ],
      summary: /* markdown */ `
        Extend and maintain audacy.com's content management system which handles 20 million monthly visitors.

        Responsibilities include:

        * Designing and building a backend microservice to analyze performance and error metrics.
        * Provide mentorship and guidance to junior developers on best practices and solving complex technical problems.
        * Building on top of legacy backend services while keeping a close eye on opportunities for refactoring to improve code quality and reliability.
        * Provide technical support to the product team to understand bugs and triage issues accordingly.`
    },
    {
      company: 'LK Games',
      role: 'Independent Game Developer',
      date: {
        start: '3/2018',
        end: '6/2019'
      },
      techStack: ['Lua language', 'Love2d game engine'],
      summary: /*markdown*/ `
        Worked on passion project called [Citizen of Nowhere](https://lk-games.itch.io/citizen-of-nowhere), an action role playing video game.

        Features I developed:

        * Custom AI behavior for flocking and local avoidance
        * Custom Entity Component System for managing game state
        * Procedurally generated items (weapons, consumables, armor...)
        * Procedurally generated environment and enemy groups`
    },
    {
      company: 'Independent Contractor',
      role: 'Full-stack javascript developer',
      date: {
        start: '6/2017',
        end: '4/2018'
      },
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
      ]
    },
    {
      company: 'Awake Security',
      website: 'https://awakesecurity.com',
      role: 'frontend developer',
      date: {
        start: '8/2015',
        end: '1/2017'
      },
      techStack: [
        'React',
        'SASS',
        'Webpack',
        'Node.js',
        'Jest testing',
        'Milligram(css framework)',
        'BEM'
      ],
      summary: `
        Worked with a team of network security researchers to build out an mvp designed to analyze and visualize network traffic.

        * Developed and designed core UI features for initial mvp using React.
        * Helped define and maintain frontend architecture`
    },
    {
      company: 'Plastiq',
      website: 'https://plastiq.com',
      role: 'UX engineer',
      date: {
        start: '10/2014',
        end: '4/2015'
      },
      summary:
        'As a key member of the UX Engineering team, I was responsible for creating new products to increase user engagement. I worked directly with design and product management to improve user workflows, resulting in designs that reduced cognitive load and simplified the experience for the user.',
      techStack: ['Angular 1', 'SASS', 'Node.js', 'Gulp', 'Jasmine testing'],
      responsibilities: []
    },
    {
      company: 'Netskope',
      website: 'https://netskope.com',
      role: 'frontend developer',
      date: {
        start: '2/2013',
        end: '10/2014'
      },
      summary:
        'As the first frontend developer hired, I lead and developed the UI from the ground up in collaboration with full-stack engineers, UI designers, and project managers.',
      techStack: [
        'Angular 1',
        'Bootstrap',
        'Highcharts',
        'LESS(css)',
        'jQuery'
      ],
      responsibilities: [
        'Architected and developed core CSS using LESS preprocessor',
        'Mentor and assist engineering team on CSS / UX best practices',
        'Collaborate with Project Management, Engineering Team, and Designers'
      ]
    },
    {
      company: 'Freelance web development',
      role: 'frontend developer',
      date: {
        start: '4/2012',
        end: '5/2013'
      },
      techStack: ['jQuery', 'HTML', 'CSS'],
      responsibilities: [
        'Design and layout of websites using Adobe Illustrator & Photoshop',
        'Frontend web development'
      ]
    }
  ],
  interestsAndHobbies: [
    'interaction design',
    'art (digital and traditional)',
    'hiking',
    'mountain biking',
    'video games',
    'personal development',
    'game development'
  ],
  education: [
    {
      school: 'San Francisco State University',
      degree: 'Bachelor of Arts, Product Design',
      years: [2002, 2005]
    }
  ]
}
