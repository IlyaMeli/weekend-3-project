let longWord = (str) => {
    let strArr = str.split(" ");
    let res = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
      if (res.length < strArr[i].length) {
        res = strArr[i];
      }
    }
    return res;
  };
  
  console.log(longWord("Welcome Sir"));
  