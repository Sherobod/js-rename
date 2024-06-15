/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



// 1
const promoAdvTitle = document.querySelector('.promo__adv-title')
const promoAdvImg = document.querySelectorAll('img')
promoAdvTitle.remove()

promoAdvImg.forEach(img => {
    img.remove()
})

// 2
const promoGenre = document.querySelector('.promo__genre')
promoGenre.innerHTML = 'ДРАМА'


// 3
const promoBgElement = document.querySelector('.promo__bg')
promoBgElement.style.backgroundImage = 'url("./img/bg.jpg")'

// 4
let lis = document.querySelectorAll('.promo__interactive-item')


let {movies} = movieDB
movies = movies.toSorted()

lis.forEach((li, idx) => {
    li.innerHTML = `${idx+1}. ${movies[idx]} <div class="delete"></div>`
})