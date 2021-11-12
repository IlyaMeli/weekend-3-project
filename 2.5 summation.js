let summation = (num) => {
  let res = 0;
  for (let i = 0; i <= num; i++) {
    res += i;
  }
  return res;
};

console.log(summation(0));
