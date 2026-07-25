//todo              Module no - 12.4            topic: How Function works and argument vs parameters.

// how to work function: 

function calculateNum ( number1, number2){
    const result = number1 + number2;
    console.log(result);
}

calculateNum(10, 20);



// argument and parameters:

function ArguPera (num, num2){
    const multiply = num * num2;
    console.log(multiply);
}

// arguments : 
ArguPera(6,6);




// square : 
function willSum ( numb1, numb2){
        const  sum = numb1 + numb2;
        return sum;
}

const sumResult = willSum( 20 , 50);
console.log(sumResult);