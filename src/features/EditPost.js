import { useState } from "react"
import TextField from "../components/TextField"
import Button from "../components/Button"
import TextArea from "../components/TextArea"
import { editPost } from "./posts/postSlice"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const EditPost = () => {
  const navigate = useNavigate();
  const posts = useSelector(store => store.posts);
  const params = useParams();
  const dispatch = useDispatch();

  const currentPost = posts.filter(post => post.id === params.id)
  const {title, body} = currentPost[0]
  const [values, setValues] = useState({
    title,
    body
  })
  const handleEdit = (e) => {
    setValues({title: '', body:''})
    dispatch(editPost({
      id: params.id,
      title: values.title,
      body: values.body,
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
            inputProps={{type:'text', placeholder:'Write title of your post here', height:'150px'}}
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
        <Button onClick={handleEdit}>
          Edit your post
        </Button>
    </div>
  )
}

export default EditPost