/**
,* Экспоненциальный поиск нужен, чтобы выбрать начало и конец поиска.
 * Это нужно для того, чтобы отсечь ненужные элементы.
 * Суть его заключается в том, что его индекс увеличивается всегда вдвое.
 * И если элемент с текущим индексом больше target, то данный индекс будет правым якорем,
 * А левым будет текущий индекс / 2
 *
 * Сложность такого алгоритма как у бинарного поиска - log2(n)
 */

const expSearch = (data, target) => {
  let index = 1;
  while (target > data[index]) {
    index *= 2;
  }

  return {
    left: Math.floor(index / 2),
    right: index > data.length - 1 ? data.length - 1 : index,
  };
};

console.log(expSearch([8, 11, 12, 16, 18, 21, 33, 36, 48, 54, 63], 16));
