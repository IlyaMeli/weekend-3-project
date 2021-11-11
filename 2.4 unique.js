const findUniq = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== arr[i + 1] && i !== 0) {
      return (res = arr[i + 1]);
    }
    if (arr[i] !== arr[i + 1]) {
      return arr[i];
    }
  }
};

console.log(findUniq([2, 1, 1, 1, 1, 1]));
console.log(findUniq([0, 0, 0.55, 0, 0]));
