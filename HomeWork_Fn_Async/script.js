// 1. Создайте функцию, которая делает Fetch-запрос к JSON Placeholder API
//  для получения списка пользователей и выводит их в консоль.

async function getFethUser() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  try {
    const respont = await fetch(url);
    if (!respont.ok) {
      throw new Error("The fetch request was not successful");
    }
    const dataUser = await respont.json();
    console.log(dataUser);
  } catch (error) {
    console.error(error.message, "Error");
  }
}

getFethUser();

// 2. Модифицируйте предыдущую функцию так, чтобы она возвращала Promise
// с данными о пользователях, а затем вызовите этот Promise и выведите результат в консоль.

function getFethUser2() {
  const url = `https://jsonplaceholder.typicode.com/users`;
  return new Promise(async (resolve, reject) => {
    try {
      const respont = await fetch(url);
      if (!respont.ok) {
        throw new Error("The fetch request was not successful");
      }
      const dataUser = await respont.json();
      resolve(dataUser);
    } catch (error) {
      reject(error);
    }
  });
}

getFethUser2()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message, "Error");
  });

// 3. Создайте функцию, которая делает Fetch-запрос к JSON Placeholder API для
// получения списка постов конкретного пользователя (по его ID) и выводит их в консоль.

async function getFethPost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  try {
    const respont = await fetch(url);
    if (!respont.ok) {
      throw new Error("The fetch request was not successful");
    }
    const dataUser = await respont.json();
    console.log(dataUser);
  } catch (error) {
    console.error(error.message, "Error");
  }
}

getFethPost(1);

// 4. Модифицируйте предыдущую функцию так, чтобы она принимала параметр (ID пользователя)
//  и возвращала Promise с данными о постах этого пользователя.

function getFethPostModificate(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  return new Promise(async (resolve, reject) => {
    try {
      const respont = await fetch(url);
      if (!respont.ok) {
        throw new Error("The fetch request was not successful");
      }
      const dataPost = await respont.json();
      resolve(dataPost);
    } catch (error) {
      reject(error, "Error");
    }
  });
}

getFethPostModificate(7)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error.message, "Error");
  });

// 5. Создайте функцию, которая делает Fetch-запрос
// для создания нового поста на JSON Placeholder API и выводит созданный пост в консоль.

const newData = {
  userId: 1,
  id: 101,
  title: "JSONPlaceholder",
  body: "JSONPlaceholder comes with a set of 6 common resources:",
};

function newPost(newData) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
newPost(newData);


// 6. Модифицируйте предыдущую функцию так, чтобы она принимала 
// параметры (заголовок, текст) для создания поста и возвращала Promise с созданным постом.

function newPost2(title, body) {
return new Promise(async(resolve, reject) => {
    const url = `https://jsonplaceholder.typicode.com/posts?title = ${title}&body = ${body}`
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({title, body}),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }) 

        if(!response.ok){
            throw new Error ("The fetch request was not successful")
        }
        const dataPost = await response.json()
        resolve(dataPost)
    } catch (error) {
        reject(error.message, "Error")
    }
    
})

  }
  newPost2('Routes', 'All HTTP methods are supported. You can use http or https for your requests.')
  .then((data) =>{
    console.log(data)
  })
  .catch(error=>{
    console.log(error);
  })


//   7. Создайте функцию, которая делает Fetch-запрос для обновления 
//   существующего поста на JSON Placeholder API и выводит обновленный пост в консоль.