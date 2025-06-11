  // Get the current year dynamically
  document.getElementById('year').textContent = new Date().getFullYear();

  // Menu toggle handler
  const toggleButton = document.getElementById('toggle-button');
  const mobileMenu = document.querySelector('.mobileMenu');
  toggleButton.addEventListener('click', () => {
      if (mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.remove('hidden');
          mobileMenu.classList.add('flex');
      }
      else {
          mobileMenu.classList.remove('flex');
          mobileMenu.classList.add('hidden');
      }
  });