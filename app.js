const stages = [
    {
        number: '1',
        text: 'Строительство железнодорожной магистрали Москва-Васюки',
        class: 'div1'
    },
    {
        number: '2',
        text: 'Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов',
        class: 'div2'
    },
    {
        number: '3',
        text: 'Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет',
        class: 'div3'
    },
    {
        number: '4',
        text: 'Строительство дворца для турнира',
        class: 'div4'
    },
    {
        number: '5',
        text: 'Размещение гаражей для гостевого   автотранспорта',
        class: 'div5'
    },
    {
        number: '6',
        text: 'Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов',
        class: 'div6'
    },
    {
        number: '7',
        text: 'Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн',
        class: 'div7'
    }
]

document.querySelector('.stage__items').innerHTML = `<div class="st__item"></div>`
for(const stage of stages) {
    let item = document.createElement('div')
    item.classList.add(stage.class)
    item.innerHTML = `<div class="item"><div class="st__number"><span>${stage.number}</span></div><div class="st__text">${stage.text}</div></div>`
    document.querySelector('.st__item').appendChild(item)
  }

const persons = [
    {
        name: 'Хозе-Рауль Капабланка',
    },
    {
        name: 'Эммануил Ласкер',
    },
    {
        name: 'Александр Алехин',
    },
    {
        name: 'Арон Нимцович',
    },
    {
        name: 'Рихард Рети',
    },
    {
        name: 'Остап Бендер',
    }, 
]
document.querySelector('.person__slider').innerHTML = `<div class="slider"></div>`
for(const person of persons) {
    let user = document.createElement('div')
    user.classList.add('person__card')
    user.innerHTML = `<img src="/img/person.png" alt="chessuser"><h3 class="person__name">${person.name}</h3><h4 class="rank">Чемпион мира по шахматам</h4><a href="#">Подробнее</a>`
    document.querySelector('.slider').appendChild(user)
  }

let offset = 0;
const slideWidth = 390;
const maxWidth = 1400;
let timer;
autoSlider ();
const sliderLine = document.querySelector('.slider');

document.querySelector('.next__btn').addEventListener('click', sliderRight);
document.querySelector('.prev__btn').addEventListener('click', sliderLeft);

function autoSlider () {
    timer = setTimeout(sliderLeft, 4000);
}

function sliderRight () {
    offset = offset + slideWidth;
    if (offset > maxWidth) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}

function sliderLeft () {
    offset = offset - slideWidth;
    if (offset < -maxWidth) {
        offset = 0;
    }
    sliderLine.style.left = offset + 'px';
    autoSlider();
}

let offsetFly = 0;
const fly_slideWidth = 350;
const fly_maxWidth = 1750;
const flySlider = document.querySelector('.st__item');

document.querySelector('.prev__btn__fly').addEventListener('click', flyLeft);
document.querySelector('.next__btn_fly').addEventListener('click', flyRight);

function flyRight () {
    offsetFly = offsetFly + fly_slideWidth;
    if(offsetFly > fly_maxWidth) {
        offsetFly = 0;
    }
    flySlider.style.right  = offsetFly + 'px';
}
function flyLeft () {
    offsetFly = offsetFly - fly_slideWidth;
    if(offsetFly < 0) {
        offsetFly = 0;
    }
    flySlider.style.right  = offsetFly + 'px';
}