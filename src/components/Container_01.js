import styles from "./Container_01.module.css";

import { useFetchDocuments } from "../hooks/useFetchDocuments";

import imgRef1 from "../resources/banners/banner900x85.png";
import imgRef2 from "../resources/banners/banner600x398.png";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container_01 = () => {
  const [file01, setFile01] = useState("");
  const [file02, setFile02] = useState("");
  const [file03, setFile03] = useState("");
  const [file04, setFile04] = useState("");

  const { documents: posts } = useFetchDocuments("news");

  async function bannerItemFind() {
    const selectedFile01 = await posts.find((post) => post.emphasis === "01");
    const selectedFile02 = await posts.find((post) => post.emphasis === "02");
    const selectedFile03 = await posts.find((post) => post.emphasis === "03");
    const selectedFile04 = await posts.find((post) => post.emphasis === "04");

    setFile01(selectedFile01);
    setFile02(selectedFile02);
    setFile03(selectedFile03);
    setFile04(selectedFile04);
  }

  if (posts) {
    bannerItemFind();
  }

  const navigate = useNavigate();

  function goTo1() {
    navigate(`/post/${file01.id}`);
  }

  function goTo2() {
    navigate(`/post/${file02.id}`);
  }

  function goTo3() {
    navigate(`/post/${file03.id}`);
  }

  function goTo4() {
    navigate(`/post/${file04.id}`);
  }

  return (
    <div className={styles.main_home_container}>
      <div onClick={goTo1} className={styles.left_container}>
        {file01 && <img src={file01.image} alt={file01.title} />}
        {!file01 && <img src={imgRef1} alt="imgRef1" />}
        <div className={styles.text_left_container}>
          {file01 && <label>{file01.title}</label>}
          {file01 && <p>{file01.head}</p>}
        </div>
      </div>
      <div className={styles.right_container}>
        <div onClick={goTo2} className={styles.inner_right_container_top}>
          {file02 && <img src={file02.image} alt={file02.title} />}
          {!file02 && <img src={imgRef2} alt="imgRef2" />}
          <div className={styles.text_top_right_container}>
            {file02 && <label>{file02.title}</label>}
            {file03 && <p>{file02.head}</p>}
          </div>
        </div>
        <div className={styles.inner_right_container_botton}>
          <div onClick={goTo3} className={styles.inner_left}>
            {file03 && <img src={file03.image} alt={file03.title} />}
            {!file02 && <img src={imgRef1} alt="imgRef1" />}
            <div className={styles.text_left}>
              {file03 && <label>{file03.title}</label>}
              {file03 && <p>{file03.head}</p>}
            </div>
          </div>
          <div onClick={goTo4} className={styles.inner_right}>
            {file04 && <img src={file04.image} alt={file04.title} />}
            {!file02 && <img src={imgRef1} alt="imgRef1" />}
            <div className={styles.text_right}>
              {file04 && <label>{file04.title}</label>}
              {file04 && <p>{file04.head}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container_01;
