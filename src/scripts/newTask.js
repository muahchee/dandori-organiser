
import { Task } from "./task.js";

export function createTask(form) {

  form.addEventListener("submit", () => {

    const taskFormData = new FormData(form);

    for (const [key, value] of taskFormData) {

      return new Task(value).createTask();

    }

    form.reset();

  })
}