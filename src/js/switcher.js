const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const switcherRef = document.getElementById('theme-switch-toggle');
const bodyRef = document.querySelector('body');

switcherRef.addEventListener('click', toggleTheme);
  
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  themeName === Theme.DARK 
    ? bodyRef.classList.replace(Theme.LIGHT, Theme.DARK)
    : bodyRef.classList.replace(Theme.DARK, Theme.LIGHT);
}

function toggleTheme() {
  switcherRef.checked
    ? setTheme(Theme.DARK)
    : setTheme(Theme.LIGHT);
}

if (localStorage.getItem('theme') === Theme.DARK) {
  switcherRef.setAttribute('checked', 'true');
  toggleTheme();
} 



