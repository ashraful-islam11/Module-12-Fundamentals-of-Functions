// todo:        Module no - 12.9        topic: Return all the even numbers of an array.

// loop use kore akta array te thaka all even number ke akta notun array er vetore rakhbo : 

const numbers = [ 12, 3, 22, 18, 90, 40];

 let mt =[];
for( const num of numbers){
    console.log(num);

    if(num % 2 === 0){
        console.log('even', num);
        mt.push(num);
       
    }
}
 console.log(mt);



 console.log('use function: only even number');

 function onlyEven (evens){
    let mtArray =[];
       for( const even  of evens){
        console.log(even);

         if(even % 2 === 0){
            console.log('even', even);
            mtArray.push(even)
         }
       }
       return mtArray;
 }

 const evenOnly = onlyEven(numbers);
 console.log(evenOnly);