
export class TaskStorage {

  constructor(id, formValue) {
  
    this.id = id;

    this.formValue = formValue
 
  }


  storeTask() {

    localStorage.setItem(this.id, this.formValue)

  }

}