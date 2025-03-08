
import { TaskDOM } from "./taskDOM.js";
import { TaskStorage } from "./taskStorage.js";
import { taskStorageKey } from "./taskStorageKey.js";

export class TaskCreator {

  constructor(form) {

    this.form = form;

  }

  // --public--

  initialTask() {
    this.firstTaskText = "First Task!"

    //prevents duplicate first tasks
    if (localStorage.getItem(taskStorageKey) === null){

      this.firstTask = new TaskDOM("First Task!").createTask();

      new TaskStorage("first", "First Task!", taskStorageKey).storeTask();
    }

  }
  
  newTask() {

    this.form.addEventListener("submit", () => {

      //printing to dom
  
      const taskFormData = new FormData(this.form);

      let taskdom;
  
      for (const [key, value] of taskFormData) {
  
        taskdom = new TaskDOM(value).createTask();
        
        //storing into local storage

        new TaskStorage(taskdom, value).storeTask()
  
      }
  
      this.form.reset();
 

      return taskdom
  
    })


  }

}

