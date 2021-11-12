let fibo = (num, start) => {
  let fiboArr = [];
  if (start === 1) {
    fiboArr[0] = 1;
    fiboArr[1] = 1;
  }
  if (start === 0) {
    fiboArr[0] = 0;
    fiboArr[1] = 1;
  }

  for (let i = 2; i < num; i++) {
    fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
  }
  if (start > 1) {
    return "invalid input choose 1 or 0";
  } else {
    return fiboArr;
  }
};

console.log(tribo(14, 1));
