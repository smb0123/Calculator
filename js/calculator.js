const btn = document.querySelector('.button').children;
const displayText = document.querySelector('#displayText')

const changeColor = function(e) {
  e.target.style.backgroundColor = 'gray';
}

const originColor = function(e) {
  e.target.style.backgroundColor = 'white';
}

for(let i of btn) {
  i.addEventListener('mousedown', changeColor);
  i.addEventListener('mouseup', originColor);
}


function addToDisplay(text) {
    displayText.textContent += text;
}

function btnClick(button, text) {
  document.querySelector(button).addEventListener('click', function() {
    const currentLength = displayText.textContent.length;
    if(currentLength >= 14) {
      alert('이 이상 입력할 수 없습니다!')
    } else {
      addToDisplay(text)
    }
  });
}

btnClick('.zero', 0);
btnClick('.one', 1);
btnClick('.two', 2);
btnClick('.three', 3);
btnClick('.four', 4);
btnClick('.five', 5);
btnClick('.six', 6);
btnClick('.seven', 7);
btnClick('.eight', 8);
btnClick('.nine', 9);
btnClick('.left-bracket', '(');
btnClick('.right-bracket', ')');
btnClick('.remain', '%');
btnClick('.divide', '/');
btnClick('.multiply', 'x');
btnClick('.subtract', '-');
btnClick('.plus', '+');
btnClick('.point', '.');

function clearDisplay() {
  const displayText = document.querySelector('#displayText');
  displayText.textContent = '';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    clearDisplay();
  }
});

document.querySelector('.reset').addEventListener('click', function() {
  clearDisplay();
});