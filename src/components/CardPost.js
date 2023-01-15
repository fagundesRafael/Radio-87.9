import styles from './CardPost.module.css'

import { Link } from 'react-router-dom'

const CardPost = ({post}) => {
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
      
      <Link to={`/posts/${post.id}`} className="btn btn-outline">
        Editar
      </Link>
    </div>
  )
}

export default CardPost