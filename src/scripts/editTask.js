//handle editing tasks after pressing "proceed"
import { taskStorageKey } from "./taskStorageKey.js";
import { TaskStorage } from "./taskStorage.js";


export function editTask(form, taskLabel) {

  form.addEventListener("submit", () => {

    const taskFormData = new FormData(form);

    let newLabel;

    //EDIT DOM  
    for (const [key, value] of taskFormData) {
      taskLabel.textContent = value;

      newLabel = value;
    }
    
    //reset the user input
    form.reset();

    //EDIT STORAGE

    new TaskStorage(taskLabel, newLabel, taskStorageKey).editStoredTask()

  });

  return taskLabel;
}