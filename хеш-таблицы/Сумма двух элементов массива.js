/**
 * На вход даётся массив чисел, и target
 * Необходимо найти два таких элемента, сумма которых равна target
 */

const twoSun = (array, target) => {
  const hash = {};
  array.forEach((element) => {
    hash[element] = element;
  });

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const result = target - element;

    if (hash[result]) {
      return [element, hash[result]];
    }
  }

  return [];
};

console.log(twoSun([3, 7, 23, 14, 18], 30));
