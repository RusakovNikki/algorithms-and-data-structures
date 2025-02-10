/** Тернарный поиск является частным случаем бинарного поиска. Но в отличие от него, мы массив делим не на 2, а на 3 части.
 * !Важно: Подходит только для отсортированного массива
 * Сложность данного алгоритма lon3(n)
 */

const ternarySearch = (data, target) => {
  let left = 0;
  let right = data.length - 1;

  while (left <= right) {
    const m1 = Math.floor(left + (right - left) / 3);
    const m2 = Math.floor(right - (right - left) / 3);

    if (data[m1] === target) return m1;

    if (data[m2] === target) return m2;

    if (data[m1] < target) {
      left = m1 + 1;
    } else {
      right = m1 - 1;
    }
    if (data[m2] > target) {
      right = m2 - 1;
    } else {
      left = m2 + 1;
    }
  }

  return -1;
};

console.log(ternarySearch([3, 7, 9, 11, 12, 16, 18, 19, 21, 24, 27, 29], 18));
