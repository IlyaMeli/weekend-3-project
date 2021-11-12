

let yearsAndCenturies = (num) =>{
    num = num-1;
    return  Math.floor((num) /100) +1;

}

console.log(yearsAndCenturies(1705));