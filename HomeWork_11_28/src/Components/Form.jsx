import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

function Form({onClose}) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function createNewForm() {
    const newForm = {
      title: username,
      descriptiom: password,
    };
    setUserName("");
    setPassword("");
    getData();
    onClose();
  }

  function getData() {
    console.log({ username: username, password: password });
  }

  return (
    <div className="block_form">
      <CustomInput
        value={username}
        size="M"
        onHandleChange={(e) => setUserName(e.target.value)}
      />
      <CustomInput
        value={password}
        size="M"
        onHandleChange={(e) => setPassword(e.target.value)}
      />
      <CustomButton 
      text="Create Form" 
      size="L" 
      onHandleClick={createNewForm} />
    </div>
  );
}
export default Form;
