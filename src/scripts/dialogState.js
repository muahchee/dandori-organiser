//controls open and closing of modal

export function dialogOpen (clickTarget, dialog){

  return clickTarget.addEventListener("click", () => {
    dialog.showModal();
  });
  
};

export function dialogClose (clickTarget, dialog){

  return clickTarget.addEventListener("click", () => {
    dialog.close();
  })

}