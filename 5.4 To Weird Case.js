
let string =  "Weird string case";
let string1 =  "String";

let toWeirdCase = (str) => {
    res="";
    let strArr = str.split(" ");

    for (const word of strArr) {
        res+= " ";
        for (let i = 0; i < word.length; i++) {
           if(i % 2 == 0){
               res+= word[i].toUpperCase();
           }
            else{
                res+= word[i]
            }
        }
        
    }

    return res;

}


console.log(toWeirdCase(string));