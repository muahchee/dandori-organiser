
export class TaskStorage {

  constructor(id, formValue, localStorageIndex) {
  
    this.id = id;

    this.formValue = formValue

    this.localStorageIndex = localStorageIndex
 
  }


  storeTask() {

    // localStorage[this.localStorageIndex].push(this._prepareStoredObject());

    localStorage.setItem(this.localStorageIndex, 
      `${
        localStorage.getItem(this.localStorageIndex) +
        this.id + 
        ":" + 
        this.formValue
      } `);

    //  localStorage["stored-task"]

  }

}