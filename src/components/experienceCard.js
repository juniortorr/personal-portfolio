import gitHub from '../images/github-logo-mobile.png';
import share from '../images/share.png';

export default function card(project) {
  return `
    <img
      src=${project.img}
      alt="micamera studios photography website project"
    />
    <div class="card-text">
      <div class="card-heading">
        <div class="card-heading-text">
          <h3 class="project-title">${project.title}</h3>
          <p class="card-subheading">${project.subheading}</p>
        </div>
        <div class="card-icons">
          <img src=${gitHub} alt="github link" />
          <img src=${share} alt="share with others link" />
        </div>
      </div>
      <p class="project-para">
        ${project.description}
      </p>
    </div>
 `;
}
