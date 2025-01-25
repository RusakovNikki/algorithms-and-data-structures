/**
 * https://cups.online/ru/workareas/education_2277/1219/2287/
 */

const test = (array) => {
  let maxValue = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  return maxValue;
};

test([95, 87, 100, 92, 85]);
