// todo:       Module no - 12.10       topic:    Function Summary and Practice Tasks

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

