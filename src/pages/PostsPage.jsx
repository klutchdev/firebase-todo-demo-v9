import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Bulletin from "../components/Bulletin";
import CreatePostForm from "../components/CreatePostForm";
import { firestore } from "../firebase";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(firestore, "posts"), (snap) => {
      const tempPosts = [];

      snap.forEach((doc) => {
        tempPosts.push(doc.data());
      });
      setPosts(tempPosts);
    });
    return () => unsubscribe;
  }, []);
  return (
    <>
      <Link to="/profile">View profile</Link>
      <CreatePostForm />
      <br />
      <h5>{posts.length} posts</h5>
      <br />
      {posts &&
        posts.map((bulletin) => {
          const { postedBy, createdAt, content, imageUrl, postId, replies } = bulletin;
          return (
            <Bulletin
              key={bulletin.id}
              postedBy={postedBy}
              content={content}
              imageUrl={imageUrl}
              postId={postId}
              replies={replies}
              createdAt={createdAt}
            />
          );
        })}
    </>
  );
};

export default PostsPage;
