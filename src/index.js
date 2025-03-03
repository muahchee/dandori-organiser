import Sortable from "sortablejs";
import "./styles.css";
import { Task } from "./scripts/task.js";


//make list sortable
const list = document.querySelector(".task-list")

new Sortable(list, {
  animation: 150,
});

//create a task item

new Task("Second test task early ios low featured asdfjasdklfjasd;lfjasdklfjlasdjflasdjfjaskdlfj;lasdjfk").createTask()
new Task("Wow it works!!!").createTask()