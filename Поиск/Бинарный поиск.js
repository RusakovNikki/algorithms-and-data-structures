/**
 * Бинарный поиск подходит для поиска чисел в отсортированном массиве
 */

const binarySearch = (data, target) => {
  let indexStart = 0;
  let indexEnd = data.length - 1;

  while (indexStart <= indexEnd) {
    const middleIndex = Math.floor((indexStart + indexEnd) / 2);
    if (data[middleIndex] === target) {
      return middleIndex;
    }
    if (data[middleIndex] > target) {
      indexEnd = middleIndex - 1;
    } else {
      indexStart = middleIndex + 1;
    }
  }

  return -1;
};

console.log(binarySearch([1, 3, 4, 7, 8, 9, 11, 12, 16, 21, 36], 36));
