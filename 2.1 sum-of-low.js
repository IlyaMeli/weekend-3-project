let numArr = [19, 5, 42, 2, 77];
let numArr2 = [10, 343445353, 3453445, 3453545353453];

const sumOfLowest = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[0] + sorted[1];
};

console.log(sumOfLowest(numArr));
console.log(sumOfLowest(numArr2));
