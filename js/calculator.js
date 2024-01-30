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

const keyCodes = [
  13, 27, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 88, 189, 190, 191,
];

const shiftKeyCodes = [48, 53, 56, 57, 88, 187];

display.textContent = '';

function calculate(e) {
  console.log(e);
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

document.addEventListener('keyup', calculate);
