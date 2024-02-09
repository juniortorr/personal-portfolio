const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const projects = document.querySelectorAll('.experience-card');
      projects.forEach((project) => {
        project.classList.add('fade-in');
      });
    }
  });
});
observer.observe(document.querySelector('.experience'));
