import styles from "./Esportes_container.module.css";

import CardNews from "./CardNews.js";
import Vertical_area_banner from './Vertical_area_banner'

import { useFetchDocuments } from "../hooks/useFetchDocuments";

const Esportes_container = () => {
  const { documents: news } = useFetchDocuments("news");

  if (news) {
    var esportes = news.filter((item) => item.theme === "esportes");
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.news_container}>
        <label className={styles.label_container}>
          <h2>Últimas notícias</h2>
        </label>
        <div className={styles.cards}>
          {esportes &&
            esportes.map((item) => <CardNews key={item.id} data={item} />)}
        </div>
      </div>
      <div className={styles.advertisements_colum}>
        <label className={styles.label_container}>
          <h2>Anúncios</h2>
        </label>
        <Vertical_area_banner/>
      </div>
    </div>
  );
};

export default Esportes_container;
