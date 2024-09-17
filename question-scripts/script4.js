//Переменные
let button_1 = document.querySelector('.yes')
let button_2 = document.querySelector('.no')


//Функции

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

//анимации и обработка событий

button_1.addEventListener('click', function () {
    setCookie('question4', 1, 1)
    window.location.href = 'first.html'
})

button_2.addEventListener('click', function () {
    setCookie('question4', 2, 1)
    window.location.href = 'first.html'
})

console.log(getCookie('question4'))