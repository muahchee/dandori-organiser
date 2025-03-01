import Sortable from "sortablejs";
import "./styles.css";
import "/"


const list = document.querySelector(".task-list")

new Sortable(list, {
  animation: 150,
});