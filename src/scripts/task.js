import optionImg from "../img/menu.svg"

import { pikminOptions } from "./pikmin-noises.js";

import { Dialog } from "./dialog.js";
import { dialogOpen } from "./dialogState.js";
import { checkboxStates } from "./checkboxStates.js";
import { editTask } from "./editTask.js";


export class Task {
  constructor (taskContent){

    this.dialog = new Dialog().createDialog();
    this.newLabel = this.dialog.getInputText

    this.taskContent = taskContent;
    this.formattedTaskContent = this._format(this.taskContent)

    this.taskList = document.querySelector(".task-list");

    this.task = document.createElement("div");
    this.task.setAttribute("class", "task");

    this.input = document.createElement("input");
    this.input.setAttribute("type", "checkbox");
    this.input.setAttribute("id", this.formattedTaskContent);
    this.input.setAttribute("name", this.formattedTaskContent);

    this.label = document.createElement("label");
    this.label.textContent = taskContent;
    this.label.setAttribute("for", this.formattedTaskContent)

    this.optionBtn = document.createElement("button");
    this.optionBtn.setAttribute("class", "options");

    this.optionIcon = document.createElement("img");
    this.optionIcon.src = optionImg;
    this.optionIcon.setAttribute("alt", "menu icon");

    //options menu
    this.optionMenu = document.createElement("div");
    this.optionMenu.setAttribute("class", "options-menu");

    this.editBtn = document.createElement("button");
    this.editBtn.setAttribute("class", "edit");
    this.editBtn.textContent = "Edit";

    this.deleteBtn = document.createElement("button");
    this.deleteBtn.setAttribute("class", "delete");
    this.deleteBtn.textContent = "Delete";

  }

  //--private interfaces--
  _format(string){
    //split the taskContent string by spaces and join together with "-"
    return string
    .toLowerCase()
    .split(" ")
    .join("-");
  };

  _outsideClicks(e){
    if (e.target.parentNode != this.optionBtn && e.target.parentNode != this.optionMenu){
      return  this.optionMenu.style.visibility = "hidden";
    };
  }

  //--public interfaces--
  createTask(){

    this.taskList.appendChild(this.task);

    this.task.appendChild(this.input);
    this.task.appendChild(this.label);
    this.task.appendChild(this.optionBtn);
    this.task.appendChild(this.optionMenu)

    this.optionBtn.appendChild(this.optionIcon);

    this.optionMenu.appendChild(this.editBtn);
    this.optionMenu.appendChild(this.deleteBtn);

    //open option menu
    this.optionBtn.addEventListener("click", () => {

      this.optionMenu.style.visibility = "visible";

      pikminOptions.play();
      
    });

    //close option menu
    //detect "outside clicks"
    document.addEventListener("click", e => {
      if (e.target.parentNode != this.optionBtn && e.target.parentNode != this.optionMenu){
        this.optionMenu.style.visibility = "hidden";
      };
    });

    checkboxStates(this.input, this.label);

    dialogOpen(this.editBtn, this.dialog)

    //editing label after clicking proceed
    //i dont thing this should be the task's responsibility. need to seperate this somehow...

    this.dialogProceedBtn = this.dialog.querySelector("button.proceed");

    editTask(this.dialogProceedBtn, this.label, this.dialog.querySelector("#input-task"));

  };
};
