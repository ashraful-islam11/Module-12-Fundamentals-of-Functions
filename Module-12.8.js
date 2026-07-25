//todo:              Module no 12.8                   topic: Sum of all numbers in an array using function.

//  code repeated এর হাত থেকে বাচতে আমরা, function লিখি।  প্রমানঃ 

const allMarks = [ 12, 13, 42, 34, 23, 70];

// 1. all marks : get all marks and sum all marks:

let  sumMarks = 0;
for( const mark of allMarks){
     console.log(mark);
    sumMarks = sumMarks + mark;
    console.log(`all marks of sum :`, sumMarks);
}

// 2. all even number : get and sum . 
const allEvenNumbers = [22, 44, 66, 88, 90, 40, 22, 58];

let evenSum = 0 ;
for( const even of allEvenNumbers){

    evenSum = evenSum + even;
    console.log(`${even} is even number of sum : ${evenSum}`);

}

// 3. all odds number : get and sum:
const allOdds =[ 11, 21, 33, 43, 55, 65, 77, 89];

let odds = 0;
for( const odd of allOdds){
    console.log(odd);

    odds = odds + odd;
    console.log(` ${odd} is odd number of sum: ${odds}`);
    
}

// আমরা just এখানে, 1. random number array এর লুপ করেছি,  2. even number এর লুপ করেছি, 3. odd number এর লুপ করেছি ।

// এই একই টাইপের কাজ করতে আমাদের কত code লিখতে হয়েছে।  এই code repeat বন্ধ করার জন্য আমরা function use  করব। 

// 1. শুধু এক বার ই code লিখবোঃ 

// same problem solve with function : 
console.log('~~~~~~~~~~ same problem solve with function ~~~~~~~~~~~~');

function ourArray ( arrays){
    let sum = 0; 
    
    for( const array of arrays){
        sum = sum + array;

        console.log(`${array} is sum of value : ${sum}` );
    }
        
    return sum;

}


// function call: 
const result = ourArray(allMarks);
console.log(` total sum of value is ${result} `);

// even number sum: 
const evenOfResult = ourArray(allEvenNumbers);
console.log(`total even of sum number value : ${evenOfResult}`);

// odd number of sum: 
const oddOfResult = ourArray(allOdds);
console.log(`total odd of sum number value: ${oddOfResult}`);



