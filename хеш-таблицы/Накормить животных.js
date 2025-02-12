/**
 * На вход даётся два массива.
 * Первый - массив килограмм еды, которых конкретному животному нужно потреблять
 * Второй - массив килограмм еды, который дали для кормёшки.
 * При этом один мешок можно использовать только для одного животного.
 * Мешок с едой большего размера, чем требуется можно давать, но меньшего - нет
 */

const feedAnimals = (animalsArray, foodArray) => {
  animalsArray = animalsArray.sort();
  foodArray = foodArray.sort();

  let count = 0;

  for (let f of foodArray) {
    if (f >= animalsArray[count]) {
      count += 1;
    }

    if (count === animalsArray.length) {
      break;
    }
  }

  return count;
};

console.log(feedAnimals([3, 4, 7], [8, 1, 2]));
