// 5-oy 4-dars

// Symbol #1
// let id = Symbol()
// let soManyFeatures = {
//     name: "Alice",
//     age: 30,
//     height: 177,
//     weight: 70,
//     [id]: "test"
// }
// console.log(soManyFeatures);
// console.log(Object.keys(soManyFeatures));
// console.log(Object.getOwnPropertySymbols(id));

// Symbol #2

// let nameOfSymbol = Symbol();
// let ObjectFeatures = {
//     name : "Zuhriddin",
//     lastName: "Mutalibov",
//     age: 17,
//     year: 2007,
//     [nameOfSymbol] : "thing",
// }
// console.log(ObjectFeatures);
// console.log(Object.keys(ObjectFeatures));
// console.log(Object.getOwnPropertySymbols(nameOfSymbol));

// Rekusrsiv funksiyaga oid
// 1-masala

// function acceptAsAnArgument(num) {
//     if (num == 1) {
//         return 1;
//     }
//     return num + acceptAsAnArgument(num-1)
// }


// 2-masala
// function factorial(num) {
// if (num == 1) {
//     return 1;
// }
// return num * factorial(num-1)
// }
// console.log(factorial(5));

// 3-masala

// function fibonacci(num) {
//     if (num == 0) {
//         return 0;
//     }
//     else if (num == 1) {
//         return 1;
//     }
//     else {
//         return fibonacci(num - 1) + fibonacci(num - 2);
//     }
// }

// Classga oid
// 1-masala

// class car {
//     constructor (model, year, colour) {
//         this.model = model;
//         this.year = year;
//         this.colour = colour;
//     }
// }

// 2-masala

// class getArea {
//     constructor (uzunlik, kenglik) {
//         this.uzunlik = uzunlik;
//         this.kenglik = kenglik;
//     }
// }

// CharAt

// 1-masala

// function getIndex (text, index) {
//       if (index >= text.length) {
//         return text.charAt(index)
//       } else {
//         return ""
//       }
// }

// 2-masala

// function getLastIndex(text) {
//     return text.charAt(text.length - 1); 
//    }
//    let arr = 'salom';
//    let res = getLastIndex(arr);
//    console.log(res); 

// 3-masala

// function bolibChiqarish(string) {
//     for (let i = 0; i < string.length; i++) {
//         console.log(string.charAt(i));
//     }
// }

// CharCodeAt
// 1-masala
// function unicodeValue(arr,index) {
//     let res = arr.charCodeAt(index);
//     return res
// }

// 2-masala

// function findUnicodeForEveryValue(string) {
//     let newArray = [];
//     for (let i = 0; i < string.length; i++) {
//         let res = string.charCodeAt(i);
//         newArray.push(res);
//     }
//     return newArray;
// }

// 3-masala
// function findOnlyUnicodeOfThreeElements(string) {
//     let newArray = [];
//     for (let i = 0; i < 3 && i < string.length; i++) { 
//         let res = string.charCodeAt(i);
//         newArray.push(res);
//     }
//     return newArray;
// }

// At

// 1-misol

// function atRandom(arr, index) {
//     let res = arr.at(index);
//     return res
// }
// let arr = ["salom"];
// let res = atRandom(arr, 1);
// console.log(res);

//  2-misol

// function lastElement(str) {
//     if (str.length > 0) { 
//       return str[str.length - 1]; 
//     } 
//   }

// 3-misol

// function getLastElementOfString(string) {
//     let res = string.at(-5);
//     console.log(res);
// }

// Slice

// 1-masala

// let str = "Salom Yaxshimisan";
// let halfLength = Math.floor(str.length / 2);
// let firstHalf = str.slice(0, halfLength); 
// console.log(firstHalf); 

// 2-masala

// let str = "Salom";
// let firstThreeLetters = str.slice(0,3);
// console.log(firstThreeLetters);

// 3-masala

// let str = "Salomlar";
// let lastFiveElements = str.slice(-5);
// console.log(lastFiveElements);

// Substring

// 1-masala

// let str = "Salom bolalalar";
// let res = str.substring(2,3);
// console.log(res);

// 2-masala

// let str = "Salom Mutalibov";
// let res = str.substring(0,4);
// console.log(res);

// 3-masala

// let str = "Salom bolalar";
// let res = str.substring(5,str.length);
// console.log(res);

// Substr

// 1-masala

// let substrCode = "Mutalibov";
// let res = substrCode.substr(2,13);
// console.log(res);

// 2-masala

// let str = "Salom, Salom, Salom,";
// for (let i = 0; i < str.length; i++) {
//     let middle = str.length / 2
// }
// let res = str.substr(middle, 5);

// 3-masala

// let str = "Salom, Salom, Salom";
// let res = str.substr(-4);
// console.log(res);

// Trim // TrimStart // TrimEnd

// 1-misol

// let str = "    Salom    ";
// let res = str.trim();
// console.log(res);

// 2-misol

// let str = "   Salom";
// let res = str.trimStart();
// console.log(res);

// 3-misol 

// let str = "Salom   "
// let res = str.trimEnd();
// console.log(res);

// PadEnd, // Padstart;
// 1-masala

// let string = "Salomlar";
// let res = string.padEnd(10, "!");
// console.log(res);

// 2-masala
// let string = "Salomlar";
// let res = string.padStart(15,"/");
// console.log(res);

// 3-masala

// let phoneNumber = 12345;
// let res = phoneNumber.padStart(3,0)
// console.log(res);

// Repeat

// 1-masala

// let str = "salom";
// let res = str.repeat(3);
// console.log(res);

// 2-masala



















































