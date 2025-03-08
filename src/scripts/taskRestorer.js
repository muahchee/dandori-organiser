import { TaskDOM } from "./taskDOM.js";
import { taskStorageKey } from "./taskStorageKey.js";

export class TaskRestorer {

  constructor() {

    this.storageKey = taskStorageKey;

    // this.storedTasks = JSON.stringify(localStorage.getItem(this.storageKey));

    this.storedTasks = JSON.parse(localStorage.getItem(this.storageKey));

  }

  

  restoreTasks() {

    // console.log(this.storedTasks)

    for (const key in this.storedTasks) {

      let task = new TaskDOM(this.storedTasks[key]).createTask();

      // const taskList = document.querySelector(".task-list");

      // const taskInDOM = taskList.querySelector(`div[data-id=${task}]`);


      console.log("key in storage = " + key);
      console.log("task = " + task)
      console.log("------")

    }

  }


}