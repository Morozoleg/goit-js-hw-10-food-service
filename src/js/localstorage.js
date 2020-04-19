const refs = {
  body: document.querySelector('body'),
  switchInput: document.querySelector('.js-switch-input'),
};

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',

  savedThemeControl() {
    localStorage.getItem('theme') === this.DARK
      ? (this.controlSet(true), (refs.switchInput.checked = true))
      : this.controlSet(false);
  },

  controlSet(checked) {
    checked ? this.themeChange(this.LIGHT, this.DARK) : this.themeChange();
  },

  themeChange(oldTheme = this.DARK, newTheme = this.LIGHT) {
    refs.body.classList.contains(oldTheme)
      ? refs.body.classList.replace(oldTheme, newTheme)
      : refs.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  },
};
Theme.savedThemeControl();

refs.switchInput.addEventListener('change', onChecked);

function onChecked(event) {
  Theme.controlSet(event.target.checked);
}
