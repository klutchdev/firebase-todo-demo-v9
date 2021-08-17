/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useContext } from "react";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { AuthContext } from "../contexts/AuthContext";
import { storage } from "../firebase";

const useFirebaseStorage = (file, folder, subFolder) => {
  const { user } = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [url, setURL] = useState("");

  const uploadFile = async () => {
    const extension = file.type.split("/")[1];
    const storageRef = ref(
      storage,
      `${folder}/${user.uid}/${subFolder}/${Date.now()}.${extension}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snap) => {
        let pct = Math.floor((snap.bytesTransferred / snap.totalBytes) * 100);
        setProgress(pct);
      },
      (error) => {
        setError(error);
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => setURL(downloadURL));
      }
    );
  };

  useEffect(() => {
    uploadFile(file);
    return () => uploadFile();
  }, [file]);

  return { progress, error, url };
};

export default useFirebaseStorage;
