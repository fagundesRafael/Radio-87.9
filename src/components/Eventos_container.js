import styles from "./Eventos_container.module.css";

import CardNews from "./CardNews.js";
import Vertical_area_banner from "./Vertical_area_banner";

import { useFetchDocuments } from "../hooks/useFetchDocuments";

export const Eventos_container = () => {
  const { documents: news } = useFetchDocuments("news");

  if (news) {
    var eventos = news.filter((item) => item.theme === "eventos");
  }
  return (
    <div className={styles.main_container}>
      <div className={styles.news_container}>
        <label className={styles.label_container}>
          <h2>Últimas notícias</h2>
        </label>
        <div className={styles.cards}>
          {eventos &&
            eventos.map((item) => <CardNews key={item.id} data={item} />)}
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
