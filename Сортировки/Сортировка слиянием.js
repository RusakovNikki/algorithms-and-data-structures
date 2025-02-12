/**
 * Его сложность O(N*log2(N))
 * Задействовано памяти O(N)
 * Сортировка устойчива
 * Она подходит для вычисления очень большого числа данных
 *
 * Суть сортировки в том, чтобы взять один массив, разбить на более маленькие подмассивы,
 * когда каждый массив состоит из одного элемента и сравнивать их
 * И складывать в результирующий массив
 */

const merge = (array1, array2) => {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }

  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result;
};

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftSideArray = array.splice(0, middleIndex);
  const rightSideArray = array;

  return merge(mergeSort(leftSideArray), mergeSort(rightSideArray));
};

console.log(mergeSort([5, 3, 15, 7, 6, 2, 11, 13]));
