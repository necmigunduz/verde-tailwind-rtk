import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './initialState';


export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      addPost: (state,action) => {
        state.push(action.payload)
      },
      editPost: (state,action) => {
        const {id, title, body} = action.payload;
        const currentPost = state.find(post => post.id === id)
        if(currentPost) {
          currentPost.title = title;
          currentPost.body = body;
        }
      },
      deletePost: (state,action) => {
        const { id } = action.payload;
        const currentPost = state.find(post=> post.id === id);
        if(currentPost){
          return state.filter(post => post.id !== id)
        }
      }
    }
})

export const { addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;