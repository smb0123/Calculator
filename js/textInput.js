export const txt = document.querySelector('.text');

txt.textContent = '';
const key = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '=', '+', '-', '*', '/' , 'Esc', '%', ')', '('];

export const text = function(e) {
  const value = e.target.value;
  if(value === 'AC' || value === '='){
    return;
  }
  txt.textContent += value;
}

export const keyDown = function(e) {
  for(let i of key) {
    if(e.key == i) {
      text({ target: { value: `${i}` } });
    }
    return;
  }
}

