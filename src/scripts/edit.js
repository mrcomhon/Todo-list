import penIcon from "../icons/pen.svg";

export function createEditButton() {
    const editButton = document.createElement("button");
    editButton.classList.add("todo__edit");
    

    editButton.innerHTML = penIcon;

    return editButton;
}