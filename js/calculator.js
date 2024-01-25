const btn = document.querySelector('.button').children;

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

