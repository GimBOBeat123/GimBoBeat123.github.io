const targets = document.querySelectorAll('.section, .project, .card, .timeline li');
targets.forEach((el) => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

targets.forEach((el) => io.observe(el));
