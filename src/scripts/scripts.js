import "../css/styles.css";
import { taskManagers } from "../scripts/taskManager.js";
import { ThemeSwitcher } from "../scripts/toggleSwitch.js";

document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = new ThemeSwitcher();
  taskManagers.init(themeSwitcher);
});
