"use strict";
const numberFilms = prompt('Сколько фильмов Вы посмотрели сегодня?');
const personalMovieDB = {
        count: numberFilms,
        movies: {},
        actors: {},
        genres: [],
        privat:false
};

const   a = prompt('Один из последних фильмов', ''),
        b = prompt('На сколько его цените', ''),
        c = prompt('Один из последних фильмов', ''),
        d = prompt('На сколько его цените', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);