"use strict";

let numberFilms;

function start() {
    numberFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberFilms == '' || numberFilms == null || isNaN(numberFilms)) {
        numberFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    }
}
start();

const personalMovieDB = {
    count: numberFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних фильмов', ''),
            b = prompt('На сколько его цените', '');
        if (a != '' && a != null && b != '' && b != '' && a.length < 50) {

            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классик');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
// detectPersonLevel();

function showDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showDB(personalMovieDB.privat);

function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();