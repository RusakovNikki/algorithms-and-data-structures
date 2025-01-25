// 6
// 0 0 6 0 9 8

/**
 * https://cups.online/ru/workareas/education_2277/1217/2276/
 *
 * Придумать решение более простое
 */

/**
 * Сложность временная O(N^2)
 * Сложность пространственная O(1)
 */
const test = (array) => {
  for (let i = 0; i < array.length; i++) {
    let zeroIndex;
    if (array[i] === 0) {
      zeroIndex = i;
    } else {
      continue;
    }
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] !== 0) {
        const tmp = array[j];
        array[j] = array[zeroIndex];
        array[zeroIndex] = tmp;
        break;
      }
    }
  }

  return array;
};

/**
 * Сложность временная O(N)
 * Сложность пространственная O(N)
 */
const test2 = (array) => {
  const resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      resultArray.push(array[i]);
    }
  }

  for (let i = resultArray.length; i < array.length; i++) {
    resultArray.push(0);
  }

  return resultArray;
};

test2([0, 0, 6, 0, 9, 8]);
