import { updateUI, updateDeleteButtonVisibility } from './uiUpdater';
import { addTask } from './taskCreator';
import { createDeleteButtonAll } from './clearAll';
import { handleAddButtonClick, handleEnterKeyPress } from './eventHandlers';
import { ThemeSwitcher } from './toggleSwitch';
import { remainingCasesTasks } from './remainingСasesTasks';

export const taskManager = {
    init(ThemeSwither) {
        const buttonAdd = document.querySelector("#buttonAdd")
        const inputField = document.querySelector("#todoDisplay")
        const todoList = document.querySelector(".todo__list")
        const todoWindow = document.querySelector(".todo__window")

        const deleteButtonAll = createDeleteButtonAll()
        const { updateRemainingCasesTasks } = remainingCasesTasks()
        
    const update = () => {
      updateUI(todoList, deleteButtonAll, todoWindow, updateRemainingCasesTasks);
      updateDeleteButtonVisibility(todoList, deleteButtonAll, todoWindow)
    }

        buttonAdd.addEventListener("click", () => handleAddButtonClick(inputField, todoList, update))
        buttonAdd.addEventListener("keypress", (event) =>
          handleEnterKeyPress(event, inputField, todoList, update));

        update()
    }
}