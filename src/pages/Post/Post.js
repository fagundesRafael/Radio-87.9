import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";
import { Timestamp } from "firebase/firestore";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("news", id);

  
  if(post) {
    console.log(JSON.stringify(post.createdAt.seconds))
    console.log(new Date(post.createdAt.seconds*1000))
    const date = post.createdAt.toDate().toDateString()
    console.log(date)
  }

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
            <h5>{post.createdAt.toDate().toDateString()}</h5>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
