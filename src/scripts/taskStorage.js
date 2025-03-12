import { checkboxStateKey, taskStorageKey } from "./localStorageKeys.js";

export class TaskStorage {

  constructor(uniqueId, formValue, taskLabel) {
    
    this.id = uniqueId;

    //new label from form input
    this.formValue = formValue;

    this.taskLabel = taskLabel;

    this.DOMtaskList = document.querySelector(".task-list")

    //get an object from the local storage, if none exists create and object
    this.currentTaskList = JSON.parse(localStorage.getItem(taskStorageKey)) || {};
    this.currentCheckboxList = JSON.parse(localStorage.getItem(checkboxStateKey)) || {};
 
  }

  _getKeybyValue(object, value){
    return Object.keys(object).find(key => object[key] === value);
  }


  _getCurrentIndex(taskObject, currentKey){

    let arr = Array.from(Array.from(Object.keys(taskObject)))

    return arr.indexOf(currentKey);

  }


  storeTask() {

    //adding new pairs to localStorage, save pairs as key/value 
    this.currentTaskList[this.id] = this.formValue;
    this.currentCheckboxList[this.id] = false;

    //convert to string when saving to task stroage
    localStorage.setItem(taskStorageKey, JSON.stringify(this.currentTaskList));
    localStorage.setItem(checkboxStateKey, JSON.stringify(this.currentCheckboxList));
  }

  editStoredTask() {

    //get key of old value
    let keyOfOldLabel = this._getKeybyValue(this.currentTaskList, this.taskLabel.textContent);

    this.currentTaskList[keyOfOldLabel] = this.formValue
    
    //----pushing changes to both----
    localStorage.setItem(taskStorageKey, JSON.stringify(this.currentTaskList));
    
  }

  clearStorage() {

    localStorage.clear();

  }

  checkOffTask() {

    this.currentCheckboxList[this.id] = true;

    localStorage.setItem(checkboxStateKey, JSON.stringify(this.currentCheckboxList));

  }

  uncheckTask() {

    this.currentCheckboxList[this.id] = false;

    localStorage.setItem(checkboxStateKey, JSON.stringify(this.currentCheckboxList));

  }

  deleteTaskFromStorage() {

    delete this.currentTaskList[this.id];
    delete this.currentCheckboxList[this.id];

    localStorage.setItem(taskStorageKey, JSON.stringify(this.currentTaskList));
    localStorage.setItem(checkboxStateKey, JSON.stringify(this.currentCheckboxList));

  }

}