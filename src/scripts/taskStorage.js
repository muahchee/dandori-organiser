
export class TaskStorage {

  constructor(id, formValue, storageKey, taskLabel) {
    
    this.id = id;

    //new label
    this.formValue = formValue

    this.storageKey = storageKey

    this.taskLabel = taskLabel
 
  }

  _getKeybyValue(object, value){
    return Object.keys(object).find(key => object[key] === value);
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

    let currentTaskList = JSON.parse(localStorage.getItem(this.storageKey));

    //get key of old value
    let keyOfOldLabel = this._getKeybyValue(currentTaskList, this.taskLabel.textContent);

    currentTaskList[keyOfOldLabel] = this.formValue

    console.log("tasklabel = " + this.taskLabel.textContent)
    console.log("------------------------")
    console.log("KEY : " + keyOfOldLabel);
    console.log("FORMVALUE : " + this.formValue)

    localStorage.setItem(this.storageKey, JSON.stringify(currentTaskList));

    //gets storage object
    console.log(JSON.parse(localStorage.getItem(this.storageKey)))

  }

}