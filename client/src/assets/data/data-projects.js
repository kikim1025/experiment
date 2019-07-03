//----------Data for Projects to be shown----------

// Data for projects tab
export const PROJECTS_ARR = [
    {
        title: '{this}',
        img: 'this.png',
        keywords: ['Frontend', 'React.js', 'Redux', 'CSS3', 'SASS', 'SVG',],
        desc: 'This website is a React.js Redux frontend app for my portfolio. This application shows React.js Redux application architecture and uses personal arts and CSS styles. All SVG images, including the background, are drawn by hand and inkscape.',
        github: 'https://github.com/kikim1025/Portfolio',
        deployed: 'https://kikim1025.github.io/Portfolio/'
    },
    {
        title: 'React Calculator',
        img: 'rc.png',
        keywords: ['Frontend', 'React.js', 'Redux', 'Redux Middleware', 'Demo'],
        desc: 'A simple frontend app, written to demonstarte React.js and Redux architecture and methodologies. This frontend app functions as a virtual calculator. The Redux stores the math displayed on the screen and provides actions upon each button click to update the math. Upon each button inputs, the redux middleware process and logic will determine whether or not current input is valid and update the display accordingly with either a result or an error message. In terms of components, Redux is connected to a CalculatorContainer component, thereby providing connection to the presentational sub-components which constructs the way the UI looks. Detailed explanations on React Redux architecture and logic are shown on the readme file on the github repository page.',
        github: 'https://github.com/kikim1025/Reacting-Calculadora',
        deployed: 'https://kikim1025.github.io/Reacting-Calculadora/'
    },
    {
        title: 'Sticky Messages',
        img: 'sticky-messages.png',
        keywords: ['MERN', 'Full Stack', 'RESTful API', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
        desc: 'A MERN full-stack app that users can post sticky-messages to each other. This application primarily uses Node.js, Express.js, React.js and MongoDB to deploy a website users can log in and post messages to another user in a message board. On the backend, server is created using Node.js and Express.js, using RESTful API to communicate with client. MongoDB contains user data such as login, password, or user messages and their contents. The backend uses NPM packets such as Bcrypt to encrypt user passwords, and JSON Web Token for user authentification. On the frontend, the client code is written using React.js, using a sticky post-it themed style for each messages.',
        github: 'https://github.com/kikim1025/Sticky-Messages',
        deployed: 'https://sticky-messages.herokuapp.com/'
    }
];