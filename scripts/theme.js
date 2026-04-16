// MECHANICS

(function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'auto';
  setTheme(savedTheme);
})();


document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.theme-button');
  localStorage.getItem('theme') &&
    setDisabledButton(themeButtons, localStorage.getItem('theme'));
  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const buttonTheme = [...button.classList]
        .find((className) => {
          return className.startsWith('theme-button_theme_');
        })
        .replace('theme-button_theme_', '');
      setTheme(buttonTheme);
      setDisabledButton(themeButtons, buttonTheme);
    });
  });
});

// UTILS

function setTheme(theme) {
  document.documentElement.className = `${theme}-mode`;
  localStorage.setItem('theme', theme);
}

function setDisabledButton(themeButtons, theme) {
  const buttonToDisable = [...themeButtons].find((button) => {
    return [...button.classList].includes(`theme-button_theme_${theme}`);
  });

  if (buttonToDisable) {
    buttonToDisable.disabled = true;
  }

  [...themeButtons]
    .filter((button) => {
      return ![...button.classList].includes(`theme-button_theme_${theme}`);
    })
    .forEach((button) => {
      button.disabled = false;
    });
}