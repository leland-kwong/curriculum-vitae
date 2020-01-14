export default {
  name: 'Leland Kwong',
  title: 'Full-Stack Javascript Engineer',
  website: 'lelandkwong.com',
  contactInfo: {
    email: 'leland.kwong@gmail.com',
    phone: '415-326-6018',
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
    },
  ],
  summary: 'I am a Software Engineer focused on building applications for the web. My experience is mostly with frontend, although lately I have been spending more time with the backend. My main motivation for working on the server is to better understand how data is managed, transformed, and delivered from server to client. I enjoy functional programming and prefer working with teams that use React (strong opinion, weakly held). More importantly, I am interested in joining a team that is pragmatic, yet open to different ideas and technologies.',
  coreCompentencies: [],
  experience: [
    {
      company: 'Entercom',
      role: 'Full-stack Javascript Engineer',
      date: {
        start: '7/2019'
      },
      techStack: [
        'Node.js',
        'Vue.js',
        'SASS',
        'Elastic Search',
        'Postgresql'
      ],
      summary: /* markdown */`
        I help extend and maintain the editorial-facing cms and the user-facing views for Radio.com, a site that gets roughly 15 million monthly visitors.

        Responsibilities include:

        * Extending the backend while keeping a close eye on opportunities for refactoring to keep things DRY.
        * Building out new cms components to support the editorial team
        * Finding ways to improve the frontend architecture which is currently a mix of Handlebars, Vue templates, and vanilla js DOM manipulation.
        * Help with troubleshooting issues in production, which involves error logs and occasionally inspecting the production database for issues.`
    },
    {
      company: 'LK Games',
      role: 'Independent Game Developer',
      date: {
        start: '3/2018',
        end: '6/2019'
      },
      techStack: [
        'Lua language',
        'Love2d game engine'
      ],
      summary: /*markdown*/`
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
        * Helped define and maintain frontend architecture`,
    },
    {
      company: 'Plastiq',
      website: 'https://plastiq.com',
      role: 'UX engineer',
      date: {
        start: '10/2014',
        end: '4/2015'
      },
      summary: 'As a key member of the UX Engineering team, I was responsible for creating new products to increase user engagement. I worked directly with design and product management to improve user workflows, resulting in designs that reduced cognitive load and simplified the experience for the user.',
      techStack: [
        'Angular 1',
        'SASS',
        'Node.js',
        'Gulp',
        'Jasmine testing'
      ],
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
      summary: 'As the first frontend developer hired, I lead and developed the UI from the ground up in collaboration with full-stack engineers, UI designers, and project managers.',
      techStack: [
        'Angular 1',
        'Bootstrap',
        'Highcharts',
        'LESS(css)',
        'jQuery',
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
      techStack: [
        'jQuery',
        'HTML',
        'CSS'
      ],
      responsibilities: [
        'Design and layout of websites using Adobe Illustrator & Photoshop',
        'Frontend web development',
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
};
