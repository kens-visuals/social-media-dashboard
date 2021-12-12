const body = document.body;
const checkbox = document.querySelector('.js-checkbox');
const checkboxSpan = document.querySelector('.js-checkbox-span');
const preferenceQuery = window.matchMedia('(prefers-color-scheme: dark)');

const addDarkMode = () => {
  checkboxSpan.classList.remove('is-checked');
  checkbox.setAttribute('checked', true);
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
};

const addLightMode = () => {
  checkboxSpan.classList.add('is-checked');
  checkbox.removeAttribute('checked');
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
};

const toggleTheme = () =>
  !body.classList.contains('dark-mode') ? addDarkMode() : addLightMode();

const checkPreference = () =>
  preferenceQuery.matches && window.matchMedia ? addDarkMode() : addLightMode();

checkbox.addEventListener('click', toggleTheme);
// preferenceQuery.addEventListener('change', checkPreference);
// window.addEventListener('DOMContentLoaded', checkPreference);
