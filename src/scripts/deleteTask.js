import { TaskStorage } from "./taskStorage";


export function deleteTask (deleteButton, currentTask, uniqueID){

  const taskList = document.querySelector(".task-list");

  deleteButton.addEventListener("click", () => {

    taskList.removeChild(currentTask);

    new TaskStorage(uniqueID).deleteTaskFromStorage();

  })

}