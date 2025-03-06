//handle editing tasks after pressing "proceed"

export function editTask(form, taskLabel) {

  form.addEventListener("submit", () => {

    const taskFormData = new FormData(form);

    for (const [key, value] of taskFormData) {
      taskLabel.textContent = value;
    }
    
    //reset the user input
    form.reset();

  });

  return taskLabel;
}