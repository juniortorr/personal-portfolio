const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector('.contact').classList.add('grow');
    }
  });
});
observer.observe(document.querySelector('.contact'));
