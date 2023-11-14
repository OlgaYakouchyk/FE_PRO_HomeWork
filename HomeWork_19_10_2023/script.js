// 1. Написать процесс, который выводит строки с данными о пользователях.

// class User {
//   static printData(firstName, lastName, age) {
//     return `New user is ${firstName}  ${lastName}, ${age} years old`;
//   }
// }

// const user1 = User.printData("Oleg", "Riabikov", 30);
// const user2 = User.printData("Tom", "Wolsky", 40);
// console.log(user1);
// console.log(user2);

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
    } else {
      throw new Error("This price mist be more than zero");
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
    console.log(
      `You sale ${this.title} in quantity: ${quantity} and your total is ${
        this._price * quantity
      }`
    );
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

// item1.sale(2)
// item2.sale(2)
// item3.sale(5)
// item2.sale(2)

// try {
//   item1.sale(3);
// } catch (error) {
//   console.error(error.message, "No more items for sale")
// }

// try {
//   item2.sale(2)
// } catch (error) {
//   console.error(error.message, "No more items for sale")
// }

// try {
//   item3.sale(5)
// } catch (error) {
//   console.error(error.message, "No more items for sale")
// }

// try {
//   item2.sale(2)
// } catch (error) {
//   console.error(error.message, "No more items for sale")
// }

// console.log(`You total is ${Product.income}`); //вывод общего дохода
// console.log(Product.items); //вывод всех продуктов

// console.log(item1.price);// call method get price

// item3.price = 200//устанавливаем новый прайс
// console.log(item3.price);//call method setter

// try {
//   item3.sale(1)
// } catch (error) {
//   onsole.error(error.message, "No more items for sale")
// }


// TASK 2!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//______________________________________________________
function saveToLocalStorage(product) {
  localStorage.setItem("products", JSON.stringify(product));
}

function getFromLocaStorage() {
  const newProduct = localStorage.getItem("products");
  if (newProduct) {
    return JSON.parse(newProduct);
  } else {
    return [];
  }
}
let products = getFromLocaStorage();

function addProducts(title, price, count) {
  if (price > 0 && count > 0) {
    const productItem = {
      title,
      price,
      count,
      id: Date.now(), //генерируем уникальный ID
    };
    products.push(productItem);
    saveToLocalStorage(products);
    rerender();
  } else {
    alert("The price and quantity must be more than 0!!!!");
  }
}

function rerender(filteredProducts = products) {
  const productList = document.querySelector("#productList");
  productList.innerHTML = "";

  filteredProducts.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.title} - price: $${product.price}, quantity: ${product.count}, ID: ${product.id}`;
    
    // Создаем кнопку удаления
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.className = "buttonDelete";
    deleteButton.dataset.productId = product.id; // Установка идентификатора товара как data-атрибута кнопки

    // Добавляем кнопку удаления к элементу списка
    listItem.appendChild(deleteButton);
    productList.appendChild(listItem);
  });

  attachDeleteEventHandlers();
  displayTotalCost();
}

function attachDeleteEventHandlers() {
  const deleteButtons = document.querySelectorAll(".buttonDelete");
  deleteButtons.forEach((button) => {
    button.removeEventListener("click", deleteProductHandler); // Удаляем предыдущие обработчики, если они есть
    button.addEventListener("click", deleteProductHandler); // Добавляем новый обработчик
  });
}
function deleteProductHandler(event) {
  const productId = event.target.dataset.productId;
  products = products.filter((product) => product.id.toString() !== productId);
  saveToLocalStorage(products);
  rerender();
}

function filterProducts(searchText) {
  const filterResalt = products.filter(function (product) {
    return product.title.toLowerCase().startsWith(searchText.toLowerCase());
  });
  rerender(filterResalt);
}
const productForm = document.querySelector("#productForm");
productForm.addEventListener("submit", function (event) {
  event.preventDefault(); // предотвращает обновление страницы при отправке формы
  const productName = document.getElementById("productName").value;
  const productPrice = parseFloat(document.getElementById("productPrice").value);
  const productCount = parseFloat(document.getElementById("productCount").value);

  if (productName && productPrice && productCount > 0) {
    addProducts(productName,productPrice,productCount);
    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productCount").value = "";
  } else {
    alert("введите название и цену товара");
  }
});

function displayTotalCost() {
  const totalCost = products
    .map((product) => product.price * product.count) // Создаем массив цен с учетом количества
    .reduce((acc, price) => acc + price, 0); // Вычисляем сумму

  const totalCostElement = document.querySelector("#totalCost");
  totalCostElement.textContent = `Общая стоимость: $${totalCost}`;
}

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", function () {
  filterProducts(searchInput.value);
});
document.addEventListener('DOMContentLoaded', ()=>{
  rerender();
})

