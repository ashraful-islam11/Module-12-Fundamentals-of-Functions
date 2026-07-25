// todo:       Module no - 12.7        topic:  Different types of parameters for a function. 

// এই ভিডিও এর মুল concept হলো , parameter হিসেবে, আমারা শুধু, numbar, নয়, string , boolean, array, object and function.
//  pass করতে পারি। 


// 1.  number: 

function yourAge (age){
    if(age >= 18){
        const adult = 'you are a Adult, and you will can the vot';
        return adult;
    }
    else{
        const under18 = 'you are not a adult,  18 হলে ভোট দিতে আসবেন, আজ নয়';
        return under18;
    }
}

const tellMeYorAge = yourAge(10);
console.log(tellMeYorAge);


// 2. string: parameter হিসেবে, string pass করলাম। 

function chowdhory (name){
     const yourName = ` your name is : Md ${name}  chowdhory.`;
     return yourName;
}

const yourName = chowdhory('Mamun');
console.log(yourName);



// 3.  boolean data type: parameter হিসেবে, boolean pass করলাম।

function isWeekendDay (day){
     if(day === true ){
        const holyDay = ' আজ জুমার দিন। 🕌';
        return holyDay;
     }
     else{
         const normalDay = 'আজ অনেক গুলো গুরুত্ব পূর্ণ class আছে ';
         return normalDay; 
     }
}

const isHolyDay = isWeekendDay(true);
console.log(`${isHolyDay}`);



// 4. array : 
 function firstElement ( outArray){
    const findFistElement = outArray[0];
    const double = findFistElement * 2;
    return double;

 }


 const array =[20, 33, 44, 55, 66, 88];
 const firstElementIsDoubled = firstElement(array);
 console.log(`Array er first element ke double korte hobe: ${firstElementIsDoubled} `);


 // 5. object data type: 

 function ceoOfPH( organization){

    let whoIsCeo = organization.ceo ;
    let nameOfCeo = whoIsCeo = 'Md Jhangkar Mahbub';
    return nameOfCeo;

 }



  const phInfo = {
    name : 'programming hero',
    ceo  : 'Jhankar vai',
    nowBatch : 14
  }
 const heIsBoss = ceoOfPH(phInfo);
 console.log(`PH of CEO name is ${heIsBoss} `);

 // এই ভিডিও থেকে আমরা এইটুকু জানলাম যে , parameter হিসেবে, আমরা সব ধরনের data type pass করতে পারি। 