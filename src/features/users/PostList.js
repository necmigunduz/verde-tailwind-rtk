import Button from "../../components/Button";
import { Posts } from "../../components/posts";
import RenderCard from "../../components/renderCard";
const PostList = () => { 
  const cards = RenderCard(Posts)
  
  return (
    <>
      <div>
        <Button>Add new post</Button>
      </div>
      <div className="grid md:grid-cols-3">
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
