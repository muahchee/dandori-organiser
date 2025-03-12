import { TaskCreator } from "./taskCreator";

export class TaskResetter {

  constructor (resetBtn, taskList) {

    this.resetBtn = resetBtn;
    this.taskList = taskList;

  }

  resetTaskList() {

    this.resetBtn.addEventListener("click", () => {

      //remove children from task list
      while(this.taskList.firstChild){
        this.taskList.removeChild(this.taskList.lastChild);
      };

      // empty local storage
      localStorage.clear();

      new TaskCreator().initialTask();
    });
  };
};