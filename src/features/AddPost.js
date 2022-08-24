import { useState } from "react"
import TextField from "../components/TextField"
import Button from "../components/Button"
import TextArea from "../components/TextArea"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addPost } from "./posts/postSlice"
import { v4 as uuidv4 } from "uuid"

const AddPost = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    body: ''
  })
  const handleClick = (e) => {
    setValues({title: '', body:''})
    dispatch(addPost({
      userId: 1,
      id: uuidv4(),
      title: values.title,
      body: values.body
    }))
    navigate('/')
  } 
  const handleKeyDown = (e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  return (
    <div className="mt-10 max-w-xl mx-auto">
        <TextField 
            label="Title"
            value={values.title}
            onChange = {(e) => setValues({
              ...values,
              title: e.target.value
            })}
            inputProps={{type:'text', placeholder:'Write title of your post here', height:'500px'}}
        /><br />
        <TextArea 
            label="Post"
            value={values.body}
            onChange = {(e) => setValues({
              ...values,
              body: e.target.value
            })}
            onKeyDown={handleKeyDown}
            inputProps={{type:'text', placeholder:'Write body of your post here'}}
        />
        <Button onClick={handleClick}>
          Submit your post
        </Button>
    </div>
  )
}

export default AddPost