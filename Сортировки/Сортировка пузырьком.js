/**
 * Суть её в том, что мы идём в цикле, и если находим число, которое больше следующего.
 * То они меняются местами. А если оно максимальное, то как пузырёк идет к концу массива.
 *
 * Алгоритм малоэффективный, и используется в основном в тренировочных примерах
 */

const bubbleSort2 = (array) => {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        const tmp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = tmp;
        sorted = false;
      }
    }
  }

  return array;
};

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        const tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }

  return array;
};

console.log(bubbleSort([5, 3, 15, 7, 6, 2, 11, 13]));
