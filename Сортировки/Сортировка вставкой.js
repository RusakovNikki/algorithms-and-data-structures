/**
 * Принцип работы в том, что первый элемент уже отсортирован.
 * А следующий - уже решаем куда поставить в отсортированной части
 */

const insertionSort = (array) => {
  debugger;
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        let tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
      }
    }
  }

  return array;
};

console.log(insertionSort([5, 3, 15, 7, 6, 2, 11, 13]));
