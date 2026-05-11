document.addEventListener('DOMContentLoaded', () => {

    // ── Burger ──────────────────────────────────────
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach(el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  
    // ── Animations ──────────────────────────────────
    anime({
      targets: '.title',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: 600,
      easing: 'easeOutElastic'
    });
  
    anime({
      targets: '.navbar-item',
      translateY: [-20, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: anime.stagger(300),
      easing: 'easeOutElastic'
    });
  
    anime({
      targets: '.name',
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: anime.stagger(200),
      easing: 'easeOutElastic'
    });
  
    // ── Hover effects ────────────────────────────────
    document.querySelectorAll('.navbar-item').forEach(item => {
      item.addEventListener('mouseenter', () => {
        anime({
          targets: item,
          translateY: -5,
          duration: 300,
          easing: 'easeOutExpo'
        });
      });
  
      item.addEventListener('mouseleave', () => {
        anime({
          targets: item,
          translateY: 0,
          duration: 300,
          easing: 'easeOutExpo'
        });
      });
    });
  
  });