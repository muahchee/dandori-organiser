import { taskStorageKey, sortableKey } from "./taskStorageKey.js";

export class TaskStorage {

  constructor(id, formValue, taskLabel) {
    
    this.id = id;

    //new label
    this.formValue = formValue;

    this.storageKey = taskStorageKey;

    this.taskLabel = taskLabel;
 
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

    //convert to string when saving to stroage
    localStorage.setItem(this.storageKey, JSON.stringify(currentTaskList));

    console.log(JSON.parse(localStorage.getItem(this.storageKey)))

  }

  editStoredTask() {

    //--updating task list in storage---
    let currentTaskList = JSON.parse(localStorage.getItem(this.storageKey));

    //get key of old value
    let keyOfOldLabel = this._getKeybyValue(currentTaskList, this.taskLabel.textContent);

    currentTaskList[keyOfOldLabel] = this.formValue

    

    //--updating sortable list in storage--

    let sortableString = localStorage.getItem(sortableKey);

    let sortableArr = Array.from(this._splitSortableString(sortableString));

    //position in task

    this.currentIndex = this._getCurrentIndex(currentTaskList, keyOfOldLabel)

    //position in sortable Arr

    this.newId = this._generateId(this.taskLabel)

    sortableArr.splice(this.currentIndex, 1, this.newId);

    // console.log("sortable from taskStorage " + localStorage.getItem(sortableKey))


    //pushing changes to both

    localStorage.setItem(this.storageKey, JSON.stringify(currentTaskList));

    //only update sortable storage if it exists
    if (localStorage.getItem(sortableKey)){
      localStorage.setItem(sortableKey, JSON.stringify(sortableArr.join("|")))
    }
    
  }

}