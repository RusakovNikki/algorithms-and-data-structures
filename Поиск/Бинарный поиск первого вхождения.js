/**
 * Бинарный поиск первого вхождения применяется, если в отсортированном массиве есть повторяющиеся цифры
 * И нам нужно получить самый первый элемент из этих повторов
 */
const leftBinarySearch = (data, target) => {
  let indexStart = 0;
  let indexEnd = data.length - 1;
  while (indexStart + 1 < indexEnd) {
    const middleIndex = Math.floor((indexStart + indexEnd) / 2);

    if (data[middleIndex] < target) {
      indexStart = middleIndex;
    } else {
      indexEnd = middleIndex;
    }
  }

  if (data[indexStart] === target) {
    return indexStart;
  }
  if (data[indexEnd] === target) {
    return indexEnd;
  }

  return -1;
};

console.log(leftBinarySearch([3, 4, 8, 8, 8, 9, 11, 11], 8));
