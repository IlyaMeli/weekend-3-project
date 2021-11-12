let nb_year = (p0,percent,aug,p) => {
    let res = p0 + (p0 * (percent/100)) + aug ;
    let counter= 0;
    while (res < p) {
        res = p0 + (p0 * (percent/100)) + aug ;
        counter = counter+1;
        p0 = res;
    }
    return counter;

};

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));