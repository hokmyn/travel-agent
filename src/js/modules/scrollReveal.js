import ScrollReveal from 'scrollreveal';

function scrollRevealFunc() {
  ScrollReveal({
    distance: '60px',
    duration: 2000,
  });

  ScrollReveal().reveal('.popular__title', {
    origin: 'top',
  });

  ScrollReveal().reveal('.discover__pic-hint, .discover__title', {
    origin: 'left',
  });

  ScrollReveal().reveal('.discover__pic-scroll, .discover__text, .popular__controls', {
    origin: 'right',
  });

  ScrollReveal().reveal('.discover__form', {
    origin: 'bottom',
  });
}

export default scrollRevealFunc;