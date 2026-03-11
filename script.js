document.addEventListener('DOMContentLoaded', function () {
  /* =========================
     HERO SLIDER (sirf Home page)
     ========================= */

  const slides = document.querySelectorAll('.hero-slide');
  let current = 0;

  function showSlide(index) {
    if (!slides.length) return; // agar slider hi nahi hai, kuch mat karo
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    if (!slides.length) return;
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevSlide() {
    if (!slides.length) return;
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // Buttons sirf tab attach karo jab wo exist karte hon (Home page)
  if (slides.length) {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');

    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
    }

    // Auto loop
    setInterval(nextSlide, 5000);

    // Pehla slide show
    showSlide(current);
  }

  /* =========================
     MOBILE NAV TOGGLE (har page)
     ========================= */

  const navToggle = document.querySelector('.nav-toggle');
  const headerBottomWrapper = document.querySelector('.header-bottom-wrapper');

  if (navToggle && headerBottomWrapper) {
    navToggle.addEventListener('click', function () {
      headerBottomWrapper.classList.toggle('nav-open');
    });
  }
});
