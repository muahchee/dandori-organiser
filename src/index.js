import Sortable from "sortablejs";
import "./styles.css";

import { dialogOpen } from "./scripts/dialogState.js";
import { Dialog } from "./scripts/dialog.js";

import { TaskCreator } from "./scripts/taskCreator.js";

import { TaskRestorer } from "./scripts/taskRestorer.js";

import { taskStorageKey } from "./scripts/taskStorageKey.js";

//----------------------------//

const list = document.querySelector(".task-list")

//--new task button--
const newTaskBtn = document.querySelector("button.new-task");

const newTaskDialog = new Dialog().createDialog();

dialogOpen(newTaskBtn, newTaskDialog);


//add event listener to new task dialog form
new TaskCreator(newTaskDialog.firstChild, taskStorageKey).newTask();

//initial task
new TaskCreator(newTaskDialog.firstChild, taskStorageKey).initialTask();

//restoring tasks from local storage
new TaskRestorer(taskStorageKey).restoreTasks();


//this need to be at the bottom so the restored order isnt overwritten!!
const sortedList = Sortable.create(list, {
  animation: 150,
	group: "task-list-order",
	store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 * @param   {Sortable}  sortable
		 * @returns {Array}
		 */
		get: function (sortable) {
			let order = localStorage.getItem(sortable.options.group.name);
			return order ? order.split('|') : [];
		},

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 * @param {Sortable}  sortable
		 */
		set: function (sortable) {
			let order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
		}
	}
})

