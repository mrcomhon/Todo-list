import { createEditButton } from "./edit.js";
import { createDeleteButton } from "./delete.js";
import { createDeleteButtonAll } from "./clearAll.js";
import { ThemeSwitcher } from "./toggleSwitch.js";
import { successMessage } from "./successMessage.js";
const { showMessage } = successMessage();
import { createCheckboxButton } from "./checkboxButtons.js";
import { remainingCasesTasks } from "./remainingСasesTasks.js";

export const taskManagers = {
  init(themeSwitcher) {
    const buttonAdd = document.querySelector("#buttonAdd");
    const inputField = document.querySelector("#todoDisplay");
    const todoList = document.querySelector(".todo__list");
    const todoWindow = document.querySelector(".todo__window");
    const todoThemeSwitchSlider = document.querySelector(".slider");

    const { updateRemainingCasesTasks } = remainingCasesTasks();

    const remainingTasksDisplay = document.createElement("div");
    remainingTasksDisplay.classList.add("remaining-tasks");
    todoWindow.prepend(remainingTasksDisplay);

    const deleteButtonAll = createDeleteButtonAll(ThemeSwitcher);

    const updateUI = () => {
      updateRemainingCasesTasks(todoList, remainingTasksDisplay)
    }

    const updateDeleteButtonAllVisibility = () => {
      if (todoList.children.length > 0) {
        if (!todoWindow.contains(deleteButtonAll))
          todoWindow.append(deleteButtonAll);
      } else {
        if (todoWindow.contains(deleteButtonAll))
        todoWindow.removeChild(deleteButtonAll);
      }
    };

    deleteButtonAll.addEventListener("click", () => {
      todoList.innerHTML = "";
      updateUI()
      updateDeleteButtonAllVisibility();
    });

    const addTask = (taskText) => {
      const checkboxButton = createCheckboxButton("taskSelector", taskText);
      const newTask = document.createElement("li");
      newTask.classList.add("todo__item");

      const taskTextElement = document.createElement("span");
      taskTextElement.textContent = taskText;
      taskTextElement.classList.add("todo__text");

      const buttonGapFirst = document.createElement("div");
      buttonGapFirst.classList.add("todo__gap");

      const buttonGapSecond = document.createElement("div");
      buttonGapSecond.classList.add("todo__gap");

      const editButton = createEditButton();
      const deleteButton = createDeleteButton();

      editButton.addEventListener("click", () => {
        const existingInputEdit = newTask.querySelector(".todo__edit-input");
        if (existingInputEdit) return;

        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = taskTextElement.textContent;
        inputEdit.classList.add("todo__edit-input");

        buttonGapFirst.replaceChild(inputEdit, taskTextElement);
        inputEdit.focus();

        let isEditing = true;

        const saveEdit = () => {
          if (!isEditing) return;
          isEditing = false;

          if (newTask.contains(inputEdit)) {
            taskTextElement.textContent =
              inputEdit.value.trim() || taskTextElement.textContent;
            buttonGapFirst.replaceChild(taskTextElement, inputEdit);
          }
        };

        inputEdit.addEventListener("keypress", (event) => {
          if (event.key === "Enter") {
            saveEdit();
          }
        });

        inputEdit.addEventListener("blur", () => {
          saveEdit();
        });
      });

      deleteButton.addEventListener("click", () => {
        newTask.remove();
        updateUI()
        updateDeleteButtonAllVisibility();
      });

      themeSwitcher.applyThemeToNewItem(deleteButtonAll);
      themeSwitcher.applyThemeToNewEdit(editButton);
      themeSwitcher.applyThemeToNewItem(newTask);
      todoThemeSwitchSlider.setAttribute("tabindex", "0");

      newTask.append(buttonGapFirst);
      newTask.appendChild(buttonGapSecond);
      buttonGapFirst.appendChild(checkboxButton);
      buttonGapFirst.appendChild(taskTextElement);
      buttonGapSecond.appendChild(editButton);
      buttonGapSecond.appendChild(deleteButton);
      showMessage("success");

      todoList.append(newTask);
      updateUI()
      updateDeleteButtonAllVisibility();
    };

    buttonAdd.addEventListener("click", () => {
      const inputValue = inputField.value.trim();

      if (inputValue === "") {
        showMessage("empty");
        return;
      }
      try {
        addTask(inputValue);
        inputField.value = "";
      } catch (error) {
        console.error("Ошибка при добавлении задачи:", error);
        showMessage("fail");
      }
    });

    inputField.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const inputValue = inputField.value.trim();

        if (inputValue === "") {
          showMessage("empty");
          return;
        }
        try {
          addTask(inputValue);
          inputField.value = "";
        } catch (error) {
          console.error("Ошибка при добавлении задачи:", error);
          showMessage("fail");
        }
      }
    });
    updateDeleteButtonAllVisibility();

      updateUI();
  },
};
