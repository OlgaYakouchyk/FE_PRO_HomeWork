// Задача 1: Создание списка Создайте функцию,
// которая принимает массив строк и добавляет каждую строку в виде элемента списка (
//     •  ) в определенный
//     элемент в вашем HTML-документе.

// const arrayString = [
//   "Создайте",
//   "функцию ",
//   "которая",
//   "принимает",
//   "массив",
//   "строк",
// ];

// function getArray(arr) {
//   const newUl = document.createElement("ul");

//   arr.forEach(function (item) {
//     const newLi = document.createElement("li");
//     newLi.textContent = item;
//     newUl.append(newLi);
//   });
//   const list = document.getElementById("list");
//   list.append(newUl);
// }

// getArray(arrayString)

// Задача 2: Изменение стилей элементов
// Создайте функцию,
// которая будет изменять цвет текста всех элементов списка
// на случайный цвет при каждом вызове.
// o	Пункт 1
// o	Пункт 2
// o	Пункт 3

const arraRandomColor = ["Пункт 1", "Пункт 2", "Пункт 3"];

function getRandomnColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}

function rundomColor(array) {
  const newUlList = document.createElement("ul");

  array.forEach(function (item) {
    const newLiList = document.createElement("li");
    newLiList.textContent = item;
    newLiList.style.backgroundColor = getRandomnColor();
    newUlList.append(newLiList);
  });

  const list = document.getElementById("list");
  list.append(newUlList);
}

rundomColor(arraRandomColor);

// Задача 3: Таймер обратного отсчета Создайте функцию,
// которая будет запускать таймер обратного отсчета,
// показывая сколько времени осталось до определенной даты.

function countdown(endDate) {
  const upToDate = document.querySelector("#update");

  function updateCountdown() {
    const currentDate = new Date();
    const diferentTime = endDate - currentDate;

    if (diferentTime <= 0) {
      upToDate.innerHTML = "You time ended";
    } else {
      const day = Math.floor(diferentTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diferentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (diferentTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((diferentTime % (1000 * 60)) / 1000);

      upToDate.innerHTML = `осталось ${day} дней ${hours} часов ${minutes} минут ${seconds} секунд`;
    }
  }
  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();
}

const endTime = new Date('2023-12-31T23:59:59');
countdown(endTime)
