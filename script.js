//! ************ Function ***************

//! 1. Function Declaration

//?
// function printHello() {
//   console.log("Hello World");
// }

// printHello()
// printHello()

// //?
// function name(firstName, lastName) {
//   console.log(`Merhaba ${firstName} ${lastName}`);
// }

// name("Ahmet","Ali")

//?
// 1.Yol
// function sayi(sayi1){
//     if(sayi1%2 === 0) console.log("sayı çifttir")
//     else console.log("sayı tektir")
// }

// let a = +prompt("sayı giriniz")

// sayi(a)

// 2.Yol

// let a = +prompt("sayı giriniz")
// sayi(a)

// function sayi(sayi1){
//     sayi1%2 === 0 ? console.log("sayı çifttir") : console.log("sayı tektir")
// }

//! 2. Function Expression

// const print = function(){
//     console.log("Hello World")
// }

// print()

//?
// const sayi = function(sayi1){
//   sayi1%2 === 0 ? console.log("sayı çifttir") : console.log("sayı tektir")
// }

// sayi(5)

//?
// let controller = function (s1, s2, s3) {
//   if (s1 > s2 && s1 > s3) console.log(`En büyük sayı ${s1}`);
//   else if( s2>s1 && s2>s3) console.log(`En büyük sayı ${s2}`);
//   else console.log(`En büyük sayı ${s3}`);
// };

// let s1 = +prompt("1. sayıyı giriniz")
// let s2 = +prompt("2. sayıyı giriniz")
// let s3 = +prompt("3. sayıyı giriniz")

// controller(s1,s2,s3)

//?

// const add = function (n1, n2) {
//   return n1 + n2;
// };

// const sub = function (n1, n2) {
//   return n1 - n2;
// };

// const mult = function (n1, n2) {
//   return n1 * n2;
// };

// const div = function (n1, n2) {
//   return n1 / n2;
// };

// const calculator = function (s1,s2,operator){
//     let result = 0;
//     switch (operator) {
//         case "+":
//             result = add(s1,s2)
//             break;
//         case "-":
//             result = sub(s1,s2)
//             break
//         case "*":
//             result = mult(s1,s2)
//             break
//         case "/":
//             result = div(s1,s2)
//             break
//         default:
//             break;
//         }
//         return result
// }

// console.log(calculator(3,2,"/"))

//! 3. Arrow Function

// const sayi = () => {
//     console.log("Bu bir Arrow Function")
// }
// sayi()

//?
// let yas = +prompt("Yaşınızı giriniz")

// const ages = () => new Date().getFullYear() - yas

// console.log(ages())

//?

// const fibonacci = (n) => {
//     let f1 = 1
//     let f2 = 1
//     let sum = 0
//     for (let i = 2; i<n; i++){
//         sum = f1+f2
//         f1 = f2
//         f2 = sum
//     }
//     return sum
// }

// console.log(fibonacci(6))

// fibonacci1 = [1,1,2,3,5,8,13,21,34,55,89,144,233,377,610]

//todo

//! 1. Function Declaration
// function printHello() {
//   console.log("Hello World");
// }

//! 2. Function Expression
// const div = function (n1, n2) {
//   return n1 / n2;
// };

//! 3. Arrow Function
// const sayi = () => {
//     console.log("Bu bir Arrow Function")
// }

//* Parametre ve Argümanlar

// const add = function (n1, n2) {
//   return n1 + n2;
// };

// console.log(add(5, 10));

//* Opsiyonel Parametreler

// function selamVer(isim ="Ali"){
//     return `Merhaba ${isim}`
// }

// console.log(selamVer())

//* Rest Parametreler

// function topla(...sayilar) {
//     return sayilar
// }

// console.log(topla(1,2,3,4,6,7,"12","asd",true,[1,2,3],{name:"Ali"}))

//* Scope Kavramı

//? Global Scope

// let globalDegisken = "Ben Globalim"

// function ornek(){
//     let localDegisken = "Ben Lokalim"
//     console.log(globalDegisken)
//     console.log(localDegisken)
// }

// console.log(localDegisken)

// ornek()

//? Local Scope

// function ornek(){
//     let local = " Ben Lokalim"
//     console.log(local)
// }

// ornek()

//? Scope Chain

// let a = 1 //Global

// function up(){
//     let b = 2 //up Local
//     console.log(a)
//     console.log(b)
//     function down(){
//         let c = 3 //down local
//         console.log(a)
//         console.log(b)
//         console.log(c)
//     }
//     down()
// }
// up()

//? Closures

// function out(){
//     let outScope = "Ben dış değişkenim"
//     function inFunc(){
//         console.log(outScope)
//     }
//     return inFunc
// }
// let newFunc = out()
// newFunc()
