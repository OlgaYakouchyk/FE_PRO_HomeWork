import { useState } from "react";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

function Modal({ onClose,  posts, setPosts }) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
    

  function createNewPost() {
    const newPost = {
      title: value,
      description: description,
      author: author,
    };
    setPosts([...posts, newPost])
    setValue("");
    setDescription("");
    setAuthor("");
    getData();
    onClose();
  }

  function getData() {
    console.log({ title: value, description: description, author: author });
  }

  return (
    <div className="modal_main">
      <div className="modal_conteiner">
        <h2>Title</h2>
        <CustomInput
          value={value}
          size="M"
          placeHolder="enter your title"
          onHandleChange={(event) => setValue(event.target.value)}
        />

        <p>Descrption</p>
        <CustomInput
          value={description}
          size="M"
          placeHolder="enter your description"
          onHandleChange={(event) => setDescription(event.target.value)}
        />

        <p>Author</p>
        <CustomInput
          value={author}
          size="M"
          placeHolder="author"
          onHandleChange={(event) => setAuthor(event.target.value)}
        />

        <CustomButton text="create" size="XL" onHandleClick={createNewPost} />
      </div>
    </div>
  );
}
export default Modal;
