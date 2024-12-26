import "../css/styles.css";
import {taskManager} from "../scripts/taskManager.js";
import { ThemeSwitcher } from "../scripts/toggleSwitch.js";

document.addEventListener("DOMContentLoaded", () => {
    const themeSwicher = new ThemeSwitcher();
        taskManager.init(themeSwicher);
})


