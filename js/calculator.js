import { keyCodes, shiftKeyCodes } from './constants.js';

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

display.textContent = '';

function handleKeyup(e) {
  console.log(e.key, ' ', e.keyCode);

  const key = e.key;
  const keyCode = e.keyCode;
  const shiftKey = e.shiftKey;

  if (
    (shiftKey && !shiftKeyCodes.includes(keyCode)) ||
    (!shiftKey && !keyCodes.includes(keyCode))
  ) {
    return;
  }

  if (keyCode === 13) {
    console.log('TODO: 계산');
    return;
  } else if (keyCode === 27) {
    console.log('TODO: 클리어');
    display.textContent = '';
    return;
  }

  display.textContent += key;
}

function calculate(e) {}

document.addEventListener('keyup', handleKeyup);
buttonWrapper.addEventListener('click', calculate);
