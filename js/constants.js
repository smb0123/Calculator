export const KEY_OBJ = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  '.': '.',
  '(': '(',
  ')': ')',
  '*': '*',
  x: '*',
  '/': '/',
  '%': '%',
  '+': '+',
  '-': '-',
  enter: 'enter',
  '=': 'enter',
  escape: 'escape',
  backspace: 'backspace',
  l: 'mode',
};

export const DARK_MODE_TYPE = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const DARK_MODE_IMG_SRC = {
  [DARK_MODE_TYPE.LIGHT]: '/images/sun.png',
  [DARK_MODE_TYPE.DARK]: '/images/moon.png',
};

export const DARK_MODE_IMG_ALT = {
  [DARK_MODE_TYPE.LIGHT]: '라이트모드 해',
  [DARK_MODE_TYPE.DARK]: '다크모드 달',
};
