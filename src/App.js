import PostList from './features/users/PostList';
import './App.css';

function App() {
  return (
    <div className="container mx-auto px-2 pt-5 max-w-5xl">
      <h1 className="text-center text-white font-bold x-1 my-4 border-y-8 bg-zinc-300">
        Posts by User1
      </h1>
      <PostList />
    </div>
  );
}

export default App;
