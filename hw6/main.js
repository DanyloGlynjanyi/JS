// - Знайти та вивести довижину настипних стрінгових значень
const str1 = 'hello world'
const str2 = 'lorem ipsum'
const str3 = 'javascript is cool'
console.log(str1.length)
console.log(str2.length)
console.log(str3.length)
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
const arr1 = ['hello world', 'lorem ipsum', 'javascript is cool']
const toUpperedArr1 = arr1.map((str) => str.toUpperCase())
console.log(toUpperedArr1)
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const toLowercase = toUpperedArr1.map((str) => str.toLowerCase())
console.log(toLowercase)

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   '
const cleanedStr = str4.trim()
console.log(cleanedStr)
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str5 = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(' ')
console.log(stringToarray(str5))
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const arrOfNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
const arrToStr = arrOfNum.map((str) => str.toString())
console.log(arrToStr)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const sortNums = (nums, direction) => {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    } else {
        console.error("Invalid direction. Please use 'ascending' or 'descending'.");
        return nums;
    }
};

let nums = [11, 21, 3];
console.log(sortNums(nums, 'ascending')); 
console.log(sortNums(nums, 'descending')); 

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
// -- відсортувати його за спаданням за monthDuration
const sortedArr = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(sortedArr)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
const filteredArr = coursesAndDurationArray.filter(value => value.monthDuration > 5)
console.log(filteredArr)
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
const mapArr = coursesAndDurationArray.map((value, index) => {
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration,
    }
});
console.log(mapArr);
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
const cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'сlubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
]

// - знайти піковий туз

const findedAce = cards.find((card) => card.value === 'ace' && card.cardSuit === 'spade')

console.log(findedAce)

// - всі шістки

const filteredSix = cards.filter((card) => card.value === '6')

console.log(filteredSix)

// - всі червоні карти

const filteredRedCard = cards.filter((card) => card.color === 'red')

console.log(filteredRedCard)

// - всі буби

const filteredAllDiamond = cards.filter((card) => card.cardSuit === 'diamond')

console.log(filteredAllDiamond)
// - всі трефи від 9 та більше

const filteredclubs = cards.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'ace', 'jack', 'queen', 'king'].includes(card.value));

console.log(filteredclubs);
//=========================
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
const cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king', 'joker'];

const cards1 = [];
for (const cardSuit of cardSuits) {
    for (const value of values) {
        const color = (cardSuit === 'spade' || cardSuit === 'clubs') ? 'black' : 'red';
        cards1.push({ cardSuit, value, color });
    }
}

console.log(cards1);



//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт



const cards2 = cards.reduce((acc, cur) => {
    acc[cur.cardSuit].push(cur);
    return acc;
}, { spade: [], clubs: [], heart: [], diamond: [] });
console.log(cards2)



// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
const filteredSass=coursesArray.filter((modSas)=>modSas.modules.includes('sass') )
console.log(filteredSass)

// --написати пошук всіх об'єктів, в який в modules є docker
const filteredDock=coursesArray.filter((modDo)=>modDo.modules.includes('sass') )
console.log(filteredDock)
