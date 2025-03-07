
export class TaskStorage {

  constructor(id, formValue, storageKey) {
  
    this.id = id;

    this.formValue = formValue

    this.storageKey = storageKey
 
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

}