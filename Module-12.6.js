// todo:        Module no - 12.6            topic:  Recap and conditional return of odd and even

//*  recap:         module 12.1 - 12.5  এই মডিঊল থেকে, আমরা just 5 টা জিনিস শিখতেপারলেই  হয়ে গেল। 

//* 1.           how to declare function :
 function  firstFunction (){
    console.log('this is a first function ');
 } 

 //* 2.     how to call function: 
       firstFunction();

// * 3. how to deil with  parameter in function :

  function divide ( num3, num4){
    const divideResult = num3 /num4;
    console.log(divideResult);
    return divideResult;
  }

//   call :
  divide( 50, 10);

 
//*   4. how to deil with return ; 

  function  doMath ( a, b, c, d){

      const first = a + b ;
      const second = c + d;

      const multiPly = first * second; 

      const divide = multiPly /  2 ;
      return divide;
  }


  const result = doMath(10, 20, 10, 40);
  console.log(result);

  //* 5.  call function with variable: 
    const denominator = 2 ;
    const totalResult = divide( result, denominator);
    console.log(totalResult);




    console.log('~~~~~~~~~~~~~~~~~ conditional return of odd and even ~~~~~~~~~~~~~~~~~~~');

    function isEven (sentNumber){
          if( sentNumber % 2 === 0){
              return true;
          }
          else{
            return false;
          }
    }

    const evenResult = isEven(20);
    console.log( ' isEven number of ',evenResult);



    // isOdd check: 

     function isOdd ( sentNumber2){
        if( sentNumber2 % 2 === 1){
            return true;
        }
        else{
            return false;
        }
     }

     const oddResult  = isOdd( 22);
     console.log('isOdd is ', oddResult);


