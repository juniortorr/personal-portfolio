import Micamera from '../images/micamera-studios.png';

class Project {
  constructor(title, subheading, description, img) {
    this.title = title;
    this.subheading = subheading;
    this.description = description;
    this.img = img;
  }

  print() {
    console.log(this);
  }
}

const micamera = new Project(
  'Micamera Studios',
  'Photography Web App',
  'Designed and developed a personalized, api linked application for client to funnel new interest and receive new lead information. Click on image to see live preview',
  Micamera
);

const battleship = new Project(
  'Battleship',
  'Game App',
  'A javascript heavy version of battleship. The AI will never make the same move twice. Click on image to see live preview',
  Micamera
);
const taskApp = new Project(
  'Task Organizer',
  'Productivity App',
  'A Javascript based app designed for keeping track of daily and weekly tasks. Click on image to see live preview',
  Micamera
);

const projects = [micamera, battleship, taskApp];

export default projects;
