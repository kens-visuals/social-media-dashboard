const btn = document.querySelector('button');
const checkbox = document.querySelector('.js-checkbox');

checkbox.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
  }
});

var preference_query = window.matchMedia('(prefers-color-scheme: dark)');

function checkPreference(query) {
  if (query.matches) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
  }
}

window.addEventListener('DOMContentLoaded', checkPreference(preference_query));
