// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const square = (a, b) => a * b

console.log(square(2, 10))
console.log(square(6, 12))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const radius = (r) => Math.PI * r * r

console.log(radius(6))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const cylinder_area = (h, r) => 2 * Math.PI * r * (r + h)

console.log(cylinder_area(1, 5))
console.log(cylinder_area(1, 10))

// - створити функцію яка приймає масив та виводить кожен його елемент
const arrayLogger = (myArray) => {
    for (const item of myArray) {
        console.log('Item: ', item);
    }
}
arrayLogger([true, 'dasd', 'assdasdd', 5555]);
arrayLogger([true, false]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const creatorP = (text) => {
    document.write(`<p>${text}</p>`)
}

creatorP('hello')
creatorP('mentor')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const ulCreator = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

ulCreator('Довільний текст ')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const ulcreator2 = (text, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

ulcreator2('довільний текст ', 3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const ulCreator3 = (arr) => {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

ulCreator3([true, 15888, false, 'dasd', 'dasdwwq']);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'serhiy', age: 77},
    {id: 2, name: 'alex', age: 35},
    {id: 3, name: 'kolya', age: 27},
    {id: 4, name: 'max', age: 789},
];

const user = (arr) => {
    for (const user of arr) {
        document.write(`
            <div>
            <hr/>
                <p>id: ${user.id}</p>
                <p>name: ${user.name}</p>
                <p>age: ${user.age}</p>
                <hr/>
            </div>
        `);
    }
}

user(users);
// - створити функцію яка повертає найменьше число з масиву
const minNumber = (arrOfNums) => {
    let min = arrOfNums[0];
    for (let i = 1; i < arrOfNums.length; i++) {
        if (arrOfNums[i] < min) {
            min = arrOfNums[i];
        }
    }
    return min;
}

console.log('minNumber:', minNumber([32, -1, 2, 31, -32, 555, 1212, 345]))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arrOfNums) => {
    let result = 0;
    for (let i = 0; i < arrOfNums.length; i++) {
        result += arrOfNums[i];
    }
    return result;
}

console.log('sum : ', sum([1, 2, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=>
const swap = (arr, index1, index2) => {
    const numIndex1 = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = numIndex1;

    return arr;
}

console.log(swap([11, 22, 33, 44], 0, 1));
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sum, currencies, resultCurrency) => {
    for (let cur of currencies) {
        if (cur.currency === resultCurrency) {
            return `${sum / cur.value} ${resultCurrency}`;
        }
    }
    return 'Wrong currency!!!';
}

const currencies = [
    {currency: 'USD', value: 40}
];
const result = exchange(10000, currencies, 'USD'); // Замінено 'DD' на 'USD'
console.log('result : ', result);
