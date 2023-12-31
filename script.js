const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  // Toggle Nav
  nav.classList.toggle('nav-active');

  // Animate Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `fadeInRight 0.5s ease-in-out forwards ${index / 7 + 0.5}s`;
    }
  });

  // Burger Animation
  burger.classList.toggle('toggle');
});

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  if (window.pageYOffset > 0) {
    header.style.backgroundColor = '#333333';
  } else {
    header.style.backgroundColor = '#ffffff';
  }
});
