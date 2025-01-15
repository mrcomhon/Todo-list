import { createEditButton } from './edit';
import { createDeleteButton } from './delete';

export const addTask = (taskText, todoList, updateUI) => {
    const newTask = document.createElement("li")
    newTask.classList.add("todo__item")

    const taskTextElement = document.createElement("span")
    taskTextElement.textContent = taskText
    taskTextElement.classList.add("todo__text")

    const editButton = createEditButton()
    const deleteButton = createDeleteButton();

    editButton.addEventListener("click", () => {
        const inputEdit = document.createElement("input")
        inputEdit.value = taskTextElement.textContent
        taskTextElement.replaceWith(inputEdit)

        inputEdit.addEventListener("blur", () => {
            taskTextElement.textContent = inputEdit.value.trim()
            inputEdit.replaceWith(taskTextElement)
        })
    })

    deleteButton.addEventListener("click", () => {
        newTask.remove;
        updateUI()
    })

    newTask.appendChild(taskTextElement);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton)

    todoList.appendChild(newTask)
    updateUI()
}
