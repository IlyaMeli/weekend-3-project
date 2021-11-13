const mask = (word) => {
  let res = "";
  for (let i = 0; i < word.length; i++) {
    if (i < word.length - 4) {
      res += "#";
    } else {
      res += word[i];
    }
  }

  return res;
};
console.log(mask("4556364607935616"));
