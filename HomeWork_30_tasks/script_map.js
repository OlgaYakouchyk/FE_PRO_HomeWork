// 15. Создайте массив строк и используйте map, чтобы создать новый массив, в котором все элементы будут содержать
//  дополнительный текст, например, " - новый элемент".

// const arrStr = ["hello ", "filter ", "map ", "new ", "element "];

// const newArrElement = arrStr.map(function (item) {
//   return item + "new element";
// });

// console.log(newArrElement);

//16.  Создайте массив чисел и используйте filter, чтобы создать новый массив,
// содержащий только четные числа.

// const arrNumbr3 = [2, 9, 5, 56, 8, 9, 67, 1, 12, 18, 34];
// const newArr3 = arrNumbr3.filter(function (number) {
//   return number % 2 === 0;
// });
// console.log(newArr3);

// 17. Создайте массив строк и используйте filter, чтобы создать новый массив,
// содержащий только строки длиной более 5 символов.

// const arrStr2 = [
//   "hello ",
//   "filter ",
//   "map ",
//   "new ",
//   "element ",
//   "firs_tname",
//   "last_name",
// ];

// const newArrStr2 = arrStr2.filter(function (item) {
//   return item.length > 5;
// // });
// console.log(newArrStr2);

//18. Создайте массив объектов с полями name и age. Используйте filter, чтобы создать новый массив,
// содержащий только объекты с возрастом больше 25 лет.

// const arrObjFilter = [
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
//     age: 25,
//   },
//   {
//     firstName: "Andrei",
//     age: 38,
//   },
// ];

// const newObjFilter = arrObjFilter.filter(function (arr) {
//   return arr.age > 25;
// });

// console.log(newObjFilter);

// 19. Создайте массив чисел и используйте filter, чтобы создать новый массив,
//  содержащий только положительные числа.

// const arrNumbr = [2, -9, -5, 56, 8, 9, -67, 1, -1, -8, 34];
// const newArr = arrNumbr.filter(function (number) {
//   return number > 0;
// });
// console.log(newArr);

//20. Создайте массив строк и используйте filter, чтобы создать новый массив,
// содержащий только строки, начинающиеся с буквы 'A'.

// const arrStrA = [
//   "hello ",
//   "apple ",
//   "and ",
//   "new ",
//   "alphabet ",
//   "firs_tname",
//   "apartments",
// ];
 
// const newArrA = arrStrA.filter(function (item) {
//   return item.charAt(0).toLocaleLowerCase() === "a";
// });
// console.log(newArrA);
