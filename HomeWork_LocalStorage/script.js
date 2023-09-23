// Создать форму, которая позволяет добавить пункт товара в массив. Данные из массива должны отображаться в интерфейсе при добавлении нового товара.
// Реализовывать через массив с продуктами и функцией rerender.
//создание функции для добавления в localStorage

function savedToLocalStorage(prodacts) {//функция сохраняет переданный массив в хранилище
    localStorage.setItem("products", JSON.stringify(prodacts));
  }
  
  function getFromLocalSrorage() {// получаем продукт, если ничего нету то возвращаем пустой массив
    const newProducts = localStorage.getItem("products");
    if (newProducts) {
      return JSON.parse(newProducts);
    } else {
      return [];
    }
  }
  
  let prodacts = getFromLocalSrorage();
  function addProduct(name, price, count) {//сщздает новый объект продукта
    const productItem = {
      name: name,
      price: price,
      count: count,
      id: Date.now(), //генерируем уникальный id
    };
  
    prodacts.push(productItem);//добавляет продукт
    savedToLocalStorage(prodacts);//сохраняет обновленный список продуктов в хранилеще
    rerender();// для обновления отображения на странице
  }
  
  function rerender(filteredProducts) {//обновляет отображение продуктов на странице, если передан параметр filteredProducts то отображаются только отфильтрованные прдукты
    const productList = document.querySelector("#productList");
    productList.innerHTML = "";
    const productToDispley = filteredProducts || prodacts;
    productToDispley.forEach(function (product) {
      const listItem = document.createElement("li");
      listItem.textContent = `${product.name} - price: $${product.price}, quantity: ${product.count}, ID: ${product.id}`;
      productList.appendChild(listItem);
    });
  }
  
  function filterProducts(searchText) {//фильтрует продукты по введенному тексту
    const filterResalt = prodacts.filter(function (product) {
      return product.name.toLowerCase().startsWith(searchText.toLowerCase());
    });
    rerender(filterResalt);
  }
  
  const productForm = document.querySelector("#productForm");
  productForm.addEventListener("submit", function (event) {
    event.preventDefault(); // предотвращает обновление страницы при отправке формы
    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;
    const productCount = document.getElementById("productCount").value;
    if (productName && productPrice && productCount > 0) {
      addProduct(productName, parseFloat(productPrice), parseFloat(productCount));
      document.getElementById("productName").value = "";
      document.getElementById("productPrice").value = "";
      document.getElementById("productCount").value = "";
    } else {
      alert("введите название и цену товара");
    }
  });
  
  const searchInput = document.querySelector("#searchInput");
  
  searchInput.addEventListener("input", function () {
    const sesrchText = searchInput.value;
    filterProducts(sesrchText)
  });
  
  rerender();
  