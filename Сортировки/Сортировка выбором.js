/**
 * Суть данной сортировки в том, что каждый раз в массиве ищется минимальный элемент
 * И ставится в конец отсортированной части.
 * Сложность данного алгоритма O(n^2)
 */

const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minItemIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minItemIndex] > array[j]) {
        minItemIndex = j;
      }
    }

    let tmp = array[i];
    array[i] = array[minItemIndex];
    array[minItemIndex] = tmp;
  }

  return array;
};

console.log(selectionSort([5, 3, 15, 7, 6, 2, 11, 13]));
