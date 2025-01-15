import { addTask } from './taskCreator';

export const handleAddButtonClick = (inputField, todoList, updateUI) => {
    const taskText = inputField.value.trim()
    if (taskText) {
        addTask(taskText, todoList, updateUI)
        inputField.value = ""
    }
}

export const handleEnterKeyPress = (event, inputField, todoList, updateUI) => {
    if (event.key === "Enter") {
        handleAddButtonClick(inputField, todoList, updateUI)
    }
}