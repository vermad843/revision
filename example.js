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

// let things = ['shoe', 'table', 'book', 'computer', 'phone'];
// let copiedThings = [];

// for (let i = 0; i < things.length; i++) {
//    const element = things[i];
//    copiedThings.push(element);
// }

// console.log(copiedThings);


// // forEach 

// things.forEach((number) => {
//    copiedThings.push(number);
// })

// console.log(copiedThings);



// // forloops : 


// let all_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = [];

// for (let i = 0; i < all_numbers.length; i++) {
//    const element = all_numbers[i];
//    if(element % 2 === 0) {
//       evenNumbers.push(element);
//    } 
// }

// console.log(evenNumbers);


// // forEach 

// all_numbers.forEach((number) => {
//    if(number % 2 === 0) {
//       evenNumbers.push(number);
//    }
// });

// console.log(evenNumbers);



// 
// map : 

// let numbers = [1, 2, 3];

// let doubledNumbers = numbers.map((number) => {
//    return number*2;
// })

// console.log(doubledNumbers);


// // 



// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

// const threeLetters = days.map((day) => {
//    // return `${day[0]}${day[1]}${day[2]}`;
//    return day.substring(0,3);
// })

// console.log(threeLetters);


// // 

// const people = [{
//    first_name : 'Dk',
//    last_name : 'verma'
// },{
//    first_name : 'vishnu',
//    last_name : 'verma'
// }, {
//    first_name : 'hey',
//    last_name : 'man'
// }, {
//    first_name : 'kd',
//    last_name : 'uhho'
// }];


// const fullName = people.map((person) => {
//    return `${person.first_name} ${person.last_name}`;
// }) 

// console.log(fullName);



// // 

// const animals = [{
//    name : 'cat',
//    size : 'small'
// }, {
//    name : 'dog',
//    size : 'small'
// }, {
//    name : 'lion',
//    size : 'medium'
// }, {
//    name : 'elephant',
//    size : 'big' 
// }];

// const animalName = animals.map((animal) => {
//    return `${animal.name}`
// });

// console.log(animalName);


// // 

// const theNumbers = [4, 8, 15, 16, 23, 42];

// const valueAndIndex = theNumbers.map((number, index) => {
//    return {
//       number,
//       index
//    }
// });

// console.log(valueAndIndex);


// // 


// const starter = [2, 5, 10];

// const multiplied = starter.map((start, index, arr) => {
//    let nextIndex = index + 1;
//    if(index == arr.length-1) {
//       nextIndex = 0;
//    }
//    return start*arr[nextIndex];
// })

// console.log(multiplied);



// 
// ***** filter : 


// const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter((number) => {
//    return number % 2 === 0 ;
// });

// console.log(evenNumbers);


// // 

// const days = [
//    'Sunday',
//    'Monday',
//    'Tuesday',
//    'Wednesday',
//    'Thursday',
//    'Friday',
//    'Saturday'
// ];

// const startWithS = days.filter((day) => {
//    // return day[0] === 'S';
//    return day.charAt(0) === 'S';
// });

// console.log(startWithS);


// // 

// const people = [{
//    first_name : 'Dk',
//    last_name : 'Verma'
// }, {
//    first_name : 'vishnu',
//    last_name : 'Verma'
// }, {
//    first_name : 'john',
//    last_name : 'Verma'
// }, {
//    first_name : 'brock',
//    last_name : 'Verma'
// }];


// const lessThenThree = people.filter((person) => {
//    return person.first_name.length < 3 
// });

// console.log(lessThenThree);


// // 

// const animals = [{
//    name : 'cat',
//    size : 'small'
// }, {
//    name : 'dog',
//    size : 'medium'
// }, {
//    name : 'lion',
//    size : 'small'
// }, {
//    name : 'elephant',
//    size : 'big'
// }];


// const smallSize = animals.filter((animal) => {
//    return animal.size === 'small';
// });

// console.log(smallSize);



// // 

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];

// const lengthMoreThenFive = words.filter((word) => {
//    return word.length > 5;
// });

// console.log(lengthMoreThenFive);


// const genres = ['jazz', 'metal-core', 'punk', 'ska-core','vaporwave','country-core' ];


// const includesCore = genres.filter((gener) => {
//    // return gener.includes('core');
//    const i =  gener.indexOf('core');
//    console.log(i);
//    if(i !== -1) {
//      return i;
//    }
// });

// console.log(includesCore);




// Reduce : *****[]:

/* 
  acc = accumulator,
  initialize the acc 
  update acc  
*/


// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((sum, number) => {
//    return sum+=number ;
// },0);

// console.log(sum);//15



// 

// const fruits =  ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana'];


// const fruitSightings = fruits.reduce((fruitStock, fruit) => {
//    if(fruitStock.hasOwnProperty(fruit)) {
//       fruitStock[fruit]++;
//    }else {
//      fruitStock[fruit] = 1;
//    }
//    return fruitStock;
// }, {});


// console.log(fruitSightings);



// 


// const prices = [29.76, 41.85, 46.5];

// const averagePrices = prices.reduce((average, price, i, array ) => {
//      const averagePrice = average + price/ array.length;
//      return averagePrice;
// }, 0);

// console.log(averagePrices);//39.370



// 

const days = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday'
];

const firstThreeLetter = days.reduce((shorten, day) => {
   const firstThree =  day.substring(0, 3);
    shorten.push(firstThree);
   return shorten;
},[]);

console.log(firstThreeLetter);






 













































