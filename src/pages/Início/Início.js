import styles from "./Início.module.css";

const Início = () => {
  return (
    <div>
      <div className={styles.first_home_container}>
        <div className={styles.left_container}></div>
        <div className={styles.right_container}>
          <div className={styles.inner_right_container_top}></div>
          <div className={styles.inner_right_container_botton}>
            <div className={styles.inner_left}></div>
            <div className={styles.inner_right}></div>
          </div>
        </div>
      </div>

      <div className={styles.second_home_container}>
        <div className={styles.news_container}>
          <label className={styles.label_container}>
            <h2>Cultura</h2>
          </label>
        </div>
        <div className={styles.advertisements_colum}>
        <label className={styles.label_container}>
            <h2>Anúncios</h2>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Início;
