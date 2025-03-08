//handle editing tasks after pressing "proceed"
import { TaskStorage } from "./taskStorage.js";



export function editTask(form, taskLabel) {

  let list = document.querySelector(".task-list")

  form.addEventListener("submit", () => {

    const taskFormData = new FormData(form);

    let newLabel;

       for (const [key, value] of taskFormData) {
  
        newLabel = value;

      }

    //EDIT STORAGE

    //edit taskStorage
    new TaskStorage("", newLabel, taskLabel).editStoredTask()


    //EDIT DOM  
    taskLabel.textContent = newLabel;
 
    
    //reset the user input
    form.reset();

    

  });

  return taskLabel;
}