import { TaskDOM } from "./taskDOM.js";

export class TaskRestorer {

  constructor(storageKey) {

    this.storageKey = storageKey;

    this.storedTasks = JSON.parse(localStorage.getItem(this.storageKey));

  }

  

  restoreTasks() {

    // console.log(this.storedTasks)

    for (const key in this.storedTasks) {

      let task = new TaskDOM(this.storedTasks[key]).createTask();

      const taskList = document.querySelector(".task-list");

      const taskInDOM = taskList.querySelector(`div[data-id=${task}]`);

      taskInDOM.setAttribute("data-id", key)

      console.log("id in dom = " + taskInDOM.getAttribute("data-id"))
      console.log("key in storage = " + key);
      console.log("task = " + task)
      console.log("------")

    }

  }


}