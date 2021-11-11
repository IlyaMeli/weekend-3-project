let binaryArr = [1, 0, 0, 1, 1, 0];

let convertToInteger = (arr) => {
  debugger;
  let res = 0;
  let mult = 2;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      res = arr[i] * 1;
    } else {
      res += arr[i] * mult;
      mult *= 2;
    }
  }
  return res;
};

console.log(convertToInteger(binaryArr));
