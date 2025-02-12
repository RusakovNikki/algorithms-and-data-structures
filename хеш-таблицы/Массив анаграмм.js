/**
 * На вход приходит массив строк.
 * Его необходимо сгруппировать так, чтобы все анаграммы находились в одном подмассиве
 * ["eat", "tea", "tan", "ate", "nat", "bat"] -> [["bat"], ["nat", "tan"], ["ate," eat, tea]]
 */

const anagramArray = (array) => {
  const hash = {};
  for (let i = 0; i < array.length; i++) {
    const sortedValue = array[i].split("").sort().join("");

    if (hash[sortedValue]) {
      hash[sortedValue].push(array[i]);
    } else {
      hash[sortedValue] = [array[i]];
    }
  }

  return Object.values(hash);
};

console.log(anagramArray(["eat", "tea", "tan", "ate", "nat", "bat"]));
