let busWay = [[0,4],[2,5],[3,5],[3,7],[1,2]];

let peopleOnTheBus = (busWay) =>{
    let res = 0;
for (let i = 0; i < busWay.length; i++){
    res += (busWay[i][1] - busWay[i][0] );
}
return res;

}

console.log(peopleOnTheBus(busWay));