let shortWord = (str) => {
  let strArr = str.split(" ");
  let res = strArr[0].length;
  for (let i = 1; i < strArr.length; i++) {
    if (res > strArr[i].length) {
      res = strArr[i].length;
    }
  }
  return res;
};

console.log(shortWord("how are you ?"));
