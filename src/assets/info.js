import {
    FaGithub,
    FaLinkedin,
    FaFileAlt
} from 'react-icons/fa';

const links = [
    {
        "name": "Github",
        "desc": "My Github",
        "url": "https://github.com/JtheFox/",
        "icon": FaGithub
    },
    {
        "name": "LinkedIn",
        "desc": "My LinkedIn",
        "url": "https://www.linkedin.com/in/jason-fox-878262197/",
        "icon": FaLinkedin
    },
    {
        "name": "Resume",
        "desc": "My Resume",
        "url": "#",
        "icon": FaFileAlt
    }
]
// Link template
// {
//     "name": "",
//     "desc": "",
//     "url": "",
//     "active": true,
//     "fa_icon": ""
// }

const projects = [
    {
        "date": "April 2022",
        "title": "Chopping Block",
        "image": "https://i.imgur.com/boSEAIT.png",
        "live": undefined,
        "repo": "https://github.com/FidelHen/Chopping-Block",
        "tags": ["React Native", "Firebase"],
        "desc": "This was my capstone group project in college. I came up with the idea for the project as a unique take on discovering local restaurants using the Yelp API, allowing recommendations to be influenced by preferences set by the user. My primary in this project was scrum master, and I took care of the project management tasks during each sprint. I also aided in development of the app."
    },
    {
        "date": "May 2022",
        "title": "Password Generator",
        "image": "https://i.imgur.com/F24PmtE.png",
        "live": "https://jthefox.github.io/password-generator/",
        "repo": "https://github.com/JtheFox/password-generator",
        "tags": ["HTML", "CSS", "JS"],
        "desc": "This was the first real website I built from scratch as I was learning the basics of web development, using RandExp for the random string generation. This was also my first time creating my own ui, as well as adapting the ui to be responsive and mobile-friendly."
    },
    {
        "date": "May 2022",
        "title": "Weather Dashboard",
        "image": "https://i.imgur.com/IZ72hZt.png",
        "live": "https://jthefox.github.io/weather-dashboard/",
        "repo": "https://github.com/JtheFox/weather-dashboard",
        "tags": ["Bootstrap", "jQuery"]
    },
    {
        "date": "June 2022",
        "title": "Somewhere.",
        "image": "https://i.imgur.com/AnQy3h7.png",
        "live": "https://jthefox.github.io/somewhere-project/",
        "repo": "https://github.com/JtheFox/somewhere-project",
        "tags": ["HTML", "CSS", "jQuery"],
        "desc": "This was a group project based on an idea I had where users could discover and see facts about countries, particularly smaller and more obscure places that can be more easily found by using a max population filter. I designed the majority of the ui myself, including the state change logic for homepage and results displays, most importantly the styling and animations of the components on the home page."
    },
    {
        "date": "July 2022",
        "title": "Blastoff",
        "image": "https://raw.githubusercontent.com/JtheFox/blastoff/main/public/images/launch.png",
        "live": "https://blastoff2.herokuapp.com/",
        "repo": "https://github.com/JtheFox/blastoff",
        "tags": ["Express", "Handlebars", "Sequelize"],
        "desc": "This was a group project designed to utilize the SpaceX API and was my first project involving backend development and persistent user data. I designed the ui using Bulma with additional custom styling. I also did a heavy amount of work implementing the routes and database interactions using Express and Sequelize."
    },
]
// Project template
// {
//     "date": "",
//     "title": "",
//     "image": "",
//     "live": "",
//     "repo": "",
//     "tags": [],
//     "desc": ''
// }

const about = {
    statement: 'I am a web developer and recent CS graduate eager to dive into the world of web development. I have experience in the agile process and project management. I am primarily familiarized with the MERN stack, but I am a fast learner and interested in picking any framework, API, or other development tool needed to complete a task or project.',
    tools: [
        "VSCode",
        "Github",
        "Google Workspace",
        "Adobe Creative Suite",
        "Figma",
        "Canva",
        "Slack"
    ],
    languages: [
        "HTML5",
        "CSS",
        "JavaScript",
        "NodeJS",
        "Express.js",
        "React",
        "Next.js",
        "MySQL",
        "MongoDB",
    ],
    skills: [
        'User-First Thinking',
        'Problem Solving',
        'Project Management Tools',
        'Strong Communication',
        'Web Design',
        'Wireframe Creation'
    ]
}

const sourceCode = ''

export { links, projects, about, sourceCode };