import { taskStorageKey, sortableKey } from "./taskStorageKey.js";

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

  //the sortable.js data-id generator
  _generateId(el) {
    let str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;
  
    while (i--) {
      sum += str.charCodeAt(i);
    }
  
    return sum.toString(36);
  }

  _splitSortableString(string) {
    return string ? string.split('|') : [];
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

    //adding to sortable storage
    let sortableString = localStorage.getItem(sortableKey);
    let sortableArr = Array.from(this._splitSortableString(sortableString));

    //select the task using created task using unique id attribute
    let DOMtaskBeingAdded = this.DOMtaskList.querySelector(`[uniqueid="${this.id}"]`);

    let newId = this._generateId(DOMtaskBeingAdded)
    sortableArr.push(newId);

    //convert to string when saving to task stroage
    localStorage.setItem(this.storageKey, JSON.stringify(currentTaskList));

    //save to storage
    localStorage.setItem(sortableKey, sortableArr.join("|"))

  }

  editStoredTask() {

    //--updating task list in storage---
    let currentTaskList = JSON.parse(localStorage.getItem(this.storageKey));

    //get key of old value
    let keyOfOldLabel = this._getKeybyValue(currentTaskList, this.taskLabel.textContent);

    currentTaskList[keyOfOldLabel] = this.formValue

    let newId = this._generateId(this.taskLabel)

    //--updating sortable list in storage--
    let sortableString = localStorage.getItem(sortableKey);

    //position in task
    this.currentIndex = this._getCurrentIndex(currentTaskList, keyOfOldLabel)

    let sortableArr = Array.from(this._splitSortableString(sortableString));

    sortableArr.splice(this.currentIndex, 1, newId);

    //----pushing changes to both----
    localStorage.setItem(this.storageKey, JSON.stringify(currentTaskList));

    //only update sortable storage if it exists
    if (localStorage.getItem(sortableKey)){
      localStorage.setItem(sortableKey, sortableArr.join("|"))
    }
    
  }

}