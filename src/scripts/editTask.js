//handle editing tasks after pressing "proceed"
import { taskStorageKey, sortableKey } from "./taskStorageKey.js";
import { TaskStorage } from "./taskStorage.js";
import Sortable from "sortablejs";


export function editTask(form, taskLabel) {

  let list = document.querySelector(".task-list")

  form.addEventListener("submit", () => {

    const taskFormData = new FormData(form);

    let newLabel;

       for (const [key, value] of taskFormData) {
  
        newLabel = value;

      }

    //EDIT STORAGE


    new TaskStorage("", newLabel, taskStorageKey, taskLabel).editStoredTask()


    //edit dom
    taskLabel.textContent = newLabel;
 
    
    //reset the user input
    form.reset();

    

  });

  return taskLabel;
}