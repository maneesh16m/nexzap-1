document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.getElementById('overlay-menu').style.display = 'flex';
});

document.querySelector('.close-menu').addEventListener('click', function() {
  document.getElementById('overlay-menu').style.display = 'none';
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
    document.getElementById('overlay-menu').style.display = 'none'; // Close menu after clicking a link
    setTimeout(() => {
      target.classList.add('visible'); // Add visible class to trigger animation
    }, 500); // Adjust timing as needed
  });
});

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
