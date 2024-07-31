document.addEventListener('DOMContentLoaded', function() {
  // Hide the overlay menu when the page is loaded
  const overlayMenu = document.getElementById('overlay-menu');
  overlayMenu.style.display = 'none';

  // Open the overlay menu on hamburger click
  document.querySelector('.hamburger-menu').addEventListener('click', function() {
    overlayMenu.style.display = 'flex';
  });

  // Close the overlay menu on close button click
  document.querySelector('.close-menu').addEventListener('click', function() {
    overlayMenu.style.display = 'none';
  });

  // Smooth scroll and close menu on link click
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
      overlayMenu.style.display = 'none'; // Close menu after clicking a link
      setTimeout(() => {
        target.classList.add('visible'); // Add visible class to trigger animation
      }, 500); // Adjust timing as needed
    });
  });

  // Intersection Observer to handle content visibility
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.content').forEach(section => {
    observer.observe(section);
  });
});
