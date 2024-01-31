const btn = document.querySelector('.button').children;
const displayText = document.querySelector('#displayText');

const changeColor = function (e) {
  e.target.style.backgroundColor = 'gray';
};

const originColor = function (e) {
  e.target.style.backgroundColor = 'white';
};

for (const button of btn) {
  button.addEventListener('mousedown', changeColor);
  button.addEventListener('mouseup', originColor);
  button.addEventListener('click', function () {
    const currentLength = displayText.textContent.length;
    if (currentLength >= 40) {
      alert('더 이상 입력할 수 없습니다!');
    } else {
      const buttonText = this.getAttribute('data-text') || this.textContent;
      addToDisplay(buttonText);
      if (buttonText === '%') {
        updateWithPercent();
      }
    }
  });
}

function addToDisplay(text) {
  displayText.textContent += text;
  updateFontSize(displayText.textContent);
}

function updateFontSize(text) {
  let fontSize;
  if (text.length <= 14) {
    fontSize = 3.125;
  } else if (text.length <= 22) {
    fontSize = 2;
  } else if (text.length <= 40) {
    fontSize = 1.125;
  }

  displayText.style.fontSize = `${fontSize}rem`;
}

function clearDisplay() {
  displayText.textContent = '';
}

document.querySelector('.reset').addEventListener('click', clearDisplay);

document.addEventListener('keydown', function (event) {
  const key = event.key;

  if (/[0-9+\-*/().]/.test(key)) {
    addToDisplay(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

function calculateResult() {
  const expression = displayText.textContent;

  try {
    const result = evaluateExpression(expression);
    const resultString = result.toLocaleString(undefined, { maximumFractionDigits: 10 });

    if (resultString.length > 40) {
      alert(`계산 결과가 너무 큽니다!\n${resultString}`);
    } else {
      displayText.textContent = resultString;
      updateFontSize(resultString);
    }
  } catch (error) {
    alert('잘못된 수식 입니다!');
  }
}

document.querySelector('.equal').addEventListener('click', calculateResult);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    calculateResult();
  }
});

function evaluateExpression(expression) {
  const sanitizedExpression = sanitizeExpression(expression);
  return Function(`'use strict'; return (${sanitizedExpression})`)();
}

function sanitizeExpression(expression) {
  const replacedExpressionWithMultiplication = expression.replace(/x/g, '*');
  const sanitizedExpression = replacedExpressionWithMultiplication.replace(/[^0-9+\-*/().%]/g, '');
  return sanitizedExpression;
}