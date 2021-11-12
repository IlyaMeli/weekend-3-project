let basicMath = (operator, num1, num2) => {
  let res;
  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "-":
      res = num1 - num2;
      break;
  }
  return res;
};

console.log(basicMath("-", 15, 18));
