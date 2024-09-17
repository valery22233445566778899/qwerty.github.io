//переменные из документа
let start_button = document.querySelector('start-button')
let ans_button1 = document.querySelector('.answer-1')
let ans_button2 = document.querySelector('.answer-2')
let ans_button3 = document.querySelector('.answer-3')
let doc_picture = document.querySelector('.picture')
let doc_question = document.querySelector('.question')
let question1_cookie = getCookie('question1')
let question2_cookie = getCookie('question2')
let question3_cookie = getCookie('question3')
let question4_cookie = getCookie('question4')

let opinion = []
let sofa = null


//функции
function changeImage(src) {
    picture.src = src
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString(); // Вычисляем дату истечения
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/'; // Устанавливаем куку
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('='); // Разделяем куки на имя и значение
        return parts[0] === name ? decodeURIComponent(parts[1]) : r; // Возвращаем значение, если имя совпадает
    }, '');
}

function deleteCookie(name) {
    setCookie(name, '', -1); // Устанавливаем куку с отрицательным временем жизни
}

// Массив диванов
let sofas = [
    {
        id: 1,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: 'В гостинную',
        price: 350
    },
    {
        id: 2,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Кожа',
        place_for: 'На кухню',
        price: 400
    },
    {
        id: 3,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: 'В спальню',
        price: 350
    },   
    {
        id: 4,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: 'В гостинную',
        price: 350
    },  
    {
        id: 5,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Латекс',
        place_for: 'В гостинную',
        price: 350
    }, 
    {
        id: 6,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: 'В спальню',
        price: 350
    },
    {
        id: 7,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Ткань',
        place_for: 'В спальню',
        price: 300
    }, 
    {
        id: 8,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Кожа',
        place_for: 'В гостинную',
        price: 400
    },   
];


//анимации и обработка событий

//Получаем информацию о диванах

//0. Место
if (question1_cookie == 1) {
    opinion.push('На кухню')
}

if (question1_cookie == 2) {
    opinion.push('В гостинную')
}

if (question1_cookie == 3) {
    opinion.push('В спальню')
}

//1. Размер
if (question2_cookie == 1) {
    opinion.push('Маленький')
}

if (question2_cookie == 2) {
    opinion.push('Средний')
}

if (question2_cookie == 3) {
    opinion.push('Большой')
}

//2. Материал
if (question3_cookie == 1) {
    opinion.push('Кожа')
}

if (question3_cookie == 2) {
    opinion.push('Ткань')
}

if (question3_cookie == 3) {
    opinion.push('Латекс')
}

//3. Форма
if (question2_cookie == 1) {
    opinion.push('Угловой')
}
if (question2_cookie == 2) {
    opinion.push('Нет')
}



// start_button.addEventListener('mouseenter', function() {
//     anime({
//         target: start_button,
//         duration: 500,
//         scale: 1.2
//     })
// })

// start_button.addEventListener('mouseleave', function() {
//     anime({
//         target: start_button,
//         duration: 500,
//         scale: 1
//     })
// })


// Получаем массив place_for для первого дивана
let placeFor = sofas[0].place_for;

// Перебираем и выводим каждый элемент
placeFor.forEach(function(place) {
    console.log(place);
});

if (window.location.href == 'index.html') {
    for (let i = 0; i < sofas.length; i += 1) {
        if (sofas[i]['shape'] == opinion[3] && 
            sofas[i]['size'] == opinion[1] &&
            sofas[i]['material'] == opinion[2] &&
            sofas[i]['place_for'] == opinion[0]) 
            {
            let sofa = sofas[i]
            let sofa_id = sofa['id']
            let sofa_picture = `https://github.com/valery22233445566778899/Quiz/blob/main/res/catalog/${sofa_id}.png?raw=true`
        }
    }

}
//Добавте картинки!!!!!!!
//Добавте картинки!!!!!!!
//Добавте картинки!!!!!!!
//Добавте картинки!!!!!!!
//Добавте картинки!!!!!!!
//Добавте картинки!!!!!!!
//Добавте картинки!!!!!!!

//1.png
//2.png
//3.png
//4.png
//5.png
//6.png
//7.png
