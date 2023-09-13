// 1. Создайте массив чисел и используйте forEach
// для вывода каждого элемента в консоль.

// const arrNumbers = [2, 5, -7, 89, 4, 23, 54, -867, 21, -2];

// arrNumbers.forEach(function (item) {
//   console.log(item);
// });

// 2. Создайте массив строк и используйте forEach для создания нового массива,
//  в котором все элементы будут в верхнем регистре.

// const arrString = ['Создайте', 'массив', 'строк', 'и', 'используйте', 'forEach', 'для', 'создания', 'нового', 'массива'];

// arrString.forEach(function(item){
//    console.log(item.toLocaleUpperCase());
// })

//3. Создайте массив объектов с полями name и age. Используйте forEach, чтобы вывести имена всех объектов,
// возраст которых больше 30 лет.

// const arrObj = [
//   {
//     firstName: "Ivan",
//     age: 20,
//   },
//   {
//     firstName: "Max",
//     age: 34,
//   },
//   {
//     firstName: "Robert",
//     age: 31,
//   },
//   {
//     firstName: "Olga",
//     age: 29,
//   },
//   {
//     firstName: "Andrei",
//     age: 38,
//   },
// ];

// arrObj.forEach(function (arr) {
//   if (arr.age > 30) {
//     console.log(arr.firstName);
//   }
// });

// 4. Создайте массив чисел и используйте forEach,
// чтобы найти сумму всех элементов массива.

// const arrNumbers1 = [2, 5, 7, 89, 4, 23, 54, 867, 21, 2];
// let count = 0;

// arrNumbers.forEach(function(item){
//     count +=item;

// })
// console.log(count);

// 5. Создайте массив чисел и используйте forEach,
// чтобы найти максимальное значение в массиве.
// const arrNumbers2 = [2, 5, 7, 89, 4, 23, 54, 867, 21, 2];
// let max = arrNumbers2[0];
// arrNumbers2.forEach(function(item) {
//   if (item > max) {
//     max = item;
//   }
// });
// console.log("Max is: " + max);

// 6. Создайте массив строк и используйте forEach, чтобы создать новый массив,
//  в котором будут только строки, содержащие букву 'a'.

// const arrString = ['Создайте', 'массив', 'строк', 'и', 'используйте', 'forEach', 'для', 'создания', 'нового', 'массива'];

// arrString.forEach(function(item){
//     if(item.includes('а') || item.includes ('a')){
//         console.log(item);
//     }
// })

// 7. Создайте массив чисел и используйте forEach, чтобы создать новый массив,
//  в котором все элементы будут умножены на 2.

// const arrNumbers1 = [2, 5, 7, 89, 4, 23, 54, 867, 21, 2];
// arrNumbers1.forEach(function(item){
//     console.log(item*2);
// })

// 8. Создайте массив объектов с полями name и age. Используйте forEach,
// чтобы создать новый массив, содержащий только имена объектов.

// const arrObj1 = [
//       {
//         firstName: "Ivan",
//         age: 20,
//       },
//       {
//         firstName: "Max",
//         age: 34,
//       },
//       {
//         firstName: "Robert",
//         age: 31,
//       },
//       {
//         firstName: "Olga",
//         age: 29,
//       },
//       {
//         firstName: "Andrei",
//         age: 38,
//       },
//     ];

//     arrObj1.forEach(function(arr){
//         console.log(arr.firstName);

//     })

// 9. Создайте массив строк и используйте forEach, ч
// тобы найти самую длинную строку в массиве.

// const arrString = ['Создайте', 'массив', 'строк', 'и', 'используйте', 'forEach', 'для', 'создания', 'нового', 'массива'];
// let maxLength = arrString.length

// arrString.forEach(function(item){
//     if(item.length>maxLength){
//         maxLength = item
//     }
// })

// console.log(maxLength);

// 10. Создайте массив объектов с полями name и score.
//  Используйте forEach, чтобы найти средний балл всех объектов в массиве.

// const arrObj2 = [
//       {
//         firstName: "Ivan",
//         score: 56,
//       },
//       {
//         firstName: "Max",
//         score: 34,
//       },
//       {
//         firstName: "Robert",
//         score: 40,
//       },
//       {
//         firstName: "Olga",
//         score: 28,
//       },
//       {
//         firstName: "Andrei",
//         score: 38,
//       },
//     ];

//     let sum = 0;

//     arrObj2.forEach(function(arr){
//         sum += arr.score
//     });
//     const newOveregeScore = sum / arrObj2.length
//     console.log(newOveregeScore);

// 11. Создайте массив чисел и используйте map, чтобы создать новый массив,
// в котором все элементы будут возведены в квадрат.

// const arrNumbers1 = [2, 5, 7, 89, 4, 23, 54, 867, 21, 2];

// const newArrNumbers = arrNumbers1.map(function(number){
//     return Math.pow(2, number)
// })

// console.log(newArrNumbers);

// 12. Создайте массив строк и используйте map, чтобы создать новый массив,
// в котором все элементы будут в нижнем регистре.

// const someArr = [
//   "nJNnNNhf",
//   "uiYYGGHJs",
//   "yedgynBHGB",
//   "gdYHhhggFF",
//   "HVvhsGgtf",
// ];

// const newSomeArr = someArr.map(function (item) {
//   return item.toLocaleLowerCase();
// });
// console.log(newSomeArr);

//13. Создайте массив объектов с полями name и age. Используйте map, чтобы создать новый массив,
// содержащий только возраст каждого объекта.

// const arrObj1 = [
//   {
//     firstName: "Ivan",
//     age: 20,
//   },
//   {
//     firstName: "Max",
//     age: 34,
//   },
//   {
//     firstName: "Robert",
//     age: 31,
//   },
//   {
//     firstName: "Olga",
//     age: 29,
//   },
//   {
//     firstName: "Andrei",
//     age: 38,
//   },
// ];

// const newArrObj = arrObj1.map(function (arr) {
//   return arr.age;
// });

// console.log(newArrObj);

// 14. Создайте массив чисел и используйте map, чтобы создать новый массив, в
// котором все элементы будут округлены до ближайшего целого числа.

// const arrNumbers12 = [2.5, 5.3, 7.6, 8.9, 4.9, 2.3, 5.4, 86.7, 2.1, 2.5];

// const newArrNumb = arrNumbers12.map(function (number) {
//   return Math.round(number);
// });
// console.log(newArrNumb);

