// Переменные из документа
let start_button = document.querySelector('.start-button'); // Исправлено: добавлен класс
let ans_button1 = document.querySelector('.answer-1');
let ans_button2 = document.querySelector('.answer-2');
let ans_button3 = document.querySelector('.answer-3');
let doc_picture = document.querySelector('.picture');
let doc_question = document.querySelector('.question');
let question1_cookie = getCookie('question1');
let question2_cookie = getCookie('question2');
let question3_cookie = getCookie('question3');
let question4_cookie = getCookie('question4');
let opinion = [];
let sofa = null;
console.log('hello');

// Функции
function changeImage(src) {
    doc_picture.src = src; // Исправлено: используем doc_picture
}

function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=');
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, '');
}

function deleteCookie(name) {
    setCookie(name, '', -1);
}

// Массив диванов
let sofas = [
    {
        id: 1,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: ['В гостинную', 'В спальню'],
        price: 350
    },
    {
        id: 2,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Кожа',
        place_for: ['В гостинную', 'На кухню'],
        price: 400
    },
    {
        id: 3,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: ['В гостинную', 'В спальню'],
        price: 350
    },
    {
        id: 4,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: ['В гостинную', 'В спальню'],
        price: 350
    },
    {
        id: 5,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Латекс',
        place_for: ['В гостинную'],
        price: 350
    },
    {
        id: 6,
        shape: 'Нет',
        size: 'Средний',
        material: 'Латекс',
        place_for: ['В гостинную', 'В спальню'],
        price: 350
    },
    {
        id: 7,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Ткань',
        place_for: ['В гостинную', 'В спальню'],
        price: 300
    },
    {
        id: 8,
        shape: 'Нет',
        size: 'Маленький',
        material: 'Кожа',
        place_for: ['В гостинную'],
        price: 400
    },
];

// Получаем информацию о диванах
// 0. Место
if (question1_cookie == 1) {
    opinion.push('На кухню');
}
if (question1_cookie == 2) {
    opinion.push('В гостинную');
}
if (question1_cookie == 3) {
    opinion.push('В спальню');
}

// 1. Размер
if (question2_cookie == 1) {
    opinion.push('Маленький');
}
if (question2_cookie == 2) {
    opinion.push('Средний');
}
if (question2_cookie == 3) {
    opinion.push('Большой');
}

// 2. Материал
if (question3_cookie == 1) {
    opinion.push('Кожа');
}
if (question3_cookie == 2) {
    opinion.push('Ткань');
}
if (question3_cookie == 3) {
    opinion.push('Латекс');
}

// 3. Форма
if (question4_cookie == 1) {
    opinion.push('Угловой');
}
if (question4_cookie == 2) {
    opinion.push('Нет');
}

// Обработчики событий
start_button.addEventListener('mouseenter', function() {
    anime({
        targets: start_button,
        duration: 500,
        scale: 1.2
    });
});

start_button.addEventListener('mouseleave', function() {
    anime({
        targets: start_button,
        duration: 500,
        scale: 1
    });
});

// Проверка условий и отображение диванов
const sofaImagesContainer = document.getElementById('sofa-images');
const sofaPricesContainer = document.getElementById('sofa-prices');

for (let i = 0; i < sofas.length; i++) {
    console.log(`Проверяем диван с ID: ${sofas[i].id}`);
    console.log(`Форма: ${sofas[i]['shape']}, Размер: ${sofas[i]['size']}, Материал: ${sofas[i]['material']}, Место: ${sofas[i]['place_for']}`);
    console.log(`Ожидаемые значения: Форма: ${opinion[3]}, Размер: ${opinion[1]}, Материал: ${opinion[2]}, Место: ${opinion[0]}`);

    if (sofas[i]['shape'] === opinion[3] &&
        sofas[i]['size'] === opinion[1] &&
        sofas[i]['material'] === opinion[2] &&
        sofas[i]['place_for'].includes(opinion[0])) {
        
        console.log('Найден подходящий диван:', sofas[i]);
        sofa = sofas[i];
        const imageUrl = `https://github.com/valery22233445566778899/Quiz/blob/main/res/catalog/${sofa.id}.png?raw=true`;
        // Добавляем изображение
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.className = 'kartinka';
        sofaImagesContainer.appendChild(imgElement);

        // Добавляем цену
        const priceElement = document.createElement('p');
        priceElement.textContent = `Цена: ${sofa.price} руб.`;
        sofaPricesContainer.appendChild(priceElement);

        break; // Выходим из цикла, если нашли подходящий диван
    }
}

if (!sofa) {
    console.log('Подходящий диван не найден.');
}
        