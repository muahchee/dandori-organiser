//handle editing tasks after pressing "proceed"

export function editTask(button, taskLabel, newLabel) {

  button.addEventListener("click", () => {

    taskLabel.textContent = newLabel.value;

    //reset the user input
    newLabel.value = ""

    //selecting the dialog
    //(!!!very dependent!! very dependent on html structure, need to change later!)
    const dialog = button.parentNode.parentNode.parentNode;

    dialog.close();

  });

  return taskLabel;
}