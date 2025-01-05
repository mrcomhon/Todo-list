export function successMessage() {
    const todoWindow = document.querySelector(".todo__window");
    
    const createMessageElement = (type) => {
        const messageObject = {
            success: "Задача добавлена успешно", 
            empty: "Введите задачу", 
            fail: "Ошибка",
        }

        const messageElement = document.createElement("span");
        messageElement.classList.add("todo__message")

        messageElement.classList.add(`todo__message--${type}`);
        messageElement.textContent = messageObject[type];

        return messageElement
    }

    const showMessage = (type) => {

        
        const oldMessage = document.querySelector(".todo__message");
        if (oldMessage) oldMessage.remove();
        
        const newMessage = createMessageElement(type);
        todoWindow.after(newMessage);
        
        setTimeout(() => {
            newMessage.remove()
        }, 3000)
    }

    return { showMessage };
}