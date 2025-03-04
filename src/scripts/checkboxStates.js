//crosses out and uncrosses labels for checkboxes also adds sounds when doing it

import { pikminCrossOut } from "./pikmin-noises.js";
import { pikminUncross } from "./pikmin-noises.js";

export function checkboxStates (input, label){

   return input.addEventListener("click", () => {

     if (input.checked === true){

       label.style.textDecoration = "line-through";

       pikminCrossOut.play();


     } else {

       label.style.textDecoration = "none";

       pikminUncross.play();

     }
   })

}