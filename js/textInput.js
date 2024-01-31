export const txt = document.querySelector('.text');

txt.textContent = '';

export const text = function(e) {
  const value = e.target.value;
  if(value === 'AC' || value === '='){
    return;
  }
  txt.textContent += value;
}