// CCHS Esports Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // Set current year in footer
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Mobile navigation toggle
  const navToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Interest Form Button placeholder hook
  const interestBtn = document.getElementById('interestFormBtn');
  if (interestBtn) {
    interestBtn.addEventListener('click', (e) => {
      // If href is still #, inform student to speak with Coach Mendez or add link
      if (interestBtn.getAttribute('href') === '#') {
        e.preventDefault();
        alert('Interest form link coming soon! See Coach Mendez in the CCHS Esports Lab after school.');
      }
    });
  }
});
