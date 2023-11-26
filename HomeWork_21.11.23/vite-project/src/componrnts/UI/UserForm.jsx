import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

function UserForm(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function submitData() {

        console.log({
            username: username,
            password: password
        })
    }
    
    
  return (
    <div>
      <CustomInput
        value={username}
        onChange={setUsername}
        placeholder="Username"
      />
      <CustomInput
        value={password}
        onChange={setPassword}
        placeholder="Password"
        type="password" 
      />
      <CustomButton
        text="Submit"
        buttonSize="large" 
        onHandleClick={submitData}
      />
    </div>
  );

   
}
export default UserForm