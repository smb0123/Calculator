import { keyObj } from './constants.js';

const btn = document.querySelector('.button').children;

const changeColor = function (e) {
  e.target.style.backgroundColor = 'gray';
};

const originColor = function (e) {
  e.target.style.backgroundColor = 'white';
};

for (let i of btn) {
  i.addEventListener('mousedown', changeColor);
  i.addEventListener('mouseup', originColor);
}

const display = document.querySelector('.text');
const buttonWrapper = document.querySelector('.button');

function calculate() {
  console.log('TODO: calculate');
}

function processKey(key) {
  if (!keyObj.hasOwnProperty(key)) return;

  switch (keyObj[key]) {
    case keyObj.backspace:
      backSpaceDisplay();
      break;
    case keyObj.escape:
      clearDisplay();
      break;
    case keyObj.enter:
      calculate();
      break;
    default:
      display.textContent += keyObj[key];
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

function handleKeyup(e) {
  const scope = e.currentTarget ? e.currentTarget : document;
  const key = e.key?.toLowerCase();

  if (!keyObj.hasOwnProperty(key)) return;

  const element = scope.querySelector(`button[data-key="${keyObj[key]}"]`);

  if (element) {
    element.style.backgroundColor = 'gray';
    setTimeout(() => {
      element.style.backgroundColor = 'white';
    }, 100);
  }

  processKey(key);
}

function handleClick(e) {
  const target = e.target;
  const key = target.dataset.key?.toLowerCase();

  if (!keyObj.hasOwnProperty(key)) return;

  processKey(key);
}

document.addEventListener('keyup', handleKeyup);
buttonWrapper.addEventListener('click', handleClick);
