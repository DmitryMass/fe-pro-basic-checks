/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) =>
  string
    .split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
  // самая сложная собака
  let newStr = string.toLowerCase().split('');
  let j = 0;

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === '') {
      j = 0;
      continue;
    } else {
      if (j % 2 !== 0) {
        newStr[i] = newStr[i].toUpperCase();
      }
      j++;
    }
  }
  return newStr.join('');
}

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
  if (action === 'uppercase') {
    return string.toUpperCase();
  } else if (action === 'lowercase') {
    return string.toLowerCase();
  } else if (action === 'capitalize') {
    return capitalizeString(string);
  } else if (action === 'fence') {
    return fenceString(string);
  } else {
    return string;
  }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
  switch (action) {
    case 'uppercase':
      return string.toUpperCase();
    case 'lowercase':
      return string.toLowerCase();
    case 'capitalize':
      return capitalizeString(string);
    case 'fence':
      return fenceString(string);
    default:
      return string;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
  for (let i of string) {
    console.log(i);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
  for (let i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
  let i = 0;
  while (i < string.length) {
    console.log(string[i]);
    i++;
  }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) =>
  string.split('').map((item) => console.log(item));
