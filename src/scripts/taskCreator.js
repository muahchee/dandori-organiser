
import { TaskDOM } from "./taskDOM.js";
import { TaskStorage } from "./taskStorage.js";

export class TaskCreator {

  constructor(form, storageKey) {

    this.form = form;

    this.storageKey = storageKey;

  }

  // --public--

  initialTask() {
    this.firstTaskText = "First Task!"

    this.firstTask = new TaskDOM("First Task!").createTask();

    //make sure this initial task only gets stored once
    if (localStorage.getItem("1") == "" || !localStorage.getItem("1")){
      // new TaskStorage(this.firstTask, this.firstTaskText, this.storageKey).storeTask()
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

        new TaskStorage(taskdom, value, this.storageKey).storeTask()
  
      }
  
      this.form.reset();
 

      return taskdom
  
    })


  }

}

