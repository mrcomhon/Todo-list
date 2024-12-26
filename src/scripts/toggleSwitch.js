export class ThemeSwitcher {
  selectors = {
    switchThemeButton: "[data-js-theme-switcher]",
    switchThemeTodo: "#todo",
    switchThemeInput: "#todoDisplay",
    switchThemeTitle: "#todoTitle",
    switchThemeIcon: "#todoIcon",
    switchThemeScrollbar: ".todo__scrollbar",
    switchThemeItems: ".todo__item",
    switchThemeEdit: ".todo__edit",
    switchThemeDeleteAll: ".todo__delete-all",
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
    this.switchThemeIconElement = document.querySelector(
      this.selectors.switchThemeIcon
    );
    this.switchThemeScrollbarElement = document.querySelector(
      this.selectors.switchThemeScrollbar
    );
    this.switchThemeDeleteAllElement = document.querySelector(
      this.selectors.switchThemeDeleteAll
    );
    this.switchThemeItemElements = document.querySelectorAll(
      this.selectors.switchThemeItems
    );
    this.switchThemeEditElements = document.querySelectorAll(
      this.selectors.switchThemeEdit
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

    if (this.switchThemeTodoElement) {
      this.switchThemeTodoElement.classList.toggle(
        this.stateClasses.isDarkTheme,
        isDark
      );
    }

    if (this.switchThemeInputElement) {
      this.switchThemeInputElement.classList.toggle(
        this.stateClasses.isDarkTheme,
        isDark
      );
    }

    if (this.switchThemeTitleElement) {
      this.switchThemeTitleElement.classList.toggle(
        this.stateClasses.isDarkTheme,
        isDark
      );
    }

    if (this.switchThemeIconElement) {
      this.switchThemeIconElement.classList.toggle(
        this.stateClasses.isDarkTheme,
        isDark
      );
    }

    if (this.switchThemeScrollbarElement) {
      this.switchThemeScrollbarElement.classList.toggle(
        this.stateClasses.isDarkTheme,
        isDark
      );
    }

    if (this.switchThemeDeleteAllElement) {
      this.switchThemeDeleteAllElement.classList.toggle(
        this.stateClasses.isDarkTheme,
        isDark
      );
    }

    document
      .querySelectorAll(this.selectors.switchThemeItems)
      .forEach((item) => item.classList.toggle(this.stateClasses.isDarkTheme));

    document
      .querySelectorAll(this.selectors.switchThemeEdit)
      .forEach((item) => item.classList.toggle(this.stateClasses.isDarkTheme));

    this.switchThemeButtonElement.checked = isDark;
  }

  applyThemeToNewItem(item) {
    const isDark = this.isDarkThemeCached;
    item.classList.toggle(this.stateClasses.isDarkTheme, isDark);
  }

  applyThemeToNewEdit(edit) {
    const isDark = this.isDarkThemeCached;
    edit.classList.toggle(this.stateClasses.isDarkTheme, isDark);
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

    this.switchThemeIconElement.classList.toggle(this.stateClasses.isDarkTheme);
    this.switchThemeScrollbarElement.classList.toggle(
      this.stateClasses.isDarkTheme
    );
    

    const clearAllButton = document.querySelector(
      this.selectors.switchThemeDeleteAll
    );
    if (clearAllButton) {
      clearAllButton.classList.toggle(this.stateClasses.isDarkTheme, isDark);
    }

    document
      .querySelectorAll(this.selectors.switchThemeItems)
      .forEach((item) => item.classList.toggle(this.stateClasses.isDarkTheme));

    document
      .querySelectorAll(this.selectors.switchThemeEdit)
      .forEach((item) => item.classList.toggle(this.stateClasses.isDarkTheme));
  };

  bindEvents() {
    this.switchThemeButtonElement.addEventListener("change", this.onClick);
  }
}
