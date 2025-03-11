export function simulateDrag (element) {

  const target = element;

  let dragStart = new DragEvent("dragstart");
  dragStart.preventDefault();

  let dragEnd = new DragEvent("dragend");
  dragEnd.preventDefault();

  target.dispatchEvent(dragStart);
  target.dispatchEvent(dragEnd);


}