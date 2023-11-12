// 1. Написать процесс, который выводит строки с данными о пользователях.

class User {
  static printData(firstName, lastName, age) {
    return `New user is ${firstName}  ${lastName}, ${age} years old`;
  }
}

const user1 = User.printData("Oleg", "Riabikov", 30);
const user2 = User.printData("Tom", "Wolsky", 40);
console.log(user1);
console.log(user2);

// Задание 2. Создать класс Product со свойствами title, price, count.
// Задание 2.1. Создать статическое свойство income, которое изначальное равно нулю.
// Задание 2.2. Создать метод sale. Которое уменьшает count на единицу. Если count уже равен нулю,
// то вызывается исключение. Если продажа прошла,
// то статическое свойство income должно увеличиться на цену товара.
// Задание 2.3. Создать статическое свойство items, которое хранит созданные экземпляры класса Product.
// Задание 2.4. Добавить getter и setter для свойства price. При добавлении идет проверка, что цена больше 0.

class Product {
  constructor(title, price, count) {
    this.title = title;
    this._price = price;
    this.count = count;
  }
  //Getter для  price
  get price() {
      return this._price;
  }
  //setter for price
  set price(newPrice) {
    if (newPrice > 0) {
      this._price = newPrice;
    }else{
      throw new Error ('This price mist be more than zero')
    }
    
  }

  sale(quantity) {
    if (this.count === 0) {
      throw new Error("No more items for sale.");
    }
    if (this.count < quantity) {
      throw new Error("Insufficient quantity available for sale.");
    }
    this.count -= quantity;
    Product.income += this._price * quantity;
  }

  static income = 0;

  static items = [];
  static createProduct(title, price, count) {
    const product = new Product(title, price, count);
    Product.items.push(product);
    return product;
  }

}

const item1 = Product.createProduct("Phone", 540, 5);
const item2 = Product.createProduct("Hair Dryer", 100, 3);
const item3 = Product.createProduct("Monitor", 150, 7);

// try {
//   item1.sale(2);
// } catch (error) {
//   console.error(error.message, "No more items for sale")
// }
item1.sale(3)
// item2.sale(1);
// item3.sale(4);
// item2.sale(1);

// console.log(`You total is ${Product.income}`); //вывод общего дохода
// console.log(Product.items); //вывод всех продуктов

// console.log(item1.price);





