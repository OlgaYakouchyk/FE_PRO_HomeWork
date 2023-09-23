//1. Создать два промиса. Первый должен вызвать resolve через 2 секунды,
// а второй через 5. Для задержки используйте setTimeout.

function promiseSetTimeout(time, massage) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`succssec , ${massage}`);
    }, time);
  });
}

const promise1 = promiseSetTimeout(2000, "resolve через 2 секунды");
const promise2 = promiseSetTimeout(5000, "resolve через 5 секунд");

promise1
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

promise2
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// 2.Выведите сообщение “оба процесса отработали”, когда оба процесса отработали.

Promise.all([promise1, promise2])
  .then(function (result) {
    console.log(result, "оба процесса отработали");
  })
  .catch(function (error) {
    console.log(error);
  });

// 3. Выведите сообщение “один процесс отработал”,
// когда один процесс отработал.

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result, "“один процесс отработал”");
  })
  .catch((error) => {
    console.log(error);
  });

//4. Задача на обработку ошибок с использованием Promise:
// Создайте функцию, которая принимает число и возвращает Promise. Promise должен быть разрешен, если число положительное,
//  и отклонен, если число отрицательное.

function promiseRundomNumber() {
  return new Promise(function (resolve, reject) {
    const randomNumb = Math.floor(Math.random() * 41) - 20;
    if (randomNumb > 0) {
      resolve(`succsess, your number is ${randomNumb}`);
    } else {
      reject(`delay, your namber is ${randomNumb}  and it is under ziro`);
    }
  });
}
promiseRundomNumber()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// 5. Задача о случайной задержке (Random Delay):
// Создайте функцию, которая возвращает промис,
// который будет разрешен через случайное количество миллисекунд
// (например, от 1 до 5 секунд). Используйте Math.random()
// для генерации случайного времени задержки.

function promiseRandomDelay(randomDelay) {
  randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(`"succsess", your random time is ${randomDelay}`);
    },randomDelay)
  });
}
promiseRandomDelay()
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.log(error);
})

// 6. Задача о последовательном выполнении (Sequential Execution): 
// Напишите функцию, которая выполняет набор асинхронных операций последовательно, 
// используя промисы. Например, выполнение функции sequentialExecution([func1, func2, func3]) 
// должно вызывать func1, затем, когда он завершится, func2, и так далее.

function sequentialExecution(time,massage){
    return new Promise((resolve, reject) =>{
        setTimeout(()=> {
            resolve(massage)
        },time)
    })
}

const func1 = sequentialExecution(6000, 'func1 is done')
const func2 = sequentialExecution(7000, 'func2 is done')
const func3 = sequentialExecution(8000, 'func3 is done')

func1
.then((result) =>{
    console.log(result);
    return func2
})
.then((result) => {
    console.log(result);
    return func3
})
.then((result) =>{
    console.log(result);
})
.catch((error) =>{
    console.log(`${error} promise denay`);
})