export class ThemeSwitcher {
  selectors = {
    switchThemeButton: "[data-js-theme-switcher]",
    switchThemeTodo: "#todo",
    switchThemeInput: "#todoDisplay",
    switchThemeTitle: "#todoTitle",
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
    this.switchThemeTodoElement = document.querySelector(
      this.selectors.switchThemeTodo
    );
    this.switchThemeInputElement = document.querySelector(
      this.selectors.switchThemeInput
    );
    this.switchThemeTitleElement = document.querySelector(
      this.selectors.switchThemeTitle
    );
    this.setInitialTheme();
    this.bindEvents();
  }

  get isDarkThemeCached() {
    return localStorage.getItem(this.storageKey) === this.themes.dark;
  }

  setInitialTheme() {
    const isDark = this.isDarkThemeCached;

    document.body.classList.toggle(
      this.stateClasses.isDarkTheme,
      isDark
      //   this.isDarkThemeCached
    );
    this.switchThemeTodoElement.classList.toggle(
      this.stateClasses.isDarkTheme,
      isDark
    );
      
      this.switchThemeInputElement.classList.toggle(
          this.stateClasses.isDarkTheme,
          isDark
      )

       this.switchThemeTitleElement.classList.toggle(
         this.stateClasses.isDarkTheme,
         isDark
       );

    this.switchThemeButtonElement.checked = isDark;
  }

  onClick = () => {
      const isDark = this.switchThemeButtonElement.checked;

    localStorage.setItem(
      this.storageKey,
      isDark ? this.themes.dark : this.themes.light
    );

      
      document.body.classList.toggle(this.stateClasses.isDarkTheme);
      this.switchThemeTodoElement.classList.toggle(this.stateClasses.isDarkTheme);
     this.switchThemeInputElement.classList.toggle(
        this.stateClasses.isDarkTheme
      );
      this.switchThemeTitleElement.classList.toggle(
        this.stateClasses.isDarkTheme
      );

  };

  bindEvents() {
      this.switchThemeButtonElement.addEventListener("change", this.onClick);
  }
}
