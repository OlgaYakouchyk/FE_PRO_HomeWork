// Задача 1. Используя async await по id комментария
// выведите в консоль текст поста и комментарий.

async function getPost(id) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Post NOT found");
    }
    const dataPost = await response.json();
    console.log(dataPost.title);
    return dataPost.title;
  } catch (error) {
    consol.error(error.message, "Fetch is not successful");
    throw error;
  }
}

async function getComent(id) {
  const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Comments NOT found");
    }
    const dataComments = await response.json();
    console.log(dataComments.body);
    return dataComments.body;
  } catch (error) {
    console.error(error.message, "'Fetch is not successful'");
    throw error;
  }
}

async function printPostAndComments(id) {
  try {
    const post = await getPost(id);
    const comments = await getComent(id);

    if (!post && !comments) {
      throw new Error("Both fetch was not founded!!!");
    }
  } catch (error) {
    console.error(error.message, "ERROR");
  }
}

printPostAndComments(4);

// Задача 2. Доработайте прошлое решение таким образом,
// чтобы помимо текста поста выводилось имя автора.





// Задачам 3. Создать функцию, которая получает id комментария находит id поста.
// По этому идентификатору необходимо вывести все комментарии к этому посту.
// https://jsonplaceholder.typicode.com/comments?postId=<номер поста>.

// async function printAllComments(postId){
//     const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
//     try {
//         const response = await fetch(url)
//         if(!response.ok){
//             throw new Error("Comments NOT found")
//         }
//         const dataComments = await response.json()
//         console.log(dataComments);

//     } catch (error) {
//         console.error(error.message, "Error")
//     }
// }
// printAllComments(3)

//_____________________________________________________________________________
// Задача 4. Доработайте функцию из прошлого задания таким образом,
// чтобы помимо id она получала callback функцию.
// Данная функция должна формировать карточки с текстом комментария.

async function printAllComments2(postId, createCartCommemt) {
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Comments NOT found");
    }
    const dataComments = await response.json();
    console.log(dataComments);
    await createCartCommemt(dataComments);
  } catch (error) {
    console.error(error.message, "Error");
  }
}

function createCartCommemt(dataComments) {
  const conteiner = document.querySelector(".conteiner");
  const commentsBox = document.createElement("ul");
  conteiner.appendChild(commentsBox);
  
  dataComments.forEach(coment=>{
    const commentList = document.createElement('li')
    commentList.textContent = coment.body
    commentsBox.appendChild(commentList)
  })
}

printAllComments2(5, createCartCommemt);


// Задача 5. Добавьте в интерфейс форму, которая позволит получать id поста, 
// чьи комментарии необходимо вывести.

async function printAllComments2(postId) {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Comments NOT found");
      }
      const dataComments = await response.json();
      console.log(dataComments);
      createCartCommemt(dataComments);
    } catch (error) {
      console.error(error.message, "Error");
    }
  }

  function createCartCommemt(dataComments) {
    const conteiner = document.querySelector(".conteiner");
    const commentsBox = document.createElement("ul");
    conteiner.appendChild(commentsBox);
    
    dataComments.forEach(coment=>{
      const commentList = document.createElement('li')
      commentList.textContent = coment.body
      commentsBox.appendChild(commentList)
    })
  }

  const postIdForm = document.querySelector('#postIdForm')
  postIdForm.addEventListener('submit', async function(event){
    const postIdInput = document.querySelector('#postId')
    const postId = postIdInput.value;
    if(postId !== ""){
        printAllComments2(postId)
    }
  })