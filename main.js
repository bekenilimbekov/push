// 1. Добавление только чётных чисел в новый массив:
// Дан массив с числами. Используя forEach() и if, добавь в новый массив только чётные числа.
// Исходный массив:

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = [];

// numbers.forEach(number => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });


//  2. Добавление только строк длиннее 5 символов:
// Дан массив строк. Используя forEach() и условие if, добавь в новый массив только строки длиной более 5 символов.
// Исходный массив:

// let strings = ["apple", "banana", "cherry", "date"];
// let longStrings = [];

// strings.forEach(string => {
//   if (string.length > 5) {
//     longStrings.push(string);
//   }
// });

// console.log(longStrings); 




//  3. Копирование элементов, которые начинаются с гласной:
// Дан массив строк. Используя forEach() и if, добавь в новый массив только те строки, которые начинаются с гласной.
// Исходный массив:

// let words = ["apple", "pear", "orange", "grape", "apricot"];



//  4. Фильтрация массива по положительным и отрицательным числам:
// Дан массив чисел. Раздели массив на два: положительные числа в одном массиве и отрицательные в другом, используя forEach() и if/else.
// Исходный массив:

// let numbers = [-5, 3, -2, 8, 0, -1, 7];
// let positiveNumbers = [];
// let negativeNumbers = [];

// numbers.forEach(number => {
//   if (number > 0) {
//     positiveNumbers.push(number);
//   } else if (number < 0) {
//     negativeNumbers.push(number);
//   }
// });

// console.log(positiveNumbers); 
// console.log(negativeNumbers); 


//  5. Добавление уникальных значений:
// Дан массив с повторяющимися числами. Используя forEach() и if, добавь в новый массив только уникальные значения.
// Исходный массив:

// let numbers = [1, 2, 3, 2, 4, 1, 5];
// let uniqueNumbers = [];

// numbers.forEach(number => {
//   if (!uniqueNumbers.includes(number)) {
//     uniqueNumbers.push(number);
//   }
// });

// console.log(uniqueNumbers); 


//  6. Создание массива строк, которые не содержат цифры:
// Дан массив строк. Используя forEach() и if, добавь в новый массив только те строки, которые не содержат цифры.
// Исходный массив:

// let strings = ["hello", "world1", "test", "abc123", "example"];


//  7. Добавление объектов с определённым свойством:
// Дан массив объектов. Используя forEach() и if, добавь в новый массив только те объекты, которые содержат определённое свойство.
// Исходный массив:

// let users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie" },
//   { name: "Dave", age: 22 }
// ];
// let users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie" },
//     { name: "Dave", age: 22 }
//   ];
//   let usersWithAge = [];
  
//   users.forEach(user => {
//     if ("age" in user) {
//       usersWithAge.push(user);
//     }
//   });
  
//   console.log(usersWithAge);
  


//  8. Фильтрация по рейтингу:
// Дан массив объектов с фильмами, у каждого есть поле “рейтинг”. Используя forEach() и if, добавь в новый массив только фильмы с рейтингом выше 7.
// Исходный массив:

// let movies = [
//   { title: "Movie 1", rating: 6.5 },
//   { title: "Movie 2", rating: 8.3 },
//   { title: "Movie 3", rating: 7.2 },
//   { title: "Movie 4", rating: 5.8 }
// ];
// let movies = [
//     { title: "Movie 1", rating: 6.5 },
//     { title: "Movie 2", rating: 8.3 },
//     { title: "Movie 3", rating: 7.2 },
//     { title: "Movie 4", rating: 5.8 }
//   ];
//   let highRatedMovies = [];
  
//   movies.forEach(movie => {
//     if (movie.rating > 7) {
//       highRatedMovies.push(movie);
//     }
//   });
  
//   console.log(highRatedMovies);
  
  


//  9. Добавление слов с нечетным количеством букв:
// Дан массив слов. Используя forEach() и if, добавь в новый массив только те слова, у которых нечетное количество букв.
// Исходный массив:


// let words = ["one", "two", "three", "four", "five"];
// let oddLengthWords = [];

// words.forEach(word => {
//   if (word.length % 2 !== 0) {
//     oddLengthWords.push(word);
//   }
// });

// console.log(oddLengthWords); 


//  10. Добавление чисел в два массива по условию:
// Дан массив чисел. Используя forEach() и if/else, раздели их на два массива: числа меньше 10 в один, а числа больше или равны 10 — в другой.
// Исходный массив:

// let numbers = [4, 12, 7, 19, 3, 10];
// let lessThanTen = [];
// let tenOrMore = [];

// numbers.forEach(number => {
//   if (number < 10) {
//     lessThanTen.push(number);
//   } else {
//     tenOrMore.push(number);
//   }
// });

// console.log(lessThanTen); 
// console.log(tenOrMore);   