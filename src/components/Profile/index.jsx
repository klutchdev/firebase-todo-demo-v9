/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import BasicButton from "../BasicButton";
import { firestore, logOut } from "../../firebase";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import useFirebaseStorage from "../../hooks/useFirebaseStorage";
import Flex from "../Flex";
import Backdrop from "../Backdrop";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const hiddenFileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState("");
  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];

  const handleClick = () => hiddenFileInput.current.click();
  const handleChange = (e) => {
    const picked = Array.from(e.target.files)[0];
    if (picked) {
      setFile(picked);
    } else {
      setFile(null);
    }
  };

  const styles = {
    image: {
      width: "150px",
      height: "150px",
      margin: "0 auto",
      borderRadius: "50%",
      boxShadow: "1px 1px 12px #030303aa",
    },
    wrapper: {
      margin: "0.75rem auto",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(firestore, "users", user.uid), (doc) => {
      if (doc.exists()) {
        const { imageUrl } = doc.data();
        setImgUrl(imageUrl);
      } else {
        setImgUrl("https://picsum.photos/325");
      }
    });
    return () => unsubscribe;
  }, []);

  return (
    <div className="flex align-center justify-center column">
      <div style={styles.wrapper}>
        <img style={styles.image} src={user.photoURL} alt="" />
      </div>
      <h5>{user.displayName}</h5>
      <h3>{user.email}</h3>
      <BasicButton type="button" label="Sign out" onClick={logOut} />
      <br />
      <div onClick={handleClick} style={{ width: "75vw", height: "50vh" }}>
        <img src={imgUrl} alt="" />
        <input
          type="file"
          name="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          accept={types.join(",")}
          style={{ display: "none" }}
        />
      </div>
      {file && <ProgressLoader file={file} setFile={setFile} />}
    </div>
  );
};

const ProgressLoader = ({ file, setFile }) => {
  const { user } = useContext(AuthContext);
  const uid = user.uid;
  const folder = "images";
  const subFolder = "uploads";
  const imageRef = doc(firestore, "users", uid);
  const { progress, url } = useFirebaseStorage(file, folder, subFolder);

  useEffect(() => {
    if (url) {
      setFile(null);
      setDoc(imageRef, { imageUrl: url }, { merge: true }).catch((err) => alert(err));
    }
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

export default Profile;
