// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let strOne = 'hello';
console.log(strOne)
let strTwo = 'owu';
console.log(strTwo)
let strTrhee = 'com';
console.log(strTrhee)
let strfour = 'ua';
console.log(strfour)
let numOne = 1;
console.log(numOne)
let numTwo = 10;
console.log(numTwo)
let numThree = -999;
console.log(numThree)
let numFour = 123;
console.log(numFour)
let numPI = 3.14;
console.log(numPI)
let numSix = 2.7;
console.log(numSix)
let numSeven = 16;
console.log(numSeven)
let boolTr = true;
console.log(boolTr)
let boolFl = false;
console.log(boolFl)

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Danyil'
let middleName = 'Borysovych'
let lastName = 'Glynjanyi'

console.log(`${firstName}${middleName}${lastName}`)
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль
//    let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let firstName1 = prompt("Будь ласка, введіть ваше ім'я:");
let lastName1 = prompt("Будь ласка, введіть ваше по-батькові:");
let age = +prompt("Будь ласка, введіть ваш вік:");

console.log("Ім'я:", firstName1);
console.log("По-батькові:", lastName1);
console.log("Вік:", age);
