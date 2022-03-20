function sumOfValues(){

    const values = [3, 11, 7, 2, 9, 10];
    let sum = 0;

    values.forEach(value => {
        sum = sum += value;
    })  
    return sum;
}
console.log(sumOfValues())

function arrayMax(){
    const values = [3, 11, 7, 2, 9, 10];
    max = values.reduce(function(a,b) {
        return Math.max(a,b);
    } -Infinity)
}
console.log(arrayMax())




/* This is good bc uses the spread operator, but can be a problem for big arrays
function arrayMax(){
    const values = [3, 11, 7, 2, 9, 10];
    return Math.max(...values)
}
console.log(arrayMax())*/
