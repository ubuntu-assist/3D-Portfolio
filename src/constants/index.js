import {
  dschang,
  dimsoft,
  coinbase,
  medium,
  openuniv,
  hackerrank,
  greatlearning,
  english1,
  english2,
  blockchain,
  sqlInt,
  bacc,
  prob,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  amigosDatabase,
  amigosGithub,
  amigosJava,
  amigosSpring,
  ciscoCybersecurity,
  fccJavascript,
  fccPython,
  fcc,
  amigoscode,
  cisco,
  minesec,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'certifications',
    title: 'Certifications',
  },
  {
    id: 'achievements',
    title: 'Achievements',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'dApps Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Content Creator / Youtuber',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Python Instructor',
    company_name: 'Governement High School Bafou',
    icon: minesec,
    iconBg: '#383E56',
    date: 'Sep 2021 - Present',
    points: [
      'Provide high-quality and technically relevant instruction, assessment, and feedback during lectures and laboratory sessions.',
      'Design curriculum-aligned daily lesson plans to facilitate effective learning experiences.',
      'Foster a dynamic learning environment by encouraging active participation and engagement.',
      'Stay up-to-date with industry trends and emerging technologies to enhance curriculum content.',
    ],
  },
  {
    title: 'dApps Developer',
    company_name: 'University of Dschang',
    icon: dschang,
    iconBg: '#E6DEDD',
    date: 'Aug 2022 - Present',
    points: [
      'Lead a team in the development of decentralized applications (dApps) for blockchain platforms.',
      'Collaborate with cross-functional teams to design, code, and deploy innovative dApps.',
      'Write and audit smart contracts using languages like Solidity to ensure secure and efficient functionality.',
      'Integrate user interfaces with blockchain components to create seamless user experiences.',
    ],
  },
  {
    title: 'Student Assistant / Researcher',
    company_name:
      'University of Dschang, Formal Methods Models and Languages (FMML) Team',
    icon: dschang,
    iconBg: '#383E56',
    date: 'Feb 2021 - Present',
    points: [
      'Participate in regular research meetings to discuss findings, challenges, and next steps.',
      'Communicate research progress, results, and challenges to faculty mentors and research teams.',
      'Actively engage in discussions on research theories, hypotheses, and potential implications.',
      'Contribute to the academic and research community through presentations and publications.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Dimsoft Cameroon',
    icon: dimsoft,
    iconBg: '#E6DEDD',
    date: 'Jul 2020 - Present',
    points: [
      'Develop and maintain web applications using React.js and other related technologies.',
      'Collaborate with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implement responsive design and ensure cross-browser compatibility.',
      'Participate in code reviews and provide constructive feedback to other developers.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Ngatchi Nguenang Jim Serge',
    designation: 'CFO',
    company: 'Airbus',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'James Folekouet Dontsop',
    designation: 'COO',
    company: 'Self-Employed',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: '',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Medium Style Blogging App',
    description:
      'A blogging app like Medium using NextJS, Sanity as headless CMS, Tailwind CSS for styling and TypeScript.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind css',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: medium,
    source_code_link: 'https://github.com/weshare237/next-meduim-app',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/weshare237/jobs-api',
  },
  {
    name: 'Web3 Exchange Tracker',
    description:
      'A crypto conversion app like Coinbase using NextJS, Solidity, thirdweb SDK, Sanity as a headless CMS, authentication with Metamask, and styled-components for styling',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'solidity',
        color: 'green-text-gradient',
      },
      {
        name: 'sanity',
        color: 'pink-text-gradient',
      },
    ],
    image: coinbase,
    source_code_link: 'https://github.com/weshare237/uniswap-clone',
  },
]

const certificates = [
  {
    name: 'SQL (Intermediate)',
    description:
      'This certificate validates my intermediate-level skills in SQL. It highlights my capability to handle more complex data operations, including advanced querying, database optimization, and data manipulation tasks.',
    tags: [
      {
        name: 'sql',
        color: 'blue-text-gradient',
      },
      {
        name: 'database',
        color: 'green-text-gradient',
      },
      {
        name: 'dataset',
        color: 'pink-text-gradient',
      },
    ],
    company: hackerrank,
    image: sqlInt,
    source_code_link: 'https://www.hackerrank.com/certificates/a6ee8f2ae4b7',
  },
  {
    name: 'Blockchain Basics',
    description:
      'This certificate acknowledges my foundational understanding of blockchain technology. It demonstrates my grasp of the fundamental concepts behind blockchain, distributed ledgers, and their potential applications in various industries.',
    tags: [
      {
        name: 'blockchain',
        color: 'blue-text-gradient',
      },
      {
        name: 'transparency',
        color: 'green-text-gradient',
      },
      {
        name: 'ledger',
        color: 'pink-text-gradient',
      },
    ],
    company: greatlearning,
    image: blockchain,
    source_code_link:
      'https://olympus.mygreatlearning.com/courses/13502/certificate',
  },
  {
    name: 'Relational Database and SQL Essentials',
    description:
      'This certificate confirms my adeptness in relational database concepts and SQL essentials. It validates my capability to design, manage databases, and execute efficient data operations using SQL.',
    tags: [
      {
        name: 'sql',
        color: 'blue-text-gradient',
      },
      {
        name: 'database',
        color: 'green-text-gradient',
      },
      {
        name: 'dataset',
        color: 'pink-text-gradient',
      },
    ],
    company: amigoscode,
    image: amigosDatabase,
    source_code_link: 'https://amigoscode.com/courses/515567/certificate',
  },
  {
    name: 'Git and GitHub Essentials',
    description:
      'This certificate attests to my proficiency in utilizing Git version control and GitHub for collaborative software development. It demonstrates my competence in managing code repositories, facilitating teamwork, and ensuring effective version tracking.',
    tags: [
      {
        name: 'git',
        color: 'blue-text-gradient',
      },
      {
        name: 'github',
        color: 'green-text-gradient',
      },
      {
        name: 'repositories',
        color: 'pink-text-gradient',
      },
    ],
    company: amigoscode,
    image: amigosGithub,
    source_code_link: 'https://amigoscode.com/courses/1317178/certificate',
  },
  {
    name: 'Java for Beginners',
    description:
      'This certificate signifies my foundational understanding of the Java programming language. It highlights my ability to write and comprehend basic Java code, laying the groundwork for more advanced software development.',
    tags: [
      {
        name: 'oop',
        color: 'blue-text-gradient',
      },
      {
        name: 'java',
        color: 'green-text-gradient',
      },
      {
        name: 'classes',
        color: 'pink-text-gradient',
      },
    ],
    company: amigoscode,
    image: amigosJava,
    source_code_link: 'https://amigoscode.com/courses/1120384/certificate',
  },
  {
    name: 'Spring Boot for Beginners',
    description:
      'This certification validates my introductory knowledge of Spring Boot, showcasing my ability to create and deploy simplified, efficient, and production-ready Java web applications.',
    tags: [
      {
        name: 'spring boot',
        color: 'blue-text-gradient',
      },
      {
        name: 'spring security',
        color: 'green-text-gradient',
      },
      {
        name: 'services',
        color: 'pink-text-gradient',
      },
    ],
    company: amigoscode,
    image: amigosSpring,
    source_code_link: 'https://amigoscode.com/courses/267273/certificate',
  },
  {
    name: 'Introduction to Cybersecurity',
    description:
      'This certificate confirms my foundational understanding of cybersecurity principles and concepts. It highlights my grasp of essential cybersecurity practices and techniques for safeguarding digital assets and data.',
    tags: [
      {
        name: 'cybersecurity',
        color: 'blue-text-gradient',
      },
      {
        name: 'integrity',
        color: 'green-text-gradient',
      },
      {
        name: 'cryptography',
        color: 'pink-text-gradient',
      },
    ],
    company: cisco,
    image: ciscoCybersecurity,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    description:
      'This certification underlines my proficiency in JavaScript algorithms and data structures. It demonstrates my ability to implement efficient solutions to complex problems, showcasing my skills in coding and problem-solving.',
    tags: [
      {
        name: 'problem-solving',
        color: 'blue-text-gradient',
      },
      {
        name: 'destructuring',
        color: 'green-text-gradient',
      },
      {
        name: 'props',
        color: 'pink-text-gradient',
      },
    ],
    company: fcc,
    image: fccJavascript,
    source_code_link:
      'https://www.freecodecamp.org/certification/fkd/javascript-algorithms-and-data-structures',
  },
  {
    name: 'Scientific Computing With Python',
    description:
      ' This certificate highlights my expertise in utilizing Python for scientific computing tasks. It validates my proficiency in data manipulation, analysis, and visualization, emphasizing my ability to apply Python to solve scientific and mathematical challenges.',
    tags: [
      {
        name: 'scientific computing',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
      {
        name: 'analysis',
        color: 'pink-text-gradient',
      },
    ],
    company: fcc,
    image: fccPython,
    source_code_link:
      'https://freecodecamp.org/certification/fkd/scientific-computing-with-python-v7',
  },
]

const awards = [
  {
    name: 'MINESEC Excellence Prize, First Edition 2017',
    description:
      'In 2017, I was honored to receive the MINESEC Excellence Prize in Yaoundé from the Minister of Secondary Education.',
    tags: [
      {
        name: 'yaoundé',
        color: 'blue-text-gradient',
      },
      {
        name: 'minesec',
        color: 'green-text-gradient',
      },
      {
        name: '2017',
        color: 'pink-text-gradient',
      },
    ],
    image: prob,
    source_code_link: 'https://demofkd.netlify.app/achievement-2017.pdf',
  },
  {
    name: 'MINESEC Excellence Prize, Second Edition 2018',
    description:
      'In 2017, I was once again honored to receive the MINESEC Excellence Prize in Yaoundé from the Minister of Secondary Education.',
    tags: [
      {
        name: 'yaoundé',
        color: 'blue-text-gradient',
      },
      {
        name: 'minsec',
        color: 'green-text-gradient',
      },
      {
        name: '2018',
        color: 'pink-text-gradient',
      },
    ],
    image: bacc,
    source_code_link: 'https://demofkd.netlify.app/achievement-2018.pdf',
  },
]

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
  awards,
}
