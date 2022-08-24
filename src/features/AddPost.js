import { useState } from "react"
import TextField from "../components/TextField"
import Button from "../components/Button"
import TextArea from "../components/TextArea"
import { useNavigate } from "react-router-dom"

const AddPost = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    post: ''
  })
  const handleClick = (e) => {
    setValues({title: '', post:''})
    console.log(values)
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
            value={values.post}
            onChange = {(e) => setValues({
              ...values,
              post: e.target.value
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