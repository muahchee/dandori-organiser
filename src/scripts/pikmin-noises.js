// collect noises here

import pikminWahoo from "../sounds/pikmin-wahoo.mp3"
import pikminWah from "../sounds/pikmin-wah.mp3"
import pikminSigh from "../sounds/pikmin-sigh.mp3";
import pikminPluck from "../sounds/pikmin-pluck.mp3";
import pikminHey from "../sounds/pikmin-hey.mp3";
import pikminSelection from "../sounds/pikmin-selection.mp3"

export const pikminCrossOut = new Audio(pikminWahoo);
export const pikminUncross = new Audio(pikminWah);

export const pikminCancel = new Audio(pikminSigh);
export const pikminEdit = new Audio(pikminPluck);

export const pikminOptions = new Audio(pikminHey);

export const pikminConfirm = new Audio(pikminSelection);