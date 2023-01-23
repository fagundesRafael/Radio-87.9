import styles from "./Img_UP.module.css";

import { storage } from "../../firebase/config";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'

import { useState } from "react";

const Img_UP = () => {
  const [imgURL, setImgURL] = useState("");
  const [progress, setProgress] = useState(0);

  const handleUpLoad = (e) => {
    e.preventDefault();

    const file = e.target[0]?.files[0];
    if (!file) return;

    const storageRef = ref(storage, `images/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progress)
      },
      error => {
        alert(error)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(url => {
          setImgURL(url)
        })
      }
    )
  };

  return (
    <div className={styles.IMG_UPPPER_Container}>
      <form onSubmit={handleUpLoad}>
        <input type="file" />
        <button type="submit">Salvar</button>
      </form>
      <br />
      {!imgURL && <progress value={progress} max='100' />}
      {imgURL && <img src={imgURL}/>}
    </div>
  );
};

export default Img_UP;
