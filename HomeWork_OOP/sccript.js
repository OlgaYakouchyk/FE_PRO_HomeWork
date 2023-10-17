// 1. Вы должны получить список пользователей с JSONPlaceholder API,
// отфильтровать их по какому-либо критерию, например, по городу,
// затем использовать метод map, чтобы преобразовать отфильтрованный
// список пользователей в новый массив, содержащий только их имена и
// адреса (например, улица и город).
// Затем сохраните этот массив в Local Storage и выведите его на страницу.

async function getUsersList() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("your feth was NOT succsessful");
    }
    const dataUser = await response.json();
    const filterDataUser = dataUser
      .filter((user) => {
        return user.address.city.includes("S");
      })
      .map((user) => {
        return {
          name: user.name,
          address: user.address,
        };
      });

    localStorage.setItem("users", JSON.stringify(filterDataUser));

    const usersStorage = document.querySelector(".usersStorage");
    const dataFromStorage = localStorage.getItem("users");
    if (dataFromStorage) {
      const newDataStorage = JSON.parse(dataFromStorage);
      newDataStorage.forEach((user) => {
        const listUsers = document.createElement("li");
        listUsers.textContent = `Name: ${user.name}, Address: ${user.address.street},${user.address.suite}, ${user.address.city},${user.address.zipcode} `;
        usersStorage.appendChild(listUsers);
      });
    }
  } catch (error) {
    console.error(error.message, "You can NOT get a users list");
  }
}
getUsersList();


// 2. Создайте класс Person, который имеет конструктор и свойства name и age. 
// Конструктор должен принимать имя и возраст, и свойства должны быть
//  установлены соответственно.

class Person{
    constructor(firstName, age){
        this.firstName = firstName,
        this.age = age
    }
}

const person1 = new Person('David', 35)
console.log(person1);
const person2 = new Person('Nick', 22)
console.log(person2);


// Класс "Продукт":
// Создайте класс Product, который имеет конструктор и свойства name, price, и quantity. Конструктор должен принимать имя продукта,
//  его цену и количество на складе.


class Product {
    constructor(nameItem, price, quantity){
        this.nameItem = nameItem,
        this.price = price,
        this.quantity = quantity
    }
}

const productItem1 = new Product('Milk', '22$', 20)
const productItem2 = new Product('Coffee', '10$', 6)
console.log(productItem1, productItem2);

// Класс "Банковский счет":
// Создайте класс BankAccount, представляющий банковский счет.
// Класс должен иметь конструктор, который принимает имя владельца счета и начальный баланс.
// У счета должен быть метод deposit(), который позволяет внести средства, и метод withdraw(), 
// который позволяет снять средства. Также должен быть метод getBalance(),
// который возвращает текущий баланс.

class BankAccount {
    constructor(ownerName, startbalance){
        this.ownerName = ownerName;
        this.startbalance = startbalance;
    }
        deposit(){
            const sumOfDepasit = prompt('Enter your depasit: ')
            if (!isNaN(sumOfDepasit)){
                console.log('Your depasit is: ' + sumOfDepasit);
                return parseFloat(sumOfDepasit)
            }else{
                return 0
            }
        }

        withdraw(){
            const sumWithdraw = prompt('Enter your withdraw amount: ')
            if(!isNaN(sumWithdraw)){
                console.log('You want withdraw: ', + sumWithdraw);
                return parseFloat(sumWithdraw)
            }else{
                return 0
            }
        }
        getBalance(){
            const depositAmoumt = this.deposit();
            const withdrawAmount = this.withdraw();
            const youBalance = this.startbalance + depositAmoumt - withdrawAmount
            console.log('You current balance is: ' + youBalance + '$');
            return youBalance

        }  
    }


const customer1 = new BankAccount('Lily', 9000)
customer1.getBalance();



