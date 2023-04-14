const projectButtons = document.querySelectorAll('.project-button');
const darkModeToggle = document.getElementById('dark-mode-toggle');

projectButtons[0].addEventListener('click', () => {
  window.location.href = 'https://www.un.org/sustainabledevelopment/goal5/';
});

projectButtons[1].addEventListener('click', () => {
  window.location.href = 'https://www.un.org/sustainabledevelopment/goal4/';
});

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});