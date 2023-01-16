import styles from "./CardPost.module.css";

import { Link } from "react-router-dom";
import { useDeleteDocument } from "../hooks/useDeleteDocument";

const CardPost = ({ post }) => {
  const { deleteDocument } = useDeleteDocument("news");

  return (
    <div className={styles.post_card}>
      <img src={post.image} alt={post.title} />
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <h2>{post.title.split("", 76)}...</h2>
      <p className={styles.createdby}>por: {post.createdBy}</p>
      <div className={styles.buttons}>
        <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
          Editar
        </Link>
        <button
          onClick={() => deleteDocument(post.id)}
          className="btn btn-outline btn-danger"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default CardPost;
