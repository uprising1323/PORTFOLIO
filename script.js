// Mobile nav toggle
const navToggleButton = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-navigation');
if (navToggleButton && primaryNav) {
  navToggleButton.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggleButton.setAttribute('aria-expanded', String(isOpen));
  });
}

// Scroll reveal
const revealEls = Array.from(document.querySelectorAll('.reveal'));
const onIntersect = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
};
const observer = new IntersectionObserver(onIntersect, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// Year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Testimonials slider
const testimonials = document.querySelectorAll('.testimonials-slider .testimonial');
const leftArrow = document.querySelector('.testimonial-arrow.left');
const rightArrow = document.querySelector('.testimonial-arrow.right');
const dots = document.querySelectorAll('.testimonial-dots .dot');
let currentTestimonial = 0;

function showTestimonial(idx) {
  testimonials.forEach((el, i) => {
    el.classList.toggle('active', i === idx);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });
}

if (testimonials.length) {
  showTestimonial(currentTestimonial);
  if (leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
    rightArrow.addEventListener('click', () => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    });
  }
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentTestimonial = i;
      showTestimonial(currentTestimonial);
    });
  });
}


