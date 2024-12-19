import "../css/styles.css";
import {taskManager} from "../scripts/taskManager";
import { ThemeSwitcher } from "../scripts/toggleSwitch";

document.addEventListener("DOMContentLoaded", () => {
    const themeSwicher = new ThemeSwitcher();
        taskManager.init(themeSwicher);
})
