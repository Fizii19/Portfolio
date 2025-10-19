// ==================== TYPEWRITER EFFECT ====================
const app = document.getElementById('app');
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('Developer')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Designer')
  .pauseFor(2000)
  .deleteAll()
  .typeString('Creator')
  .pauseFor(2000)
  .start();

// ==================== HAMBURGER MENU TOGGLE ====================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// ==================== NAVBAR SCROLL EFFECT ====================
// Navbar mengecil dan mengapung saat scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ==================== SMOOTH SCROLLING ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== LOADER ====================
const loader = document.querySelector('.wrapper-loader');

window.onload = () => {
  setTimeout(() => {
    document.querySelector('body').style.overflow = 'auto';
    loader.classList.add('hidden');
  }, 2000);
};