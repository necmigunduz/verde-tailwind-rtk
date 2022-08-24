import { Routes, Route } from 'react-router-dom';
import PostList from './features/posts/PostList';
import AddPost from './features/AddPost';
import EditPost from './features/EditPost';
import './App.css';

function App() {
  return (
    <div className="container mx-auto px-2 pt-5 max-w-5xl">
      <h1 className="text-center text-white font-bold x-1 my-4 border-y-8 bg-zinc-300">
        Posts by User-I
      </h1>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/add-post' element={<AddPost />} />
        <Route path='/edit-post/:id' element={<EditPost />} />
      </Routes>   
    </div>
  );
}

export default App;
