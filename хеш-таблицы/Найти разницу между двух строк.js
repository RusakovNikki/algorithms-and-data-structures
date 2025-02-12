/**
 * На вход приходят две строки, вторая преобразована из первой.
 * И к ней добавлена ещё буква.
 * Необходимо найти эту букву
 */

const extraLetter = (letterA, letterB) => {
  const hash = {};
  //   debugger;

  for (let i = 0; i < letterA.length; i++) {
    if (hash[letterA[i]] === undefined) {
      hash[letterA[i]] = 1;
    } else {
      hash[letterA[i]]++;
    }
  }

  for (let i = 0; i < letterB.length; i++) {
    if (hash[letterB[i]] === undefined) {
      return letterB[i];
    }

    hash[letterB[i]]--;
    if (hash[letterB[i]] < 0) {
      return letterB[i];
    }
  }

  for (const key of Object.keys(hash)) {
    if (hash[key]) {
      return key;
    }
  }

  return "";
};

extraLetter("bb", "bb");
