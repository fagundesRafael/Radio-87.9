import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { Timestamp } from "firebase/firestore";

import { useEffect, useState } from "react";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("news", id);

  const [date, setDate] = useState('')

  useEffect(() => {
    if (post) {
      const date = new Date(post.createdAt.seconds * 1000);
  
      const formatter = Intl.DateTimeFormat("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
      });
      
      const formatedDate = formatter.format(date)
      setDate(formatedDate)
    }
  }, [post])

  return (
    <div className={styles.post_container}>
      <div>
        {loading && <p>Carregando página...</p>}
        {post && (
          <>
            <h1>{post.title}</h1>
            <img src={post.image} alt={post.title} />
            <p>{post.head}</p>
            <p>{post.body}</p>
            <p>
              Author(a): <span>{post.createdBy}</span>
            </p>
            <h5>{date}</h5>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
