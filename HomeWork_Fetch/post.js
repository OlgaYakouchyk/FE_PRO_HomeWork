// Задачи для POST запросов:
// 1. Создать нового пользователя:
// URL: https://jsonplaceholder.typicode.com/users
// Метод: POST
// Тело запроса (JSON):
// {
//     "name": "Имя пользователя",
//     "username": "Имя пользователя",
//     "email": "email@example.com"
// }

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify({
    name: "Rodrigo",
    username: "Rody",
    email: "email@example.com",
  }),
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((data) => console.log("ответ от сервера", data));

//  2. Создать новый пост от имени определенного пользователя
// (например, пользователь с ID = 1):

const newData = { name: "Diego", userId: 2, email: "email@newexample.com" };
const newDate2 = { name: "Nina", userId: 3, email: "email@nina.com" };
// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     body: JSON.stringify(newData),
//     headers: { 'Content-type': 'application/json; charset=UTF-8'},
// })
// .then(response =>{
//     return response.json()
// })
// .then(data =>{
//     console.log('ответ от сервера', data);
// })
// .catch(error =>{
//     console.log(error);
// })

function postNewUsers(newData, callback) {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(newData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

postNewUsers(newData, (userData) => {
  console.log("New user is: ", userData);
});

postNewUsers(newDate2, (userData) => {
  console.log("This is a new user date: ", userData);
});

// Задача. 3. Создать форму в интерфейсе, которая принимает title,
//  body и userId и с этими данными отправляет запрос на сервер. Запрос можно взять из прошлого примера.
//  Ответ сервера вывести в консоль.

function postNewPosts(newData, callback) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

const newForm = { title: "UBody", body: "This is a new body", userId: 1 };
postNewPosts(newForm, (userData) => {
  console.log("NEW POSTS: ", userData);
});

// Создать функцию, которая генерирует карточку с постом
// и использовать ее для отображения данных, пришедших с сервера.
// В качестве запроса на сервер используйте результат прошлого задания.

// const arrayPosts = []; 


// function getPostUsers(userId, callback) {
//   fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       const userPost = { userId, data };
//       arrayPosts.push(userPost)
//       callback(userPost);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// function createUserPost(postData) {
//   const postCard = document.querySelector('.postCard')
//   const postTitle = document.createElement("h2");
//   postTitle.textContent = postData.data.title;
//   const postText = document.createElement("p");
//   postText.textContent = postData.data.body;

//   postCard.appendChild(postTitle);
//   postCard.appendChild(postText)

//  return postCard;
// }



// getPostUsers(67, () => {
//   arrayPosts.forEach((postData)=>{
//     const cardPost = createUserPost(postData);
//     postCard.appendChild(cardPost)

//   }) 
 
// });



const arrayPosts = [];

// Функция для создания и добавления контейнера пользователя на страницу
function createUserContainer(userId) {
  const userContainer = document.createElement("div");
  userContainer.classList.add(`userContainer-${userId}`);
  document.body.appendChild(userContainer);
  return userContainer;
}

function getPostUsers(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => response.json())
    .then((data) => {
      arrayPosts.push(...data);
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
function createUserPost(postData, container) {
  const postCard = document.createElement("div");
  postCard.classList.add("postCard");
  const postTitle = document.createElement("h2");
  postTitle.textContent = postData.title;
  const postText = document.createElement("p");
  postText.textContent = postData.body;

  postCard.appendChild(postTitle);
  postCard.appendChild(postText);

  container.appendChild(postCard);
}

// Вызываем функцию createUserContainer для создания контейнеров
const user8Container = createUserContainer(8);
const user4Container = createUserContainer(4);
const user2Container = createUserContainer(2);
getPostUsers(8, (postData) => {
  postData.forEach((post) => {
    createUserPost(post, user8Container);
  });
});

getPostUsers(4, (postData) => {
  postData.forEach((post) => {
    createUserPost(post, user4Container);
  });
});

getPostUsers(2, (postData) => {
    postData.forEach((post) => {
      createUserPost(post, user2Container);
    });
  });

console.log(arrayPosts);




