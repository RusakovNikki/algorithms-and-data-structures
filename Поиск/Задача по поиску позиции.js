/**
 * Дан отсортированный по возрастанию массив целых чисел и заданное число.
 * Если заданное число уже находится в массиве, верните его индекс. Если числа в массиве нет,
 * верните индекс, где оно должно находиться, чтобы сохранить порядок сортировки
 *
 * Входные данные
 * 5 7 9 11 13
 * 6
 *
 * Выходные данные
 * 1
 */

// Тут походу нужен алгоритм бинарного поиска первого вхождения

// Если последний элемент не равен имеющимуся, то надо проверить, больше или меньше он этого числа. В зависимости от этого брать индекс
const binarySearch = (array, searchNumber) => {
  let startIndex = 0;
  let endIndex = array.length - 1;
  debugger;
  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (array[middleIndex] === searchNumber) {
      return middleIndex;
    }
    if (array[middleIndex] < searchNumber) {
      startIndex = middleIndex + 1;
    } else if (array[middleIndex] > searchNumber) {
      endIndex = middleIndex - 1;
    }
  }

  return startIndex;
};

console.log(binarySearch([5, 7, 9, 11, 13, 14, 18, 22, 33], 6));
