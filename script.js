
const toggleBtn = document.getElementById('toggleBtn');
const mobileNav = document.getElementById('mobileNav');
const toggleClose = document.getElementById('toggleClose');

toggleBtn.addEventListener('click', () => {
    mobileNav.style.left = '0';
});

toggleClose.addEventListener('click', () => {
    mobileNav.style.left = '-100%';
});


document.querySelectorAll('.contentq .label').forEach(label => {
    label.addEventListener('click', () => {
      const contentq = label.parentElement;
      const isActive = contentq.classList.contains('active');
  
      // Collapse all other open content sections
      document.querySelectorAll('.contentq').forEach(item => item.classList.remove('active'));
  
      // Toggle the clicked section
      if (!isActive) {
        contentq.classList.add('active');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      threshold: 0.15, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      });
    }, observerOptions);

    // Target all elements with the 'observe' class
    const elements = document.querySelectorAll('.observe');
    elements.forEach(element => observer.observe(element));
  });

