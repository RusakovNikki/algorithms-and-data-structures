/**
 * https://cups.online/ru/workareas/education_2277/1218/2277/
 */

/**
 * Сложность временная O(N^2)
 * Сложность пространственная O(1)
 */
const test = (array, deleteNumber) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === deleteNumber) {
      for (let j = i; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      }
      array.pop();
    }
  }

  return array;
};

/**
 * Сложность временная O(N)
 * Сложность пространственная O(N)
 */
const test2 = (array, target) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== target) {
      result.push(array[i]);
    }
  }

  return result;
};

test([1, 2, -1, 4, 5, -1, 6], 4);
