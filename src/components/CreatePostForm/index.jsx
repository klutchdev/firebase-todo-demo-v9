/* eslint-disable react-hooks/exhaustive-deps */
import TextInput from "../TextInput";
import { useEffect, useRef, useState, useContext } from "react";
import { firestore } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import useFirebaseStorage from "../../hooks/useFirebaseStorage";
import { AuthContext } from "../../contexts/AuthContext";
import LoadingButton from "../LoadingButton";
import Backdrop from "../Backdrop";
import Flex from "../Flex/index";
import { useHistory } from "react-router-dom";

const CreatePostForm = () => {
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [tempFile, setTempFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

  const handleClick = () => hiddenFileInput.current.click();

  const handleChange = (e) => {
    let reader = new FileReader();
    let picked = e.target.files[0];

    if (picked && types.includes(picked.type)) {
      reader.onloadend = () => {
        setTempFile(picked);
        setPreview(reader.result);
      };
      reader.readAsDataURL(picked);
    } else {
      setTempFile(null);
      alert("Please select a jpg/jpeg or png file!");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFile(tempFile);
  };

  return (
    <div className="create-post-wrapper">
      <h3>Create a new post</h3>
      <form onSubmit={handleSubmit} className="create-post-form">
        <h5>Enter content</h5>
        <TextInput value={content} handleChange={(e) => setContent(e.target.value)} />
        <h5>Add a post image</h5>
        {preview ? (
          <div style={{ width: "75vw", height: "100%" }}>
            <img
              onClick={handleClick}
              style={{ margin: "auto", width: "75vw", maxWidth: "75vw", height: "auto" }}
              src={preview}
              alt=""
            />
            <input
              type="file"
              name="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              accept={types.join(",")}
              style={{ display: "none" }}
            />
          </div>
        ) : (
          <input
            type="file"
            name="file"
            onChange={handleChange}
            accept={types.join(",")}
            className="create-post-image-upload"
          />
        )}
        <LoadingButton
          type="submit"
          label="Create post"
          loading={loading}
          disabled={!content ? true : false}
        />
        {file && (
          <ProgressLoader file={file} setFile={setFile} content={content} setLoading={setLoading} />
        )}
      </form>
    </div>
  );
};

const ProgressLoader = ({ file, setFile, content, setLoading }) => {
  const { user } = useContext(AuthContext);
  const { displayName } = user;
  const history = useHistory();
  const folder = "posts";
  const subFolder = "images";
  const timestamp = serverTimestamp();
  const postId = Date.now().toString();
  const postsRef = doc(firestore, "posts", postId);
  const { progress, url } = useFirebaseStorage(file, folder, subFolder);

  useEffect(() => {
    setLoading(true);
    if (url) {
      setFile(null);
      setDoc(postsRef, {
        postId: postId,
        postedBy: displayName,
        content: content,
        imageUrl: url,
        replies: 0,
        createdAt: timestamp,
      })
        .catch((err) => {
          alert(err);
          setLoading(false);
          return;
        })
        .finally(() => {
          history.push("/");
        });
    }
    return setLoading(false);
  }, [url, setFile]);

  return <Uploading progress={progress} />;
};

const Uploading = ({ progress }) => (
  <Backdrop>
    <Flex>
      <h3 className="m-auto text-green">Uploading {progress}%</h3>
    </Flex>
  </Backdrop>
);

export default CreatePostForm;
