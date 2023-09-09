// const arrayString = ["hello", "my", "freand", "how", "are", "doing", "today"];

//1. Создать массив из строк и используя метод forEach вывести
// строки поочередно

// arrayString.forEach(function(item){
//     console.log(item);
// })

// 2. Создать массив из строк и используя метод forEach
// вывести строки поочередно с их номером (начиная с единицы).
// Пример выводимой строки “(1) Велосипед”

// arrayString.forEach(function(item, index){
//     console.log(`(${index}) ${item}`);
// })

// 3. Создать массив из строк и используя метод forEach вывести только те строки,
//  у которых индекс четный.

// arrayString.forEach(function (item, index) {
//   if (index % 2 === 0) {
//     console.log(item);
//   }
// });


// 4. Используя метод map пройтись по массиву 
// из чисел и преобразовать все отрицательные числа в положительные.

const arrNumbers = [3, -6, 8, -2, -5, -1, 9, 56, -76, 89, -34, 23, -25];


// const newArrNumbr = arrNumbers.map(function (numbers) {
//   return Math.abs(numbers);
// });
// console.log(newArrNumbr);

// 5. Используя метод filter сформировать массив из только положительных чисел

const newArrayFilter = arrNumbers.filter(function(numbers){
    return numbers > 0;
});

console.log(newArrayFilter);

// 6. Используя метод filter сформировать массив из только четных чисел

const newArrayFilter2 = arrNumbers.filter(function(numbers){
    return numbers < 0;
});

console.log(newArrayFilter2);