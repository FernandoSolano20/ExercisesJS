function makeChocolate(smallBars, bigBars, goal){
    return bigBars * 5 <= goal && bigBars * 5 + smallBars >= goal ? goal - bigBars * 5 : -1;
    //conditional operator
}

console.log(makeChocolate(4, 1, 7));
console.log(makeChocolate(0, 1, 7));
console.log(makeChocolate(10, 1, 5));