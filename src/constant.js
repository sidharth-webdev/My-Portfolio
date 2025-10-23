import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import typescriptLogo from './assets/tech_logo/typescript.png';

//Education section logo's
import BputLogo from './assets/education_logo/BputLogo.png';
import SctevtLogo from './assets/education_logo/SctevtLogo.png';

// Project Section Logo's
import hotelmanagementLogo from './assets/work_logo/hotelmanagement.png';
import weatherLogo from './assets/work_logo/weather.png';
import teacherappointmentbookingLogo from './assets/work_logo/teacherappointmentbooking.png';
import fakestoreLogo from './assets/work_logo/fakestore.png';


export const SkillsInfo = [ 
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name:'Typescript', logo: typescriptLogo},
    ],
  },
  {
    title: 'Backend',
    skills: [ 
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      image: BputLogo,
      school: "Adarsha College of Engineering, Angul, Odisha",
      date: "Aug 2021 - June 2024",
      grade: "7.9 CGPA",
      desc: "A results-driven Computer Science Engineering graduate with hands-on experience in front-end and full-stack development. Skilled in JavaScript, React, and modern web tools, I aim to create seamless digital experiences while constantly improving my technical and problem-solving abilities.",
      degree: "Computer Science & Engineering - CSE", 
    },
    {
      id: 1,
      image: SctevtLogo,
      school: "Adarsha School of Engineering & International Polytechnic, Angul, Odisha",
      date: "Sept 2018 - July 2021",
      grade: "92.4%",
      desc: "I have completed a Diploma in Mechanical Engineering with a focus on core subjects like mechanics, thermodynamics, and manufacturing. It gave me a solid technical foundation for further studies in engineering.",
      degree: " Diploma of Mechanical Engineering ",
    }, 
  ];
   
  export const projects = [
    {
      id: 0,
      title: "Weather App",
      description:"A weather forecasting web app that provides real-time temperature, humidity, and condition updates using the OpenWeather API. Developed with React and styled for a clean, responsive user interface.",
      image:weatherLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/sidharth-webdev/Weather-App",
    },
    { 
      id: 1,  
      title: "Student Teacher Appointment Booking",
      description:"A web application that allows students to book appointments with teachers, view schedules, and manage sessions using Firebase for authentication and data storage.",
      image:teacherappointmentbookingLogo,
      tags: ["HTML", "CSS", "JavaScript", "FireBase"],
      github: "https://github.com/sidharth-webdev/student-teacher-app",
    },
    {
      id: 2,
      title: "Fakestore",
      description:"An e-commerce web app built using FakeStoreAPI to display products with category-based filtering, product details, and a responsive user interface — similar to Amazon or Flipkart.",
      image: fakestoreLogo,
      tags: ["React JS", "API", "HTML", "CSS","Bootstrap", "JavaScript"],
      github: "https://github.com/sidharth-webdev/Fakestore-App", 
    },
    { 
      id: 3,
      title: "Hotel Booking Web App",
      description:"A hotel management web app built using HTML, CSS, JavaScript, and Bootstrap. It allows users to register for rooms, select room types and amenities, calculate total cost, and view a detailed booking summary dynamically.",
      image: hotelmanagementLogo,
      tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      github: "https://github.com/sidharth-webdev/Hotel-management",
    },
  ];           