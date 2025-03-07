
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

    //remove data-id from first task

    const taskList = document.querySelector(".task-list");

    const taskInDOM = taskList.querySelector(`div[data-id=${this.firstTask}]`);

    taskInDOM.setAttribute("data-id", "first")

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

