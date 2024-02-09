import projects from './experience';
import card from './experienceCard';

const container = document.querySelector('.card-collection');

export default (function domstuff() {
  const createProjectCards = () => {
    projects.forEach((project) => {
      const div = document.createElement('div');
      div.classList.add('experience-card');
      div.innerHTML = card(project);
      container.append(div);
      console.log('im broke');
    });
  };

  return { createProjectCards };
})();
