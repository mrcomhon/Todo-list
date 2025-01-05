export function createCheckboxButton(name, value) {
    const checkboxButton = document.createElement("input")
    checkboxButton.type = "checkbox";
    checkboxButton.name = name;
    checkboxButton.value = value;
    checkboxButton.classList.add("todo__checkbox");

    document.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const activeElement = document.activeElement;

            if (activeElement && activeElement.classList.contains("todo__checkbox")) {
                activeElement.checked = !activeElement.checked;
            }
        }
    })

    return checkboxButton
}