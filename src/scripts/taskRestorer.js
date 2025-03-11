import { TaskDOM } from "./taskDOM.js";
import { taskStorageKey } from "./taskStorageKey.js";

export class TaskRestorer {

  constructor() {

    this.storageKey = taskStorageKey;

    this.storedTasks = JSON.parse(localStorage.getItem(this.storageKey));

  }

  

  restoreTasks() {

    for (const key in this.storedTasks) {

      let task = new TaskDOM(this.storedTasks[key], key).createTask();

    }

  }


}