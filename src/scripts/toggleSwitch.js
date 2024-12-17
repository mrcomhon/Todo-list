export class ThemeSwitcher {
  selectors = {
    switchThemeButton: "[data-js-theme-switcher]",
  };

  themes = {
    dark: "dark",
    light: "light",
  };

  stateClasses = {
    isDarkTheme: "is-dark-theme",
  };

  storageKey = "theme";

  constructor() {
    this.switchThemeButtonElement = document.querySelector(
      this.selectors.switchThemeButton
    );
    this.setInitialTheme();
    this.bindEvents();
  }

  get isDarkThemeCached() {
    return localStorage.getItem(this.storageKey) === this.themes.dark;
  }

    setInitialTheme() {
      const isDark = this.isDarkThemeCached

    document.body.classList.toggle(
      this.stateClasses.isDarkTheme, isDark
        //   this.isDarkThemeCached
    );
        this.switchThemeButtonElement.checked = isDark;
  }

    onClick = () => {
        const isDark = this.switchThemeButtonElement.checked;

    localStorage.setItem(
      this.storageKey,
      this.isDarkThemeCached ? this.themes.light : this.themes.dark
    );

    document.body.classList.toggle(this.stateClasses.isDarkTheme);
  };

  bindEvents() {
    this.switchThemeButtonElement.addEventListener("change", this.onClick);
  }
}

