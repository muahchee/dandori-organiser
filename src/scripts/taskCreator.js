
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

    //prevents duplicate first tasks
    if (localStorage.getItem(this.storageKey) === null){

      this.firstTask = new TaskDOM("First Task!").createTask();

      new TaskStorage("first", "First Task!", this.storageKey).storeTask();

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

