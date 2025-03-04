//controls open and closing of modal
import { pikminCancel } from "./pikmin-noises.js";
import { pikminEdit } from "./pikmin-noises.js";


export function dialogOpen (clickTarget, dialog){

  return clickTarget.addEventListener("click", () => {

    pikminEdit.play();

    dialog.showModal();
  });
  
};

export function dialogClose (clickTarget, dialog){

  return clickTarget.addEventListener("click", () => {

    pikminCancel.play();

    dialog.close();
  })

}