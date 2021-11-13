let string = "the-stealth-warrior";
let string1 = "The_Cool_Warrior";

const toCamelCase = (str) =>{
    debugger;
    let res = [];
    for (let i = 0; i < str.length; i++){
        

        if(str[i-1]=== "-"||str[i-1]=== "_"){
            res.pop();
            res.push(str[i].toUpperCase())
            special = str[i-1];
            continue;
        }

        res.push(str[i]);        
        

    
    }
    return res.join("");
}

console.log(toCamelCase(string));