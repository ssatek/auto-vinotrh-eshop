document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('mainNav');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 60);
  }, { passive: true });

  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  const hamburger = document.getElementById('navHamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  function closeMenu() {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.getElementById('mobileMenuClose').addEventListener('click', closeMenu);

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Lightbox
  const lightbox     = document.getElementById('lightbox');
  const lightboxImg  = document.getElementById('lightboxImg');
  const lightboxCap  = document.getElementById('lightboxCaption');
  const lightboxCnt  = document.getElementById('lightboxCounter');
  const lightboxBack = lightbox.querySelector('.lightbox__backdrop');

  const galleryItems = [...document.querySelectorAll('[data-lightbox]')];
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    const img = galleryItems[index].querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCap.textContent = img.alt;
    lightboxCnt.textContent = `${index + 1} / ${galleryItems.length}`;
    lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  function showPrev() {
    openLightbox((currentIndex - 1 + galleryItems.length) % galleryItems.length);
  }

  function showNext() {
    openLightbox((currentIndex + 1) % galleryItems.length);
  }

  galleryItems.forEach((item, i) => item.addEventListener('click', () => openLightbox(i)));
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', showPrev);
  document.getElementById('lightboxNext').addEventListener('click', showNext);
  lightboxBack.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape')    closeLightbox();
    if (e.key === 'ArrowLeft')  showPrev();
    if (e.key === 'ArrowRight') showNext();
  });

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      btn.textContent = 'Odesláno ✓';
      btn.disabled = true;
      btn.style.background = '#4a7c35';
      btn.style.borderColor = '#4a7c35';
    });
  }
});
