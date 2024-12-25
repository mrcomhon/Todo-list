// import trashIcon from "../icons/trash.svg";

// export function createDeleteButton() {

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("todo__delete");

//     const svgImage = document.createElement("svg");
//     svgImage.src = trashIcon;
//     svgImage.alt = "Удалить";
//     svgImage.width = 16;
//     svgImage.height = 16;

//     deleteButton.appendChild(svgImage);

//     return deleteButton;
// }

import trashIcon from "../icons/trash.svg";

console.log(trashIcon)

export function createDeleteButton() {
  const deleteButton = document.createElement("button");
    deleteButton.classList.add("todo__delete");
    
    deleteButton.innerHTML = trashIcon

  return deleteButton;
}