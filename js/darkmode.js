import { btn } from "./calculation.js";
import { txt } from "./textInput.js";

export const blackButton = document.querySelector('.black');
export const whiteButton = document.querySelector('.white');

export const changeBlack = function() {
  for(let i = 0; i < 20; i++) {
    btn.children[i].classList.remove("change-white");
    btn.children[i].classList.add("change-black");
  }
  txt.classList.remove("change-white");
  txt.classList.add("change-black");
}

export const changeWhite = function() {
  for(let i = 0; i < 20; i++) {
    btn.children[i].classList.add("change-white");
    btn.children[i].classList.remove("change-black");
  }
  txt.classList.add("change-white");
  txt.classList.remove("change-black");
}