// First file//

// 1
// let avarageValue = [10, 20, 30];
// let count = 0;
// for (let i = 0; i < avarageValue.length; i++) {
//     count += avarageValue[i];
// }
// console.log(`Avarage value is ${Math.ceil(count / avarageValue.length)}`);

// ----------------------------------------------------------------------------

// 2
// let sumValue = [10, 40, 29, 92];
// let countSum = 0;
// for (let i = 0; i < sumValue.length; i++) {
//     countSum += sumValue[i];
// }
// console.log(`Sum: ${countSum}`);

// ------------------------------------------------------------------------------

// 3
// let str = 'salom hammaga';
// str = str.split(" ");
// let newStr = str.map(value => {
//     return value[0].toUpperCase() + value.slice(1);
// })
// console.log(newStr.join(" "));

// -------------------------------------------------------------------------------

// 4
// let str = 'salom hammaga nima gaplar qalay';
// str = str.split(" ");
// let strCount = [];
// let newStr = str.map(value => {
//     strCount.push(value.length);
// })
// console.log(strCount)

// --------------------------------------------------------

// 5
// let str = 'sa3lom55 nima';
// let strNumbers = [];
// for (let i = 0; i < str.length; i++) {
//     if (!isNaN(Number(str[i])) && str[i] != " ") {
//         strNumbers.push(Number(str[i]));
//         if (!isNaN(Number(str[i + 1]))) {
//             strNumbers.pop();
//             strNumbers.push(Number(str[i] + str[i + 1]));
//             i++;
//         }
//     }
// }
// console.log(strNumbers);

// -----------------------------------------------------------

// 6
// let arrObject = [{name: "Hasan"}, {name: "Ali"}];
// let temp = arrObject[0];
// temp.name = "Alisher";
// console.log(arrObject);

// ---------------------------------------------------------

// 7
// let arr = [{
//         number: 10
//     },
//     {
//         number: 20
//     },
//     {
//         number: 30
//     }
// ];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     count += arr[i].number;
// }
// console.log(Math.ceil(count/arr.length));

// -------------------------------------------------------------------------

// 8
// let str = "hello43 world";
// for (let i = 0; i < str.length; i++) {
//     if (!isNaN(Number(str[i]))) {
//         return console.log("Number is available");
//     }
// }

// -----------------------------------------------------------------

// 9
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.filter(value => {
//     if (value % 2 == 0) {
//         return value
//     }
// })
// console.log(newArr);

// --------------------------------------------------------------------------

// 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.filter(value => {
//     if (value % 2 != 0) {
//         return value
//     }
// })
// console.log(newArr);


// Second file//

// 1
// let arr = [13, 7, 23, 53, 23, 13, 8, 7, 34, 23];
// console.log(arr.reverse());

// ---------------------------------------------------

// 2
// let arr = [13, 7, 23, 53, 13, 8, 7, 34];
// let newArr = [];
// for (let l = 0; l < arr.length; l++) {
//     if (arr.indexOf(arr[l]) === arr.lastIndexOf(arr[l])) {
//         newArr.push(arr[l]);
//     }
// }

// console.log(newArr);

// ----------------------------------------------------

// 3
// let arr = [13, 7, 23, 53, 13, 8, 7, 34];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min); //basic
// 
// console.log(Math.min(...arr)); // optimall

// ----------------------------------------------------------------

// 4
// let arr = [{
//         number: 10
//     },
//     {
//         number: 20
//     },
//     {
//         number: 30
//     }
// ];

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     count += arr[i].number;
// }
// console.log(count);