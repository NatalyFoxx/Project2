//comment
/*
куча текста
*/

function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(isNumber(7));

console.log("!");

// let arr = [4, 7, "str", true];

// let matrix = [
//   [1, 2, 4],
//   [3, 5, 7],
//   [0, 8, 9],
// ];

// let arr2 = [6, 78, 91, 54];

// let b = 5;
// console.log(`hhhhhhh
// jjjjjjjj ${b}`);
