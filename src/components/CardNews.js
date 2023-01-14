import styles from "./CardNews.module.css";

const CardNews = ({ data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image_container}>
        <img src={data.image} alt={data.tags[0]} />
        <label>{data.theme}</label>
      </div>

      <div className={styles.data_container}>
        <h1>{data.title}</h1>
        <p>{data.head}</p>
        <div className={styles.author}>
        <p>Autor: {data.createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
