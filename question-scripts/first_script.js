let picture1 = document.querySelector('.imge1')
let picture2 = document.querySelector('.imge2')

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

function changeImage(picture, src) {
    picture.src = src
}

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
            changeImage(picture1, sofa_picture)
        }
    }
}