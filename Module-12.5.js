// todo:    Module no - 12.5            topic: 12-5 Function return and set return value to a variable.

function willHaf  (num) {
    const haf = num / 2 ;
    return haf;
}

// console.log(willHaf(100));           function return না করলে  undefined দিবে। 
const hafResult = willHaf( 100);
console.log('haf result value of ',hafResult);

// second function : 
function multiply ( numb1, numb2){
       const multi = numb1 * numb2;
       return multi;
}

const totalMulti = multiply(5,5)
console.log('total multiply value of ',totalMulti);

// third : 
function addition ( number1, number2){
     const sum = number1 + number2;
     return sum;
}

const totalResult = addition(hafResult , totalMulti);
console.log('willHaf and addition is value ',totalResult);


