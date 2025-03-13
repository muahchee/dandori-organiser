import "./styles.css";

import { dialogOpen } from "./scripts/dialogState.js";
import { Dialog } from "./scripts/dialog.js";

import { TaskCreator } from "./scripts/taskCreator.js";

import { TaskRestorer } from "./scripts/taskRestorer.js";
import { TaskResetter } from "./scripts/taskResetter.js";

//----------------------------//


//--new task button--
const newTaskBtn = document.querySelector("button.new-task");

const newTaskDialog = new Dialog().createDialog();

const resetBtn = document.querySelector("button.reset-task");

const taskList = document.querySelector(".task-list")

dialogOpen(newTaskBtn, newTaskDialog);

//restoring tasks from local storage
new TaskRestorer().restoreTasks();

//initial task
new TaskCreator(newTaskDialog.firstChild).initialTask();

//add event listener to new task dialog form
new TaskCreator(newTaskDialog.firstChild).newTask();

//reset button
new TaskResetter(resetBtn, taskList).resetTaskList()


