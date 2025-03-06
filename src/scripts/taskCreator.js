
import { TaskDOM } from "./taskDOM.js";
import { TaskStorage } from "./taskStorage.js";

export class TaskCreator {

  constructor(form, localStorageIndex) {

    this.form = form;

    this.localStorageIndex = localStorageIndex;

  }

  // --public--
  
  newTask() {

    this.form.addEventListener("submit", () => {

      //printing to dom
  
      const taskFormData = new FormData(this.form);

      let taskdom;
  
      for (const [key, value] of taskFormData) {
  
        taskdom = new TaskDOM(value).createTask();
        
        //storing into local storage

        new TaskStorage(taskdom, value, this.localStorageIndex).storeTask()
  
      }
  
      this.form.reset();
 

      return taskdom
  
    })


  }

}

