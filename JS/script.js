// Agrega o quita una sombra al navbar al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  if (window.scrollY > 50) navbar.classList.add('shadow');
  else navbar.classList.remove('shadow');
});

/* IntersectionObserver: efecto para que las secciones "aparezcan" al hacer scroll.
   (Se añaden clases .hidden-section al cargar y .show-section cuando entran en pantalla)
*/
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('section');
  const options = { threshold: 0.12 };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-section');
        obs.unobserve(entry.target);
      }
    });
  }, options);

  elements.forEach(el => {
    el.classList.add('hidden-section');
    observer.observe(el);
  });
});
