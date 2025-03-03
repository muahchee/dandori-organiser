import optionImg from "../img/menu.svg"

export class Task {
  constructor (taskContent){

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
    this.optionIcon.setAttribute("alt", "menu icon")

  }

  _format(string){
    //split the taskContent string by spaces and join together with "-"

    return string
    .toLowerCase()
    .split(" ")
    .join("-");
  }


  createTask(){
    this.taskList.appendChild(this.task);

    this.task.appendChild(this.input);
    this.task.appendChild(this.label);
    this.task.appendChild(this.optionBtn);

    this.optionBtn.appendChild(this.optionIcon)

  }

}