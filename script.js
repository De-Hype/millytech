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
  