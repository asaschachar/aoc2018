var data = require('./data.js');


function diffCharacters(id1, id2) {
  let charDiff = [];
  for (var i=0; i<id1.length; i++) {
    if (id1[i] !== id2[i]) {
      charDiff.push(i)
    }
  }
  return charDiff;
}

for (var i=0; i<data.length-1; i++) {
  var id1 = data[i];
  for (var j=i+1; j<data.length; j++) {
    var id2 = data[j];
    charDiff = diffCharacters(id1, id2);
    if (charDiff.length === 1) {
      var arr = id1.split('');
      console.log(arr.splice(charDiff[0], 1, ''))
      console.log(arr.join(''))
      break;
    }
  }
}
