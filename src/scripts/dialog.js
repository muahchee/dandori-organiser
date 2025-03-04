//create dialog

import { dialogClose } from "./dialogState.js";
export class Dialog {

  constructor(){

    this.mainContainer = document.querySelector(".main-container");

    this.dialog = document.createElement("dialog");

    this.dialogWrapper = document.createElement("div");
    this.dialogWrapper.setAttribute("class", "dialog-wrapper");

    this.taskNameLabel = document.createElement("label");
    this.taskNameLabel.textContent = "New task name, please!"
    this.taskNameLabel.setAttribute("for", "input-task");

    this.taskNameInput = document.createElement("input");
    this.taskNameInput.setAttribute("type", "text");
    this.taskNameInput.setAttribute("id", "input-task");
    this.taskNameInput.setAttribute("name", "input-task");

    this.buttonWrapper = document.createElement("div");

    this.cancelButton = document.createElement("button");
    this.cancelButton.setAttribute("class", "cancel");
    this.cancelButton.textContent = "Cancel"

    this.proceedButton = document.createElement("button");
    this.proceedButton.setAttribute("class", "proceed");
    this.proceedButton.textContent = "Proceed";
  }

  createDialog(){

    this.mainContainer.appendChild(this.dialog);

    this.dialog.appendChild(this.dialogWrapper);

    this.dialogWrapper.appendChild(this.taskNameLabel);
    this.dialogWrapper.appendChild(this.taskNameInput);
    this.dialogWrapper.appendChild(this.buttonWrapper);

    this.buttonWrapper.appendChild(this.cancelButton);
    this.buttonWrapper.appendChild(this.proceedButton);

    dialogClose(this.cancelButton, this.dialog);

    return this.dialog

  }

}
