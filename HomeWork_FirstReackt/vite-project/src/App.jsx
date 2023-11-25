import React from "react";
import "./App.css";
import CostomButton from "./components/Button";


function App() {
  const onHandleClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <div>
        <CostomButton color="purpul" 
        onClick={onHandleClick}
        size='large'
        text='Click me!!!' 
        />
        <CostomButton color="blue" 
        onClick={onHandleClick}
        size='small'
        text='Click me!!!' 
        />
      </div>
    </>
  );
}

export default App;
