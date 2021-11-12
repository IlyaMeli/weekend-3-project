let tribo = (num, start) => {
  let triboArr = [];
  if (start === 1) {
    triboArr[0] = 1;
    triboArr[1] = 1;
    triboArr[2] = 1;
  }
  if (start === 0) {
    triboArr[0] = 0;
    triboArr[1] = 1;
    triboArr[2] = 1;
  }

  for (let i = 3; i < num; i++) {
    triboArr[i] = triboArr[i - 1] + triboArr[i - 2] + triboArr[i - 3];
  }
  if (start > 1) {
    return "invalid input choose 1 or 0";
  } else {
    return triboArr;
  }
};

console.log(tribo(14, 0));
