import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
// import { Posts } from "../../components/posts";
import RenderCard from "../../components/renderCard";
const PostList = () => { 
  const Posts = useSelector(store => store.posts)
  const cards = RenderCard(Posts)
  
  return (
    <>
      <div>
        <Link to='/add-post'><Button>Add new post</Button></Link>
      </div>
      <div className="grid md:grid-cols-4">
        {Posts.length ? (
          cards
        ) : (
          <p className="text-center col-span-2 text-gray-900 font-semibold">
            No post found!
          </p>
        )}
      </div>
    </>
  );
};

export default PostList;
