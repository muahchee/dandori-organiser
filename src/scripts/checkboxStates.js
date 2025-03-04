//crosses out and uncrosses labels for checkboxes also adds sounds when doing it

import pikminWahoo from "../sounds/pikmin-wahoo.mp3"
import pikminWah from "../sounds/pikmin-wah.mp3"

const pikminCrossOut = new Audio(pikminWahoo);
const pikminUncross = new Audio(pikminWah);

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