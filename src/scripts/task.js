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
    //"optionInsideClick" is to allow option window to close when clicking outside, prevent inside clicks from closeing the window
    this.optionBtn.setAttribute("optionInsideClick", true);

    this.optionIcon = document.createElement("img");
    this.optionIcon.src = optionImg;
    this.optionIcon.setAttribute("alt", "menu icon");
    this.optionIcon.setAttribute("optionInsideClick", true);

    //options menu
    this.optionMenu = document.createElement("div");
    this.optionMenu.setAttribute("class", "options-menu");
    this.optionMenu.setAttribute("optionInsideClick", true);

    this.editBtn = document.createElement("button");
    this.editBtn.setAttribute("class", "edit");
    this.editBtn.textContent = "Edit";
    this.editBtn.setAttribute("optionInsideClick", true);

    this.deleteBtn = document.createElement("button");
    this.deleteBtn.setAttribute("class", "delete");
    this.deleteBtn.textContent = "Delete";
    this.deleteBtn.setAttribute("optionInsideClick", true);

  }

  //--private interfaces--
  _format(string){
    //split the taskContent string by spaces and join together with "-"

    return string
    .toLowerCase()
    .split(" ")
    .join("-");
  }

  _outsideClick(element){
    document.addEventListener("click", e => {
      if (!element.contains(e.target)) {
        element.style.visibility = "hidden"
      }
    })
  }

  //--public interfaces--
  createTask(){
    this.taskList.appendChild(this.task);

    this.task.appendChild(this.input);
    this.task.appendChild(this.label);
    this.task.appendChild(this.optionBtn);
    this.task.appendChild(this.optionMenu)

    this.optionBtn.appendChild(this.optionIcon)

    this.optionMenu.appendChild(this.editBtn);
    this.optionMenu.appendChild(this.deleteBtn);

    //open option menu
    this.optionBtn.addEventListener("click", () => {
      this.optionMenu.style.visibility = "visible";
    });

    //close option menu
    document.addEventListener("click", e => {
      if (!e.target.getAttribute("optionInsideClick")){
        this.optionMenu.style.visibility = "hidden";
      }
    })
  }
}
