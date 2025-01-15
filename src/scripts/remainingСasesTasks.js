export const remainingCasesTasks = () => {
    const getRemainingCasesTasks = (taskList) => {
        return Array.from(taskList.children).filter(
            (task) => !task.classList.contains("completed")
        ).length
    }

    const updateRemainingCasesTasks = (taskList, displayElement) => {
        const remainingCount = getRemainingCasesTasks(taskList)
        displayElement.textContent = `Оставшиеся задачи: ${remainingCount}`
    }

    return {getRemainingCasesTasks, updateRemainingCasesTasks}
}