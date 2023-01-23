import styles from "./CardNews.module.css";

import { Link } from "react-router-dom";

const CardNews = ({ data }) => {
  return (
    <div>
      <Link className={styles.none} to={`/post/${data.id}`}>
        <div className={styles.card}>
          <div className={styles.image_container}>
            <img src={data.image} alt={data.tags[0]} />

            <label>{data.theme}</label>
          </div>

          <div className={styles.data_container}>
            <h1>{data.title.slice("", 100)}</h1>
            <p>{data.head.slice("", 300)}... <span><br></br> clique para ver a matéria na íntegra...</span></p>
            <div className={styles.author}>
              <p>Autor: {data.createdBy}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardNews;
