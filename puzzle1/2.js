var data = require('./data.js');

var map = { 0: true };
var currentValue = 0;
var repeat;
var i = 0;

while (true) {
  currentValue += data[i % data.length]
  if (map[currentValue]) {
    repeat = currentValue;
    break;
  } else {
    map[currentValue] = true;
  }
  i++;
}

console.log(repeat);
