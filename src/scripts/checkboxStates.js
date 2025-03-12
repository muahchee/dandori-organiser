//crosses out and uncrosses labels for checkboxes also adds sounds when doing it

import { pikminCrossOut } from "./pikmin-noises.js";
import { pikminUncross } from "./pikmin-noises.js";
import { TaskStorage } from "./taskStorage.js";

export function checkboxStates (input, label){

   return input.addEventListener("click", () => {

    const currentTaskUniqueID = input.parentElement.getAttribute("uniqueid");

     if (input.checked === true){

      label.style.textDecoration = "line-through";

      pikminCrossOut.play();

      new TaskStorage(currentTaskUniqueID).checkOffTask();

     } else {

      label.style.textDecoration = "none";

      pikminUncross.play();

      new TaskStorage(currentTaskUniqueID).uncheckTask();

     }
   })
}