import "./styles.css";

import { dialogOpen } from "./scripts/dialogState.js";
import { Dialog } from "./scripts/dialog.js";

import { TaskCreator } from "./scripts/taskCreator.js";

import { TaskRestorer } from "./scripts/taskRestorer.js";

import { sortableList } from "./scripts/sortableList.js";

//----------------------------//


//--new task button--
const newTaskBtn = document.querySelector("button.new-task");

const newTaskDialog = new Dialog().createDialog();

const list = document.querySelector(".task-list")

dialogOpen(newTaskBtn, newTaskDialog);


//add event listener to new task dialog form
new TaskCreator(newTaskDialog.firstChild).newTask();

//initial task
new TaskCreator(newTaskDialog.firstChild).initialTask();

//restoring tasks from local storage
new TaskRestorer().restoreTasks();


//this need to be at the bottom so the restored order isnt overwritten!!
const sortedList = sortableList(list)

console.log(sortedList)

