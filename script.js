const firstRow = prompt('Введите первую фразу');
const secondRow = prompt('а теперь вторую');
const chars = prompt('и символы для поиска');

function getMessage(firstRow, secondRow, chars) {
  let arrChar = [];

  for (let i = 0; i < chars.length; i++) {
    arrChar.push(chars.charAt(i));
  }

  let firstCount = getCount(firstRow, arrChar);
  let secondCount = getCount(secondRow, arrChar);

  if (firstCount > secondCount) {
    return firstRow;
  } else if (firstCount < secondCount) {
    return secondRow;
  } else return 'обе строки бесподобны';
}

function getCount(row, arrChar) {
  let count = 0;
  for (let i = 0; i < row.length; i++) {
    if (arrChar.indexOf(row.charAt(i)) != -1) {
      count++;
    }
  }
  return count;
}

console.log('Строка круче: ', getMessage(firstRow, secondRow, chars));