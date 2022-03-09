import BLOGGER from "./Assets/Projects/BLOGGER.jpg";
import EDUCATION_SYSTEM from "./Assets/Projects/EDUCATION-SYSTEM.jpg";
import HEALTH_SYSTEM from "./Assets/Projects/HEALTH-SYSTEM.jpg";
import SHOPPER from './Assets/Projects/SHOPPER.jpg'



export const PROJECTS = [
  {
    image: EDUCATION_SYSTEM,
    name: "Education System",
    technologyUsed: "ReactJs, NodeJs, ExpressJs,MongoDb",
    description: "A database management app that can track the entire school's population and assigned students and teachers",
    url: "https://education-system.netlify.app/",
    GitFrontEndLink: "https://github.com/Giricr7/EducationSystem-frontend.git",
    GitBackEndLink: "https://github.com/Giricr7/EducationSystem-backend.git"
  },
  {
    image: BLOGGER,
    name: "Blogger",
    technologyUsed: "ReactJs, NodeJs, ExpressJs,MongoDb",
    description: "A simple blog app that can take in comments for each posts, from other users",
    url: "https://mypersonalblogger.netlify.app/",
    GitFrontEndLink: "https://github.com/Giricr7/Blogger-frontend.git",
    GitBackEndLink: "https://github.com/Giricr7/Blogger-backend.git"
  },
  {
    image: HEALTH_SYSTEM,
    name: "Helath System",
    technologyUsed: "ReactJs, NodeJs, ExpressJs,MongoDb",
    description: "A information storage system for a hospital and their patients with admin portal facility",
    url: "https://health-system.netlify.app/",
    GitFrontEndLink: "https://github.com/Giricr7/HealthSystem-frontend.git",
    GitBackEndLink: "https://github.com/Giricr7/HealthSystem-backend.git"
  },
  {
    image: SHOPPER,
    name: "Shopper",
    technologyUsed: "ReactJs, NodeJs, ExpressJs,MongoDb",
    description: "A common platform to buy variety of books and novels written by great authors",
    url: "https://shopper-frontend.netlify.app/",
    GitFrontEndLink: "https://github.com/Giricr7/Blogger-frontend.git",
    GitBackEndLink: "https://github.com/Giricr7/Blogger-backend.git"
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
