var data = require('./data.js');

var twoletters = 0;
var threeletters = 0;

data.forEach((word) => {
  var frequencyMap = {};
  for (var i=0; i<word.length; i++) {
    var letter = word[i];
    if (frequencyMap[letter]) {
      frequencyMap[letter] += 1;
    } else {
      frequencyMap[letter] = 1;
    }
  }

  var twoletter = false;
  var threeletter = false;
  Object.keys(frequencyMap).forEach((key) => {
    if (frequencyMap[key] === 2) {
      twoletter = true;
    } else if (frequencyMap[key] === 3) {
      threeletter = true;
    }
  });

  if (twoletter) {
    twoletters += 1;
  }

  if (threeletter) {
    threeletters += 1;
  }
})

console.log(twoletters*threeletters);
