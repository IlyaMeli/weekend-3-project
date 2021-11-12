let repeatStr = (num,str) =>{
let arr = [];
    for (let i = 0; i < num; i++){
        arr.push(str);
    }
 return arr.join("");
}

console.log(repeatStr(6,"|"));