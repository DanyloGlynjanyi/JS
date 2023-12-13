// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const newUsers = [
        new User(11, 'Ivan', 'Petrenko', 'ivan@gmail.com', '+380971234567'),
        new User(12, 'Maria', 'Kovalchuk', 'maria@gmail.com', '+380972345678'),
        new User(44, 'Oleksiy', 'Sydorenko', 'oleksiy@gmail.com', '+380973456789'),
        new User(22, 'Tetiana', 'Melnyk', 'tetiana@gmail.com', '+380974567890'),
        new User(15, 'Yurii', 'Bilenkyi', 'yurii@gmail.com', '+380975678901'),
        new User(19, 'Viktoria', 'Shevchenko', 'viktoria@gmail.com', '+380976789012'),
        new User(17, 'Pavlo', 'Kravchenko', 'pavlo@gmail.com', '+380977890123'),
        new User(123, 'Nataliia', 'Lysenko', 'nataliia@gmail.com', '+380978901234'),
        new User(177, 'Serhii', 'Koval', 'serhii@gmail.com', '+380979012345'),
        new User(201, 'Iryna', 'Ivanenko', 'iryna@gmail.com', '+380970123456')
    ]
;

console.log(newUsers);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


const filteredUsed1 = newUsers.filter((user) => !(user.id % 5))

console.log(filteredUsed1)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const sortedUsers = newUsers.sort((a, b) => a.id - b.id)
console.log(sortedUsers)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
function Client(id, name, surname, email, phone, order) {
    User.call(this, id, name, surname, email, phone)
    this.order = order;
}


const newClients = [
    new Client(11, 'Ivan', 'Petrenko', 'ivan@gmail.com', '+380971234567', ['apple', 'bread', 'milk', 'malone', 'bear']),
    new Client(12, 'Maria', 'Kovalchuk', 'maria@gmail.com', '+380972345678', ['apple', 'bread', 'milk']),
    new Client(13, 'Oleksiy', 'Sydorenko', 'oleksiy@gmail.com', '+380973456789', ['apple', 'bread']),
    new Client(14, 'Tetiana', 'Melnyk', 'tetiana@gmail.com', '+380974567890', ['apple', 'bread', 'milk', 'malone', 'bear']),
    new Client(15, 'Yurii', 'Bilenkyi', 'yurii@gmail.com', '+380975678901', ['apple', 'bread']),
    new Client(16, 'Viktoria', 'Shevchenko', 'viktoria@gmail.com', '+380976789012', ['milk', 'malone', 'bear']),
    new Client(17, 'Pavlo', 'Kravchenko', 'pavlo@gmail.com', '+380977890123', ['apple']),
    new Client(18, 'Nataliia', 'Lysenko', 'nataliia@gmail.com', '+380978901234', ['apple', 'bread', 'milk', 'malone']),
    new Client(19, 'Serhii', 'Koval', 'serhii@gmail.com', '+380979012345', ['apple', 'bread', 'milk', 'malone', 'bear']),
    new Client(20, 'Iryna', 'Ivanenko', 'iryna@gmail.com', '+380970123456', ['bear']),
];

console.log(newClients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedClient = newClients.sort((a, b) => a.order.length - b.order.length)
console.log(sortedClient)


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car1(model, producer, year, maxSpeed, volume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.driver = null;

    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function () {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log('****** INFO ******');
        for (const key in this) {
            if (typeof this[key] === 'function') {
                continue;
            }
            console.log(`${key.toUpperCase()}: `, this[key]);
        }
        console.log('****** INFO ******');
    }


    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }

    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (addedDriver) {
        this.driver = addedDriver;
    }
}

const car1 = new Car1('Land Cruiser', 'Toyota', 2022, 230, 4.6);

car1.drive();
car1.info();
car1.increaseMaxSpeed(30);
car1.changeYear(2024);


function Driver(name, year) {
    this.name = name;
    this.year = year;
}

const driver = new Driver('Danylo', 2001);
car1.addDriver(driver);
car1.info();
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Car2 {
    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = null;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

    info() {
        console.log('****** INFO ******');
        for (const key in this) {
            console.log(`${key.toUpperCase()}: `, this[key]);
        }
        console.log('****** INFO ******');
    }

    increaseMaxSpeed(addedSpeed) {
        this.maxSpeed += addedSpeed;
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver(addedDriver) {
        this.driver = addedDriver;
    }
}

const car2 = new Car2('R7', 'Audi', 2022, 430, 3.0);

car2.drive();
car2.info()
car2.increaseMaxSpeed(100);
car2.changeYear(2024);


class Driver2 {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const driver2 = new Driver2('Danylo', 2001);
car2.addDriver(driver2);
car2.info();
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Popelushka extends Human {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize;
    }
}
class Prince extends Human {
    constructor(name, age, bootSize) {
        super(name, age);
        this.bootSize = bootSize;
    }
    findedPrincess1(arr) {
        for (const popelushka of arr) {
            if (popelushka.footSize === this.bootSize) {
                return popelushka;
            }
        }
    }
    findedPrincess2(arr) {
        return arr.find((popelushka) => popelushka.footSize === this.bootSize)
    }
}

const popelArr = [
    new Popelushka('Natalia', 30, 37),
    new Popelushka('Olga', 35, 39),
    new Popelushka('Maria', 28, 37),
    new Popelushka('Viktoria', 33, 38),
    new Popelushka('Yulia', 25, 40),
    new Popelushka('Svetlana', 40, 36),
    new Popelushka('Elena', 32, 38),
    new Popelushka('Igor', 28, 42),
    new Popelushka('Alexandra', 22, 35),
    new Popelushka('Dmitry', 29, 41)
];
const prince = new Prince('Mommy', 30, 40);
console.log(prince.findedPrincess1(popelArr));
console.log('** ****** ***** ')
console.log(prince.findedPrincess2(popelArr));