// 1. Создайте массив чисел и используйте sort,
// чтобы отсортировать его по возрастанию.

const arrNum = [3, 9, 6, 1, 5, 4, 32, 13, 45, 7, 98, 45, 8];
arrNum.sort(function (a, b) {
  return a - b;
});
console.log(arrNum);

// 2. Создайте массив строк и используйте sort,
// чтобы отсортировать его в алфавитном порядке.

const arrString = [
  "one",
  "tree",
  "avocado",
  "bannana",
  "kivi",
  "zukiny",
  "watermelon",
];
arrString.sort();
console.log(arrString);

// 3. Создайте массив объектов с полями name и age. Используйте sort,
// чтобы отсортировать массив по возрасту (по возрастанию).

const arrObjSort = [
  {
    firstName: "Ivan",
    age: 20,
  },
  {
    firstName: "Max",
    age: 34,
  },
  {
    firstName: "Robert",
    age: 31,
  },
  {
    firstName: "Olga",
    age: 25,
  },
  {
    firstName: "Andrei",
    age: 38,
  },
];

arrObjSort.sort(function (a, b) {
  return a.age - b.age;
});
console.log(arrObjSort);

// 4. Создайте массив объектов с полями name и score. Используйте sort,
// чтобы отсортировать массив по баллам (по убыванию).

const arrObjSort2 = [
  {
    firstName: "Ivan",
    score: 56,
  },
  {
    firstName: "Max",
    score: 34,
  },
  {
    firstName: "Robert",
    score: 40,
  },
  {
    firstName: "Olga",
    score: 28,
  },
  {
    firstName: "Andrei",
    score: 38,
  },
];

arrObjSort2.sort(function (a, b) {
  return b.score - a.score;
});
console.log(arrObjSort2);

// 5. Создайте массив строк, содержащих числа, и используйте sort, чтобы отсортировать
// его как числа (а не как строки) в порядке возрастания.

const arrStrNumb = ["3", "5", "11", "4", "13", "8"];
function compereNumb(a, b) {
  return a - b;
}
console.log(arrStrNumb.sort(compereNumb));

//  reduce (5 заданий):
// 6. Создайте массив чисел и используйте reduce,
// чтобы найти сумму всех элементов массива.

const newArrReduce = arrNum.reduce(function (total, currentValue) {
  return (total += currentValue);
});
console.log(newArrReduce);

// 7. Создайте массив чисел и используйте reduce,
// чтобы найти произведение всех элементов массива.

const arrTotal = arrNum.reduce(function (total, currentValue) {
  return total * currentValue;
});
console.log(arrTotal);

//   8. Создайте массив строк и используйте reduce,
//   чтобы объединить все строки в одну большую строку.
const newString = arrString.reduce(function (string, currentValue) {
  return (string += currentValue);
});
console.log(newString);

// 9. Создайте массив объектов с числовыми полями и используйте reduce,
// чтобы найти среднее значение всех чисел в массиве.

const totalScore = arrObjSort2.reduce(function (total, currentValue) {
  return (total += currentValue.score);
}, 0);

const avergeScore = totalScore / arrObjSort2.length;
console.log(avergeScore);

//  10. Создайте массив объектов с числовыми полями и используйте reduce,
//  чтобы найти максимальное значение среди всех чисел в массиве.

const maxScore = arrObjSort2.reduce(function (max, currentValue) {
  if (currentValue > max) {
    return currentValue;
  } else {
    return max;
  }
});
console.log(maxScore);
