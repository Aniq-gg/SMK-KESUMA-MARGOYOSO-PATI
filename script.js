// === MENU TOGGLE UNTUK MOBILE ===
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  // === SMOOTH SCROLL UNTUK NAVBAR ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // === POPUP UNTUK PENGUMUMAN & EKSTRAKURIKULER ===
  const popupTriggers = document.querySelectorAll('.popup-trigger');
  const popupModal = document.getElementById('popup-modal');
  const popupImg = document.getElementById('popup-img');
  const popupTitle = document.getElementById('popup-title');
  const popupClose = document.querySelector('.popup-close');

  if (popupTriggers.length && popupModal && popupImg && popupTitle && popupClose) {
    popupTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        popupImg.src = trigger.dataset.img || '';
        popupTitle.textContent = trigger.dataset.title || '';
        popupModal.style.display = 'flex';
      });
    });

    popupClose.addEventListener('click', () => {
      popupModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === popupModal) {
        popupModal.style.display = 'none';
      }
    });
  }

  // === ANIMASI MASUK WEBSITE ===
  document.body.style.opacity = 0;
  document.body.style.transform = "translateY(20px)";
  document.body.style.transition = "opacity 0.8s ease, transform 0.8s ease";

  setTimeout(() => {
    document.body.style.opacity = 1;
    document.body.style.transform = "translateY(0)";
  }, 100);

  // === ANIMASI SCROLL FADE-IN ===
  const faders = document.querySelectorAll(
    '.berita-card, .prestasi-card, .guru-card, .fasilitas-card, .industri-card'
  );
  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    });
  }, options);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

 // === CUSTOM CURSOR DENGAN EFEK SMOOTH ===
document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.createElement('div');
  cursor.id = 'custom-cursor';
  document.body.appendChild(cursor);

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animate() {
    cursorX += (mouseX - cursorX) * 0.2; // Smooth
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animate);
  }
  animate();

  document.addEventListener('click', function () {
    cursor.classList.add('click');
    setTimeout(() => cursor.classList.remove('click'), 300);
  });

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
});


  // === EFEK HOVER DINAMIS PADA CARD ===
  document.querySelectorAll(
    '.berita-card, .prestasi-card, .guru-card, .fasilitas-card, .industri-card'
  ).forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
});
