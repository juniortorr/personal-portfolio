import projects from './experience';
import card from './experienceCard';
import sendEmail from '../emailData';

const container = document.querySelector('.card-collection');
const form = document.querySelector('form');

function handleSubmit(e) {
  e.preventDefault();
  const name = document.querySelector('#first-name').value;
  const email = document.querySelector('#email').value;
  const text = document.querySelector('#request').value;
  const btn = document.querySelector('.send');
  if (sendEmail(name, email, text)) {
    btn.classList.add('success');
    btn.textContent = 'Sent!';
  } else {
    btn.classList.add('fail');
  }
}

form.addEventListener('submit', handleSubmit);

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
