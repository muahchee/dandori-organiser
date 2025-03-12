import { TaskDOM } from "./taskDOM.js";
import { checkboxStateKey, taskStorageKey } from "./localStorageKeys.js";

export class TaskRestorer {

  constructor() {

    this.storedTasks = JSON.parse(localStorage.getItem(taskStorageKey));

    this.checkboxStates = JSON.parse(localStorage.getItem(checkboxStateKey));

    this.taskList = document.querySelector(".task-list")

  }

  

  restoreTasks() {

    for (const key in this.storedTasks) {

      new TaskDOM(this.storedTasks[key], key).createTask();

    }

    for (const key in this.checkboxStates) {

      let currentTaskInput = this.taskList.querySelector(`div[uniqueid=${key}] input`);
      let currentTaskLabel = this.taskList.querySelector(`div[uniqueid=${key}] label`);

      if (this.checkboxStates[key] === true){

        currentTaskInput.checked = true;
        
        currentTaskLabel.style.textDecoration = "line-through";

      }

    }

  }
}