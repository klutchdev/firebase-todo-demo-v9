/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useContext } from "react";
import TextInput from "../TextInput";
import { firestore } from "../../firebase";
import { arrayUnion, collection, doc, setDoc } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthContext";
import LoadingButton from "../LoadingButton";

const AddReplyForm = ({ postId }) => {
  const { user } = useContext(AuthContext);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const postsRef = doc(firestore, "posts", postId);
  const replyRef = collection(firestore, postsRef + "replies");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await setDoc(
      replyRef,
      {
        replies: arrayUnion({
          postedBy: user.displayName,
          content: content,
          createdAt: Date.now(),
        }),
      },
      { merge: true }
    )
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  };

  return (
    <div className="create-post-wrapper">
      <h3>Add a reply</h3>
      <form onSubmit={handleSubmit} className="create-post-form">
        <h5>Enter reply</h5>
        <TextInput value={content} handleChange={(e) => setContent(e.target.value)} />

        <LoadingButton
          type="submit"
          label="Create post"
          width="auto"
          loading={loading}
          disabled={!content ? true : false}
        />
      </form>
    </div>
  );
};

export default AddReplyForm;
