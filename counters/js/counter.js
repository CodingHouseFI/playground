var Counter = {}

Counter.isWord = function(word) {
  return word.length > 0;
};

Counter.count = function(text) {
  var wordsMatch = text.match(/\w+/g) || { length: 0 };
  var numbersMatch = text.match(/[0-9]/g) || { length: 0 };
  var spacesMatch = text.match(/\s/g) || { length: 0 };
  var paragraphsMatch = text.split(/\n+/) || { length: 0 };
  return {
    characters: text.length,
    words: wordsMatch.length,
    spaces: spacesMatch.length,
    numbers: numbersMatch.length,
    paragraphs: paragraphsMatch.filter(this.isWord).length
  };
};

module.exports = Counter;
