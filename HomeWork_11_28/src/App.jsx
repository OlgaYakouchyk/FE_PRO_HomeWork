import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import CustomButton from './Components/CustomButton'

function App() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <>
    <div>
      <CustomButton
      text="Open Form"
      size="S"
      onHandleClick={() => setIsOpened(!isOpened)}/>
    </div>
      {isOpened && <Form onClose={()=>setIsOpened(!isOpened)}/>}
    </>
  )
}

export default App
