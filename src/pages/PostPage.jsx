/* eslint-disable react-hooks/exhaustive-deps */
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddReplyForm from "../components/AddReplyForm";
import Reply from "../components/Reply";
import { firestore } from "../firebase";

const PostPage = ({ match }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [replies, setReplies] = useState([]);

  const {
    params: { postId },
  } = match;

  const getPostData = async () => {
    const postRef = doc(firestore, "posts", postId);
    const docSnap = await getDoc(postRef);

    if (docSnap.exists()) {
      const { imageUrl, content, postedBy } = docSnap.data();
      setImageUrl(imageUrl);
      setContent(content);
      setPostedBy(postedBy);
      setReplies(docSnap.data()[replies]);
    }
  };

  useEffect(() => {
    getPostData();
    return () => getPostData;
  }, []);

  return (
    <>
      <Link to="/">Go back</Link>
      <br />
      <h5>{replies} replies</h5>
      <div
        style={{
          margin: "1rem auto",
          border: "#666666 2px solid",
          padding: "1rem",
          borderRadius: "4px",
        }}
        className="bulletin"
      >
        <div style={{ display: "flex", width: "100%" }}>
          <h4>
            <b>{postedBy} </b>
          </h4>
          <h5 style={{ marginLeft: "2rem", fontWeight: 300 }}> {postId}</h5>
        </div>
        <div className="bulletin-content">
          <h5 style={{ padding: "1rem 0" }}>{content}</h5>
          <div style={{ width: "100%", height: "100%" }}>
            <img
              style={{ width: "100%", maxWidth: "100%", height: "auto" }}
              src={imageUrl}
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <AddReplyForm postId={postId} />
      <br />
      {replies &&
        replies.map((reply) => {
          return (
            <Reply
              key={reply.id}
              postedBy={reply.postedBy}
              content={reply.content}
              createdAt={reply.createdAt}
            />
          );
        })}
    </>
  );
};

export default PostPage;
