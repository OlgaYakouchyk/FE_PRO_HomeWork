// Задачи для GET запросов:
// 1. Получить список всех пользователей:
// Использовать URL: https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 2. Получить список всех постов:
// URL: https://jsonplaceholder.typicode.com/posts

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// 3. Получить информацию о конкретном пользователе по его ID (например, ID = 1):
// URL: https://jsonplaceholder.typicode.com/users/1

function getId(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
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

getId(5, (userData) => {
  console.log("данные пользвователя с ID: ", userData);
});

// 4. Получить список постов, опубликованных одним конкретным пользователем (например, пользователь с ID = 1):
// URL: https://jsonplaceholder.typicode.com/posts?userId=1

function getPost(userId, callback) {
  fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const userPost = { userId, data };
      callback(userPost);
    })
    .catch((error) => {
      console.log(error);
    });
}

getPost(3, (userPost) => {
  console.log(
    "Список постов опубликлованный user #" + userPost.userId,
    userPost.data
  );
});
