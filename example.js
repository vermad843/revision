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

const numbers = [1, 2 ,3 , 4, 5];

// forloop

for(i = 0; i < numbers.length; i++) {
   const ele = numbers[i];
   console.log(ele);
}

// forEach 

numbers.forEach((number, index, arr) => {
   return console.log(number, index,arr);
})


// numbers.forEach(number => console.log(number));


