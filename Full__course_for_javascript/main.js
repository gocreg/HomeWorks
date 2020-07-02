"use strict";
const numberFilms = prompt('Сколько фильмов Вы посмотрели сегодня?', '');
const personalMovieDB = {
    count: numberFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних фильмов', ''),
          b = prompt('На сколько его цените', '');
    if(a != '' && a != null && b != '' && b != '' && a.length < 50){

        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovieDB);