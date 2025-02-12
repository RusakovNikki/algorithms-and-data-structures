/**
 * Данная сортировка чаще всего используется в функциях языка.
 * Принцип работы - найти опорный элемент. В идеале - медиану.
 * И разделяем на два массива - массив, меньший или равен этому значению
 * И массив, больший этого значения
 * И так круг за кругом
 *
 * Её сложность O(n * log2(n))
 * Но в наихудшем варианте может быть O(n^2)
 */

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);
  const middleValue = array[middleIndex];

  const less = [];
  const higher = [];

  for (let i = 0; i < array.length; i++) {
    if (i === middleIndex) {
      continue;
    }

    if (array[i] > middleValue) {
      higher.push(array[i]);
    } else {
      less.push(array[i]);
    }
  }

  return [...quickSort(less), middleValue, ...quickSort(higher)];
};

console.log(quickSort([5, 3, 15, 7, 6, 2, 11, 13]));
