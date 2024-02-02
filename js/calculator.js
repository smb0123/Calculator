import { btn, calculator } from "./calculation.js";
import { reset } from "./reset.js";
import { changeColor, originColor } from "./buttonsColorChange.js";
import { txt, text, keyDown } from "./textInput.js";
import {blackButton, whiteButton, changeBlack, changeWhite} from "./darkmode.js";

// 버튼 클릭 시 색깔 변경
for(let i of btn.children) {
  i.addEventListener('mousedown', changeColor);
  i.addEventListener('mouseup', originColor);
}

// AC 클릭
btn.children[3].addEventListener('click', reset);

// = 클릭
btn.children[18].addEventListener('click', calculator);

// 텍스트 입력
for(let i of btn.children) {
  i.addEventListener('click', text);
  i.addEventListener('keydown', keyDown)
}

// darkmode 전환
blackButton.addEventListener('click', changeBlack);

// whitemode 전환
whiteButton.addEventListener('click', changeWhite);