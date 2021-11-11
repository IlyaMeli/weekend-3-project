let findNextSquare = (sqr) => {
  let rootNum = Math.sqrt(sqr) + 1;
  return rootNum * rootNum;
};

console.log(findNextSquare(121));
