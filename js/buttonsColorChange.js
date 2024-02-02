export const changeColor = function(e) {
  e.target.style.backgroundColor = 'gray'
}

export const originColor = function(e) {
  if(e.target.getAttribute('class').includes('change-white')) {
    e.target.style.backgroundColor = '';
    e.target.classList.add('white');
  } else {
    e.target.style.backgroundColor = '';
    e.target.classList.add('black');
  }
}