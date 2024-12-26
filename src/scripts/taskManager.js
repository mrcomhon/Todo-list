import { createEditButton } from "./edit.js";
import { createDeleteButton } from "./delete.js";
import { createDeleteButtonAll } from './clearAll.js';
import { ThemeSwitcher } from './toggleSwitch.js';

export const taskManager = {
  init(themeSwitcher) {
    const buttonAdd = document.querySelector("#buttonAdd");
    const inputField = document.querySelector("#todoDisplay");
    const todoList = document.querySelector(".todo__list");
    const todoWindow = document.querySelector(".todo__window");
    
    const deleteButtonAll = createDeleteButtonAll(ThemeSwitcher);

    const updateDeleteButtonAllVisibility = () => {
        if (todoList.children.length > 0) {
      if    (!todoWindow.contains(deleteButtonAll))
          todoWindow.append(deleteButtonAll)
        } else {
          if(todoWindow.contains(deleteButtonAll));
          todoWindow.removeChild(deleteButtonAll);
        }
    }

    deleteButtonAll.addEventListener("click", () => {
      todoList.innerHTML = "";
      updateDeleteButtonAllVisibility();
    });
  

    const addTask = (taskText) => {
      const newTask = document.createElement("li");
      newTask.classList.add("todo__item");

      const taskTextElement = document.createElement("span");
      taskTextElement.textContent = taskText;
      taskTextElement.classList.add("todo__text");

      const buttonGap = document.createElement("div");
      buttonGap.classList.add("todo__gap");

      const editButton = createEditButton();
      const deleteButton = createDeleteButton();



      editButton.addEventListener("click", () => {
        const inputEdit = document.createElement("input");
        inputEdit.type = "text";
        inputEdit.value = taskTextElement.textContent;
        inputEdit.classList.add("todo__edit-input");

        newTask.replaceChild(inputEdit, taskTextElement);
        inputEdit.focus();

        let isEditing = true;

        const saveEdit = () => {
          if (!isEditing) return;
          isEditing = false;

          if (newTask.contains(inputEdit)) {
            taskTextElement.textContent =
              inputEdit.value.trim() || taskTextElement.textContent;
            newTask.replaceChild(taskTextElement, inputEdit);
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
      updateDeleteButtonAllVisibility();

      });

      themeSwitcher.applyThemeToNewItem(deleteButtonAll)
      themeSwitcher.applyThemeToNewEdit(editButton);
      themeSwitcher.applyThemeToNewItem(newTask);

      newTask.appendChild(taskTextElement);
      newTask.appendChild(buttonGap);
      buttonGap.appendChild(editButton);
      buttonGap.appendChild(deleteButton);

      todoList.append(newTask);
      updateDeleteButtonAllVisibility();

    };

    buttonAdd.addEventListener("click", () => {
      const inputValue = inputField.value.trim();

      if (inputValue === "") {
        console.log("Введите текст задачи!");
        return;
      }
      addTask(inputValue);
      inputField.value = "";

    });

    inputField.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        const inputValue = inputField.value.trim();

        if (inputValue === "") {
          alert("Введите текст задачи!");
          return;
        }
        addTask(inputValue);
        inputField.value = "";
      }
    });
      updateDeleteButtonAllVisibility();

  },
};
