


let abbreviate = (name) =>{
    let res ="";
    for(let i = 0; i < name.length; i++){
        if(i === 0){
            res = name[i].toUpperCase();
        }
        if(name[i-1]=== " "){
            res += "."+name[i].toUpperCase();

        }
    }
    return res;
}
console.log(abbreviate("Sam Harris"))
console.log(abbreviate("ilya melihov"))