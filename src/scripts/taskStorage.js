import { taskStorageKey } from "./taskStorageKey.js";

export class TaskStorage {

  constructor(id, formValue, taskLabel) {
    
    this.id = id;

    //new label
    this.formValue = formValue;

    this.storageKey = taskStorageKey;

    this.taskLabel = taskLabel;

    this.DOMtaskList = document.querySelector(".task-list")
 
  }

  _getKeybyValue(object, value){
    return Object.keys(object).find(key => object[key] === value);
  }


  _getCurrentIndex(taskObject, currentKey){

    let arr = Array.from(Array.from(Object.keys(taskObject)))

    return arr.indexOf(currentKey);

  }


  storeTask() {
    
    //get an object from the local storage, if none exists create and object
    let currentTaskList = JSON.parse(localStorage.getItem(this.storageKey)) || {};

    //adding new pairs to localStorage, save pairs as key/value 
    currentTaskList[this.id] = this.formValue;

    //convert to string when saving to task stroage
    localStorage.setItem(this.storageKey, JSON.stringify(currentTaskList));

  }

  editStoredTask() {

    //--updating task list in storage---
    let currentTaskList = JSON.parse(localStorage.getItem(this.storageKey));

    //get key of old value
    let keyOfOldLabel = this._getKeybyValue(currentTaskList, this.taskLabel.textContent);

    currentTaskList[keyOfOldLabel] = this.formValue
    
    //----pushing changes to both----
    localStorage.setItem(this.storageKey, JSON.stringify(currentTaskList));
    
  }

}