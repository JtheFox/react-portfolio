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
        "image": "https://i.imgur.com/Y5MsQDC.png",
        "live": "#",
        "repo": "https://github.com/FidelHen/Chopping-Block",
        "tags": ["React Native", "Firebase"]
    },
    {
        "date": "May 2022",
        "title": "Password Generator",
        "image": "https://i.imgur.com/F24PmtE.png",
        "live": "https://jthefox.github.io/password-generator/",
        "repo": "https://github.com/JtheFox/password-generator",
        "tags": ["HTML", "CSS", "JS"]
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
        "tags": ["HTML", "CSS", "jQuery"]
    },
    {
        "date": "July 2022",
        "title": "Blastoff",
        "image": "https://raw.githubusercontent.com/JtheFox/blastoff/main/public/images/launch.png",
        "live": "https://blastoff2.herokuapp.com/",
        "repo": "https://github.com/JtheFox/blastoff",
        "tags": ["Express", "Handlebars", "Sequelize"]
    },
]
// Project template
// {
//     "date": "",
//     "title": "",
//     "image": "",
//     "live": "",
//     "repo": "",
//     "tags": []
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

export { links, projects, about };