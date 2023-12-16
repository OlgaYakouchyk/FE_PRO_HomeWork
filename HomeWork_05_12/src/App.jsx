import { useState } from 'react'
import './App.css'
import CustomButton from './Components/CustomButton'
import Modal from './Components/Modal'
import { dataPost } from './Components/postData'
import PostItem from './Components/PostsItems'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [posts, setPosts] = useState(dataPost)
  
  function addNewPosts(newPost) {
    setPosts([...posts, newPost])

  }

  return (
    <>
    <CustomButton
    text="CREATE POST"
    size="L"
    onHandleClick={() => setIsOpened(!isOpened)}/>
    {isOpened && <Modal onClose={() => setIsOpened(!isOpened)} posts={posts} setPosts={setPosts}/>}

    <div className='posts_box'>
      {posts.map((item, index) =>(
        <PostItem key={index}
        title={item.title}
        description={item.description}
        author={item.author}/>
      ))}

    </div>


    </>
  )
}

export default App
