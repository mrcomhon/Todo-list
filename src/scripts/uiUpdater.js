import { remainingCasesTasks } from './remainingСasesTasks'
const {updateRemainingCasesTasks} = remainingCasesTasks()

export const updateUI = (todoList, deleteButtonAll, todoWindow, updateRemainingCasesTasks) => {
    const remainingTasksDisplay = document.querySelector(".remaining-tasks");
    if (!remainingTasksDisplay) {
        console.error("el not found")
        return
    }

    updateRemainingCasesTasks(todoList, remainingTasksDisplay)
}


export const updateDeleteButtonVisibility = (todoList, deleteButtonAll, todoWindow) => {
    if (todoList.children.length > 0) {
        if (!todoWindow.contains(deleteButtonAll)) {
            todoWindow.append(deleteButtonAll)
        }
    } else {
        if (todoWindow.contains(deleteButtonAll)) {
            todoWindow.removeChild(deleteButtonAll)
        }
    }
}