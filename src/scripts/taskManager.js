  export const taskManager = {
    init(themeSwitcher) {
        const buttonAdd = document.querySelector("#buttonAdd");
        const inputField = document.querySelector("#todoDisplay");
        const todoList = document.querySelector(".todo__list");
      
        buttonAdd.addEventListener("click", () => {
          const inputValue = inputField.value.trim();
      
          if (inputValue === "") {
            console.log("Введите текст задачи!");
            return;
          }
      
          const newTask = document.createElement("li");
          newTask.textContent = inputValue;
      
          todoList.append(newTask);
          newTask.classList.add("todo__item");
      
          themeSwitcher.applyThemeToNewItem(newTask);
      
          inputField.value = "";
        });
      
        inputField.addEventListener("keypress", (event) => {
          if (event.key === "Enter") {
            const inputValue = inputField.value.trim();
      
            if (inputValue === "") {
              alert("Введите текст задачи!");
              return;
            }
      
            const newTask = document.createElement("li");
            newTask.textContent = inputValue;
      
            todoList.append(newTask);
            newTask.classList.add("todo__item");

            themeSwitcher.applyThemeToNewItem(newTask);
      
            inputField.value = "";
          };
      });
    },
  };


