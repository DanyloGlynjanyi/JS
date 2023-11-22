// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arrOfCars = [
    "bmw",
    "mersdes-benz",
    "audi",
    "subaru",
    "porche",
    "Infinity",
    "lexus",
    "opel",
    "shkoda",
    "huindai"
]
console.log(arrOfCars)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let objOfOBookOne = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy"
}
let objOfOBookTwo = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy"
}
let objOfOBookThree = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy"
}
console.log(objOfOBookOne)
console.log(objOfOBookTwo)
console.log(objOfOBookThree)
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let arrOfOBookOne = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy",
    author: [
        {name: 'Ivan', age: 13},
    ]
}
let arrOfOBookTwo = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy",
    author: [
        {name: 'Ivan', age: 13},
    ]

}
let arrOfOBookThree = {
    title: "Harry Potter",
    pageCount: 5555,
    genre: "Fantasy",
    author: [
        {name: 'Ivan', age: 13},
    ]
}
console.log(arrOfOBookOne)
console.log(arrOfOBookTwo)
console.log(arrOfOBookThree)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arrOfUsers = [
    {name: "petya", username: "as4d654654as", password: "asd444asd5"},
    {name: "petya", username: "as5das", password: "asda123sd5"},
    {name: "petya", username: "as4d654654as6543das", password: "asdasd335"},
    {name: "petya", username: "as2das", password: "asd1asd52"},
    {name: "petya", username: "as61das", password: "asd444441asd5"},
    {name: "petya", username: "asd7as", password: "asdasd55555"},
    {name: "petya", username: "as6da2s", password: "asdasd5awsedawq"},
    {name: "petya", username: "asd35as", password: "asdasd5eawde"},
    {name: "petya", username: "a55sdas", password: "asdasd523"},
    {name: "petya", username: "as44das", password: "asdasd5a1"}
]
console.log('Password:', arrOfUsers[0].password)
console.log('Password:', arrOfUsers[1].password)
console.log('Password:', arrOfUsers[2].password)
console.log('Password:', arrOfUsers[3].password)
console.log('Password:', arrOfUsers[4].password)
console.log('Password:', arrOfUsers[5].password)
console.log('Password:', arrOfUsers[6].password)
console.log('Password:', arrOfUsers[7].password)
console.log('Password:', arrOfUsers[8].password)
console.log('Password:', arrOfUsers[9].password)
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
console.log(x)
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 15
if (time > 45 && time <= 59) {
    console.log('time:4/4')
} else if (time > 30 && time <= 45) {
    console.log('time:3/4')
} else if (time > 15 && time <= 30) {
    console.log('time:2/4')
} else if (time > 0 && time <= 15) {
    console.log('time:1/4')
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 11;
if (day > 0 && day <= 10) {
    console.log('1 decade');
} else if (day > 10 && day <= 20) {
    console.log('2 decade');
} else if (day > 20 && day <= 31) {
    console.log('3 decade');
} else {
    console.log('?????');
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let aDay = prompt('Enter day ?')
switch (aDay) {
    case 1 :
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;

    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.error('Invadid aDay');

}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let y = 30
let z = 30
if (y > z) {
    console.log('y: ', y);
} else if (z > y) {
    console.log('z: ', z);
} else if (z === y) {
    console.log('Рівні');
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1="" ;
x1 = x1 || 'default';
console.log(x1)

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
const coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}