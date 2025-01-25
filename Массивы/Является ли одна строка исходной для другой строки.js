/**
 * На вход два массива: a и b
 * В массиве b элементы, если такие имеются, из массива a будут расположены ровно в той же последовательности
 * Пример:
 * a = ["a", "b", "c"]
 * b = ["u", "a", "b", "q", "d"]
 */

const isSubsequence = (arrayA, arrayB) => {
  let indexA = 0;

  for (let indexB = 0; indexB < arrayB.length; indexB++) {
    if (arrayA[indexA] === arrayB[indexB]) {
      indexA++;
    }
  }

  return indexA === arrayA.length;
};

console.log(isSubsequence(["a", "b", "c"], ["u", "a", "b", "q", "d"]));
