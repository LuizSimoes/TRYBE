function longestWord(sentence) {
  sentence = sentence.split(' ');

  let theWord = sentence[0];
  var longest = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] != "") {
      if (sentence[i].length > theWord.length) {
        longest = sentence[i].length;
        theWord = sentence[i];
      }
    }
  }
  return {
    length: longest,
    actuallWord: theWord
  }
}
console.log(longestWord("Esta função serve para separar a maior palavra da frase"));
