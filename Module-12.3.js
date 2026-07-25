// todo:        Module no -12.3             topic:  Function parameter, handle multiple parameters.



// single parameter: 

function sayHello (name){
    console.log('Hello !', name);
}


sayHello('ashraful');
sayHello('Mamun vai');
sayHello('Akash');
sayHello('everyone');


function marks(mark){
    console.log('our marks', mark);
}

marks(60);    //argument
marks(70);    // argument
marks(80);
marks(90);



// double parameter : function er vetore je veriable er moto , eita parameter. or call korar somoy je value pathai ,argument bole. 

// function declare: 

function ourMarks (name, marks){
      console.log(` my name is ${name} . and my  Assignment marks : ${marks}`);
}

// function called : 
ourMarks('Ashraful', 60);
ourMarks('Mamun', 60);
ourMarks('Akash', 60);



//* sum of multiple parameters: 

function willSum  (num, numb, number){
    let totalSum = num + numb + number;
    console.log(num, numb, number);
    console.log(`total sum value of ${totalSum}`);
}


// function call :  ekhan theke je value send kortechi aita ke Argument bole.

willSum( 60, 61, 65);
willSum(22,33,44);



// * multiple subtraction: 

function willSubtract (a, b, c, d){
    console.log(a, b, c, d);
    const  subtract = a -b- c- d;
    console.log(subtract);

}

// function call : 
willSubtract(100, 10, 15, 25, 10);


//*  multiply of multiple parameter: 
  function willMultiply  ( me, you, we){
    console.log(me, you, we);

    const multiply = me * you * we;
    console.log(multiply);
  }


  // function call : 
  willMultiply(5,5,2);
  willMultiply(2,3,2);



  //* division ; 

  function willDivision ( first , second){
        console.log(first, second);
        const division = first / second;
        console.log(division);
  }


  // call function: 
  willDivision( 100, 10);


  // square: of parameter: 

  function  willSquare ( num ){
      console.log(num);
     let square = num* num;
     console.log(square);
    }

    // call the function :
    willSquare(5);
  






