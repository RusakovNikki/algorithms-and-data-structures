/**
 * Алгоритм линейного поиска подходит в том случае, если массив не отсортирован, или речь идёт о максимуме и минимуме
 */
const linearSearch = (data, target) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch([4, 1, 3, 8, 25, 16], 3));
