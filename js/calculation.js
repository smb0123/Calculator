import { txt } from "./textInput.js";

export const btn = document.querySelector('.button');

export function calculator(e) {
  const result = new Function('return ' + txt.textContent)();
  txt.textContent = result;
}