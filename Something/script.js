async function getPost(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Post is NOT found");
      }
      const dataPost = await response.json();
      console.log('Title: ', dataPost.title);
      return dataPost.title;
    } catch (error) {
      console.error(error.message, "Fetch is not successful");
      throw error;
    }
  }
  async function getAuthor(id) {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Author is NOT found");
      }
      const dataAuthor = await response.json();
      console.log("Author:", dataAuthor.name);
      return dataAuthor.name;
    } catch (error) {
      console.error(error.message, "'Fetch is not successful'");
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
      console.log("Comment:", dataComments.body);
      return dataComments.body;
    } catch (error) {
      console.error(error.message, "'Fetch is not successful'");
      throw error;
    }
  }
  
  async function printPostAndComments(id) {
    try {
      const post = await getPost(id);
      const author = await getAuthor(id)
      const comments = await getComent(id);
      
  
      if (!post && !comments) {
        throw new Error("Both fetch widded!!!");
      }
    } catch (error) {
      console.error(error.message, "ERROR");
    }
  }
  
  printPostAndComments(3)
  