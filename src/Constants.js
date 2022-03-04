import BLOGGER from "./Assets/Projects/BLOGGER.jpg";
import EDUCATION_SYSTEM from "./Assets/Projects/EDUCATION-SYSTEM.jpg";
import HEALTH_SYSTEM from "./Assets/Projects/HEALTH-SYSTEM.jpg";



export const PROJECTS = [
  {
    image: EDUCATION_SYSTEM,
    name: "Education System",
    technologyUsed: "ReactJs, NodeJs, ExpressJs,MongoDb",
    description: "A database management app that can track the entire school's population and assigned students and teachers",
    url: "https://education-system.netlify.app/",
  },
  {
    image: BLOGGER,
    name: "Blogger",
    technologyUsed: "ReactJs, NodeJs, ExpressJs,MongoDb",
    description: "A simple blog app that can take in comments for each posts, from other users",
    url: "https://mypersonalblogger.netlify.app/",
  },
  {
    image: HEALTH_SYSTEM,
    name: "Helath System",
    technologyUsed: "ReactJs, NodeJs, ExpressJs,MongoDb",
    description: "A information storage system for a hospital and their parents with admin portal facility",
    url: "https://health-system.netlify.app/",
  }
];

export const SKILLS = [
  { name: "ReactJS", initialRating: 4 },
  { name: "ExpressJS", initialRating: 4 },
  { name: "JavaScript", initialRating: 4 },
  { name: "NodeJS", initialRating: 3 },
  { name: "HTML", initialRating: 4 },
  { name: "CSS", initialRating: 4 },
  { name: "Material UI", initialRating: 4 },
  { name: "MongoDB", initialRating: 4 },
  { name: "MySQL", initialRating: 4 },
  { name: "Git", initialRating: 4 }
];

export const TOOLS = ["Visual Studio Code", "Git", "MongoDB Compass", "Npm (Node Package Manager)", "MySQL Workbench", "Netlify", "Heroku", "Postman"]
