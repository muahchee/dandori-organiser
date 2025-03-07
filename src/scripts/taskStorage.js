
export class TaskStorage {

  constructor(id, formValue, storageKey) {
  
    this.id = id;

    this.formValue = formValue

    this.storageKey = storageKey
 
  }


  storeTask() {
    
    //get an array from the local storage, if none exists create and array
    let currentTaskList = JSON.parse(localStorage.getItem(this.storageKey)) || [];

    //adding new pairs to localStorage, save pairs as key/value array
    currentTaskList.push( [ this.id, this.formValue ] );

    //convert to string when saving to stroage
    localStorage.setItem(this.storageKey, JSON.stringify(currentTaskList));

    console.log(JSON.parse(localStorage.getItem(this.storageKey)))

  }

}