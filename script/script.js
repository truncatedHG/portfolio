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
      delay: anime.stagger(100),
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

    anime({
      targets: '.content',
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1200,
      delay: anime.stagger(100),
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

    const dialog = document.getElementById('img-dialog');

    function openDialog(btn) {
      const img = btn.querySelector('img');
      document.getElementById('dialog-img').src = btn.dataset.src;
      document.getElementById('dialog-img').alt = btn.dataset.caption;
      document.getElementById('dialog-caption').textContent = btn.dataset.caption;
    
      dialog.showModal();
    
      anime({
        targets: '#img-dialog',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutBack'
      });
    }
    
    function closeDialog() {
      anime({
        targets: '#img-dialog',
        opacity: [1, 0],
        scale: [1, 0.8],
        duration: 200,
        easing: 'easeInQuad',
        complete: () => dialog.close()
      });
    }
    
    document.querySelectorAll('.image').forEach(btn => {
      btn.addEventListener('click', () => openDialog(btn));
    });
    
    document.getElementById('close-btn').addEventListener('click', closeDialog);
    
    dialog.addEventListener('click', e => {
      if (e.target === dialog) closeDialog();
    });
    
    dialog.addEventListener('cancel', e => {
      e.preventDefault();
      closeDialog();
    });

    
  });