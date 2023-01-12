import styles from "./Início.module.css";

import Container_01 from "../../components/Container_01";

const Início = () => {
  return (
    <div>
      <Container_01 />
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
