//handle editing tasks after pressing "proceed"
import { taskStorageKey } from "./taskStorageKey.js";
import { TaskStorage } from "./taskStorage.js";


export function editTask(form, taskLabel) {

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