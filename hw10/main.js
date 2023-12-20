// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
const form = document.forms.creator;
form.onsubmit = function (e) {
    e.preventDefault();

    const wrapper = document.createElement('div');
    const name = document.createElement('div');
    const surname = document.createElement('div');
    const age = document.createElement('div');

    name.innerText = this.name.value;
    surname.innerText = this.surname.value;
    age.innerText = this.age.value;

    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';

    wrapper.append(name, surname, age);
    document.body.appendChild(wrapper);
}
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================
const count = localStorage.getItem('count') || 0;
const block = document.getElementById('count');
const newCount = (+count + 1).toString();

block.innerText = newCount;
localStorage.setItem('count', newCount)
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
const h1 = document.createElement('h1');
const btn = document.createElement('button');

h1.innerText = 'JS факає людей';
btn.innerText = 'click';

document.body.append(h1, btn);
let flag = true;
btn.addEventListener('click', (e) => {
    if (flag) {
        h1.style.display = 'none';
    } else {
        h1.style.display = 'block';
    }
    flag = !flag;
})
//

//


// <!--.-->
// <!--┈┈┈╱▔▔╲-->
// <!--┈┈╱┈┈┈┈╲▂-->
// <!--╱▔┈┈┈┈┈▕╮╲-->
// <!--▏┈▃▅▅▇▅╱▕╳▏-->
// <!--╲╱╱▔╲╯╯▔╲-->
// <!--╱┈╱▔╲┈┈╱╲▏-->
// <!--▏▕▏┈▕▏▕▏▕-->
// <!--╲▂▏▉▕▏▕▉▕╱▔╲-->
// <!--▕╭╲▉▕╱▔▔▔╱▔╱-->
// <!--┈╲╲▂▂▂▂▂╱▔▔-->
// <!--┈┈▏▏╲▏▕-->
// <!--┈┈╲╲▂▂╱-->
// <!--┈┈┈▔-->