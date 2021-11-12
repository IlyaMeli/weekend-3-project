let trimmString = (str) => {
  str = str.split("");
  str.pop();
  str.shift();
  let res = str.join("");
  return res;
};

console.log(trimmString("checkifworks"));
