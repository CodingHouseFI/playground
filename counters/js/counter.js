var Counter = {}

Counter.count = function(text) {
  return { characters: text.length };
};

module.exports = Counter;
