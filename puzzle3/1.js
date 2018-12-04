var data = require('./data.js')
var numClaims = data.length;
var usageMap = {}
for (var i=1; i<numClaims+1; i++) {
  usageMap[i] = true;
}

let width = 0;
let height = 0;
data.forEach((cutOut) => {
  width = Math.max(cutOut[0]+cutOut[2], width);
  height = Math.max(cutOut[1]+cutOut[3], height);
})

console.log(width);
console.log(height);

var board = [];
for (var j=0; j<height; j++) {
  let row = []
  for (var i=0; i<width; i++) {
    row.push('.');
  }
  board.push(row);
}

data.forEach((cutOut, index) => {
  index = index+1;
  var start = cutOut[0]
  var end = cutOut[1]
  for (var i=start; i<start+cutOut[2]; i++) {
    for (var j=end; j<end+cutOut[3]; j++) {
      if (board[j][i] === '.') {
        board[j][i] = [index]
      } else if (typeof board[j][i] === 'object') {
        board[j][i].push(index)
        board[j][i].forEach((overlap) => {
          usageMap[overlap] = false;
        })
      }
    }
  }
})


let overlap = 0;
for (var j=0; j<height; j++) {
  for (var i=0; i<width; i++) {
    if (board[j][i].length > 1) {
      overlap++;
    }
  }
}

let nonOverlap = []
for (var key in usageMap) {
  if (usageMap[key]) {
    nonOverlap.push(key);
  }
}

console.log(overlap);
console.log(nonOverlap);
