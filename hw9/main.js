//
// - створити блок,
const block = document.createElement('div')
//     - додати йому класи wrap, collapse, alpha, beta
block.classList.add('wrap', 'collapse', 'alpha', 'beta')
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
block.style.backgroundColor = 'red';
block.style.color = 'black';
block.style.fontSize = '25px';
block.innerText = 'hey !!'
// - додати цей блок в body.
document.body.appendChild(block);
// - клонувати його повністю, та додати клон в body.
const clone = block.cloneNode(true);
clone.style.backgroundColor = 'yellow'
document.body.appendChild(clone);
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
const liArr = ['Main', 'Products', 'About us', 'Contacts'];
const ul = document.createElement('ul');
for (const text of liArr) {
    const li = document.createElement('li');
    li.innerText = text;
    ul.appendChild(li);
}
document.body.appendChild(ul);
// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    const block = document.createElement('div');
    block.innerText = `${item.title} - ${item.monthDuration}`;
    document.body.appendChild(block);
}

// =========================
//
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
const wrapper = document.createElement('div');

for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const p = document.createElement('p');

    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    h1.innerText = item.title;
    p.innerText = item.monthDuration;

    div.append(h1, p);
    wrapper.appendChild(div);
}

// ==========================
//
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
const simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Марджорі Джеклін \'Мардж\' Сімпсон (дівоче прізвище Був\'є) (анг. Marjorie Jacqueline «Marge» Simpson) - постійний персонаж анімаційного серіалу "Сімпсони", її озвучує Джулія Кавнер. Зазвичай вона носить зелену сукню, червоні балетки, на шиї - намисто зі штучного перламутру і їздить на помаранчевому універсалі. У неї шикарні сині волосся, які вона зазвичай зачісує в дуже високу зачіску. Очі кольору горіха (19s6e). Основне заняття - господиня, велику частину часу проводить, дбаючи про дім, дітей і Гомера. Образ Мардж копіює стереотип провінційної американської господині 50-х років. Мардж - єдиний член сім\'ї, який добровільно відвідує церкву. Старається підтримувати моральність не лише своєї сім\'ї, а й всього міста. Вона чудово готує, особливо славлять її свинячі котлети і зефір. Улюблене блюдо - локшина з маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ліза Марі Сімпсон(анг. Lisa Marie Simpson)  - героїня мультсеріалу "Сімпсони". Середнє дитя в сім\'ї, восьмилітня дівчинка, вирізняється серед інших Сімпсонів перш за все своїм розумом і обдуманістю.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Маргарет Евелін "Меггі" Сімпсон (анг. Margaret Evelyn “Maggie” Simpson)- персонаж мультсеріалу "Сімпсони". Вперше з\'явилася на телебаченні у шоу Трейсі Ульман у короткометражці "Доброї ночі" (англ.) 19 квітня 1987 року. Меггі була задумана і розроблена карикатуристом Меттом Ґрейнінґом, коли він чекав на зустріч із Джеймсом Л. Бруксом. Отримала ім\'я на честь молодшої сестри Ґрейнінґа. Після виступу в шоу Трейсі Ульман через три роки родина Сімпсонів отримала свій власний серіал на телеканалі Fox, а дебют відбувся 17 грудня 1989 року.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];

for (const item of simpsons) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    const i = document.createElement('i');

    div.classList.add('member');

    h1.innerText = item.name;
    i.innerText = item.age;
    p.innerText = item.info;

    img.setAttribute('src', item.photo);
    img.setAttribute('alt', item.name);

    div.append(h1, img, i, p);
    document.body.appendChild(div);
}
// =========================
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
let coursesArrays = [
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
for (const item of coursesArrays) {
    const block = document.createElement('div');
    const title = document.createElement('h1');
    const duration = document.createElement('div');
    const month = document.createElement('div');
    const hour = document.createElement('div');
    const ul = document.createElement('ul');

    title.innerText = item.title;
    month.innerText = item.monthDuration;
    hour.innerText = item.hourDuration;

    for (const module of item.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        ul.appendChild(li);
    }

    block.classList.add('main');
    duration.classList.add('flex');
    month.classList.add('growM');
    hour.classList.add('growH');

    duration.append(month, hour);
    block.append(title, duration, ul);
    document.body.appendChild(block);
}

