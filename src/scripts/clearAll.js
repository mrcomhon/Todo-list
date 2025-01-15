import trashIcon from "../icons/trash.svg";
import { ThemeSwitcher } from './toggleSwitch';

export function createDeleteButtonAll() {
  const deleteButtonAll = document.createElement("button");
  deleteButtonAll.classList.add("todo__delete-all");
  deleteButtonAll.innerHTML = trashIcon

  return deleteButtonAll;
}