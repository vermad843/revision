//  sayHello 
//  greeting


 
// const sayHello = () => {
//     return 'Hello';
// }

// const greeting = (helloFn, name) => {
//    console.log(helloFn() + name);
// }

// greeting(sayHello, ' javaScript');

// const sayHello = () => {
//     return () => {
//         console.log('hello');
//     }
// }

// const add = sayHello();
// add();


// function getName(name) {
//     return name;
// }

// console.log(getName("deepak"));

// const getName = (name) => {
//     return name
// };

// console.log(getName('dk'));

// const getNameFn = () => {
//     return 'dk'; 
// }


// const greet = (getName,greeting) => {
//    console.log(`${greeting} ${getName()}`);
// }

// greet(getNameFn, ' hello' );




// // closure

// const makeAdder = (number) => {
//   return  (other_number) => {
//      return number + other_number;
//   } 
// }

// const fiveAdder = makeAdder(5);
// console.log(fiveAdder(2));

// console.log(makeAdder(2)(5));


// 


// higher order function - functions that take 

//   . take function as a argumnet 
//   . return a function as result





// [************]
// forEach 
// for loop 

// const numbers = [1, 2 ,3 , 4, 5];

// // forloop

// for(i = 0; i < numbers.length; i++) {
//    const ele = numbers[i];
//    console.log(ele);
// }

// // forEach 

// numbers.forEach((number, index, arr) => {
//    return console.log(number, index,arr);
// })


// numbers.forEach(number => console.log(number));


// Example : 

// forloops  : 1 

// const flavours  = ['choco', 'gin', 'car', 'cof', 'wal', 'ban'];

// for(let i = 0; i < flavours.length; i++) {
//    console.log('i like ' + flavours[i] + ' cake');
// }


// // forEach

// flavours.forEach((flavour) => {
//    console.log(`i like ${flavour} cake`);
// });


// //  forloops : 2


// const numbers = [2, 4, 6, 8];

// for (let i = 0; i < numbers.length; i++) {
//    console.log('The number', numbers[i], 'is at index', i);   
// }

// // forEach 

// numbers.forEach((number, index) => {
//    console.log(`The number,${number} is at index,${index}`);
// });



// // forloops : 3 

// const evenNumbers = [2, 4, 6, 8, 10];

// for (let i = 0; i < evenNumbers.length; i++) {
//    evenNumbers[i] = evenNumbers[i] * 2;
// }

// console.log(evenNumbers);


// // forEach

// evenNumbers.forEach((evenNumber, index) => {
//    evenNumber[index] = evenNumber[index] * 2;
// })


// console.log(evenNumbers);




// // for loops : 4 

//  let products =  [{
//     name : 'Running shoes',
//     price : 75
//  }, {
//     name : 'Golf shoes',
//     price : 85
//  }, {
//     name : 'Dress shoes',
//     price : 95
//  }, {
//     name : 'Walking shoes',
//     price : 65
//  }, {
//     name : 'Sandals',
//     price : 55
//  }];

//  products.forEach((product) => {
//     console.log(product.name)
//  })





// accumulator : forloop 

// let numbers_1 = [1, 2, 3, 4, 5];

// let sum = 0;//initialize accumulator

// for (let i = 0; i < numbers_1.length; i++) {
//    const number = numbers_1[i];
//    sum += number;//update accumulator
// }

// console.log(sum);//15


// //  forEach 

// numbers_1.forEach((number) => {
//    sum+=number
// });

// console.log(sum);




// // forloops : 

// let numbers_2 = [1, 2, 3, 4, 5];
// let doubledNumbers = [];

// for (let i = 0; i < numbers_2.length; i++) {
//    const element = numbers_2[i];
//    doubledNumbers.push(element * 2);  
// }
 
// console.log(doubledNumbers);


// // forEach 

// numbers_2.forEach((number) => {
//    doubledNumbers.push(number * 2);  
// });

// console.log(doubledNumbers);


//  forloops : 

let things = ['shoe', 'table', 'book', 'computer', 'phone'];
let copiedThings = [];

for (let i = 0; i < things.length; i++) {
   const element = things[i];
   copiedThings.push(element);
}

console.log(copiedThings);


// forEach 

things.forEach((number) => {
   copiedThings.push(number);
})

console.log(copiedThings);



// forloops : 


let all_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for (let i = 0; i < all_numbers.length; i++) {
   const element = all_numbers[i];
   if(element % 2 === 0) {
      evenNumbers.push(element);
   } 
}

console.log(evenNumbers);


// forEach 

all_numbers.forEach((number) => {
   if(number % 2 === 0) {
      evenNumbers.push(number);
   }
});

console.log(evenNumbers);
































