var data = require('./data.js');
var reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(data.reduce(reducer, 0));
