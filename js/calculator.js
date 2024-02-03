import {
  KEY_OBJ,
  DARK_MODE_TYPE,
  DARK_MODE_IMG_SRC,
  DARK_MODE_IMG_ALT,
} from './constants.js';

const display = document.querySelector('.text');
const buttonWrapper = document.querySelector('.button');
const darkModeToggler = document.querySelector('.darkModeToggler');

function calculate() {
  try {
    const expression = display.textContent;
    const result = new Function('return ' + expression)();
    display.textContent = result;
  } catch (error) {
    console.log(error);
  }
}

function processKey(key) {
  if (!KEY_OBJ.hasOwnProperty(key)) return;

  switch (KEY_OBJ[key]) {
    case KEY_OBJ.backspace:
      backSpaceDisplay();
      break;
    case KEY_OBJ.escape:
      clearDisplay();
      break;
    case KEY_OBJ.enter:
      calculate();
      break;
    case KEY_OBJ.l:
      toggleMode();
      break;
    default:
      display.textContent += KEY_OBJ[key];
      break;
  }
}

function backSpaceDisplay() {
  const textLength = display.textContent.length;
  display.textContent = display.textContent.slice(0, textLength - 1);
}

function clearDisplay() {
  display.textContent = '';
}

function handleKeydown(e) {
  const scope = e.currentTarget ? e.currentTarget : document;
  const key = e.key?.toLowerCase();
  const ctrlKey = e.ctrlKey;
  const shiftKey = e.shiftKey;

  if (
    !KEY_OBJ.hasOwnProperty(key) ||
    (KEY_OBJ[key] === KEY_OBJ.l && !(ctrlKey && shiftKey))
  )
    return;

  const element = scope.querySelector(`button[data-key="${KEY_OBJ[key]}"]`);

  if (element) {
    element.classList.add('active');
    setTimeout(() => {
      element.classList.remove('active');
    }, 100);
  }

  processKey(key);
}

function handleClickKey(e) {
  const target = e.target;
  const key = target.dataset.key?.toLowerCase();

  if (!KEY_OBJ.hasOwnProperty(key)) return;

  processKey(key);
}

function handleClickMode(e) {
  e.stopPropagation();

  const target = e.target;

  if (!target.classList.contains('darkModeToggler')) return;

  toggleMode();
}

function toggleMode() {
  const calculatorBox = document.querySelector('.calculator-box');

  const mode = darkModeToggler.dataset.mode?.toLowerCase();
  const changeMode =
    mode === DARK_MODE_TYPE.DARK ? DARK_MODE_TYPE.LIGHT : DARK_MODE_TYPE.DARK;
  calculatorBox.classList.remove(mode);
  calculatorBox.classList.add(changeMode);
  darkModeToggler.dataset.mode = changeMode;
  darkModeToggler.setAttribute('src', DARK_MODE_IMG_SRC[changeMode]);
  darkModeToggler.setAttribute('alt', DARK_MODE_IMG_ALT[changeMode]);
}

document.addEventListener('keydown', handleKeydown);
buttonWrapper.addEventListener('click', handleClickKey);
darkModeToggler.addEventListener('click', handleClickMode);
