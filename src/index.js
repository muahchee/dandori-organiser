import Sortable from "sortablejs";
import "./styles.css";
import { TaskDOM } from "./scripts/taskDOM.js";

import { dialogOpen } from "./scripts/dialogState.js";
import { Dialog } from "./scripts/dialog.js";

import { TaskCreator } from "./scripts/taskCreator.js";


//make list sortable
const list = document.querySelector(".task-list")

Sortable.create(list, {
  animation: 150,
	group: "task-list-order",
	store: {
		/**
		 * Get the order of elements. Called once during initialization.
		 @param   {Sortable}  sortable
		 @returns {Array}
		 */
		get: function (sortable) {
			let order = localStorage.getItem(sortable.options.group.name);
			return order ? order.split('|') : [];
		},

		/**
		 * Save the order of elements. Called onEnd (when the item is dropped).
		 @param {Sortable}  sortable
		 */
		set: function (sortable) {
			let order = sortable.toArray();
			localStorage.setItem(sortable.options.group.name, order.join('|'));
		}
	}
})
console.log(localStorage)


// create a task item, will delete this at the end

new TaskDOM("Second test task early ios low featured asdfjas dklfjasd;lfja sdklfjlasdjfla sdjf jaskd lfj; lasdjfk").createTask()
new TaskDOM("Wow it works!!!").createTask()

// localStorage.setItem("stored-tasks", [])


//--new task button--

const newTaskBtn = document.querySelector("button.new-task");

const newTaskDialog = new Dialog().createDialog();

dialogOpen(newTaskBtn, newTaskDialog);

new TaskCreator(newTaskDialog.firstChild, "stored-tasks").newTask();


//!!need to create a function to "reorder" task-list items based on id number, but maybe that wont be necessary once in get the new task button running. Since it'll be writing directly onto the DOM


