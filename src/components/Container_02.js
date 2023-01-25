import styles from "./Container_02.module.css";

import CardNews from "./CardNews.js";
import Vertical_area_banner from "./Vertical_area_banner";

import { useFetchDocuments } from "../hooks/useFetchDocuments";

const Container_02 = () => {
  const { documents: news } = useFetchDocuments("news");

  return (
    <div className={styles.main_container}>
      <div className={styles.news_container}>
        <label className={styles.label_container}>
          <h2>Últimas notícias</h2>
        </label>
        <div className={styles.cards}>
          {news && news.map((item) => <CardNews key={item.id} data={item} />)}
        </div>
      </div>
      <div className={styles.advertisements_colum}>
        <label className={styles.label_container}>
          <h2>Anúncios</h2>
        </label>
        <Vertical_area_banner />
      </div>
    </div>
  );
};

export default Container_02;
