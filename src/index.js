import "./styles.css";

import { dialogOpen } from "./scripts/dialogState.js";
import { Dialog } from "./scripts/dialog.js";

import { TaskCreator } from "./scripts/taskCreator.js";

import { TaskRestorer } from "./scripts/taskRestorer.js";

//----------------------------//


//--new task button--
const newTaskBtn = document.querySelector("button.new-task");

const newTaskDialog = new Dialog().createDialog();

dialogOpen(newTaskBtn, newTaskDialog);

//initial task
new TaskCreator(newTaskDialog.firstChild).initialTask();

//add event listener to new task dialog form
new TaskCreator(newTaskDialog.firstChild).newTask();

//restoring tasks from local storage
new TaskRestorer().restoreTasks();


