import styles from "./Search.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";

import CardPost from "../../components/CardPost";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: news } = useFetchDocuments("news", search);

  return (
    <div className={styles.search_painel}>
      <div className={styles.top_area}>
        <h2>Resultado da busca:</h2>
        <Link className="btn btn-dark" to="/dashboard">
          Voltar
        </Link>
      </div>
      <div className={styles.body_area}>
        {news && news.length === 0 && (
          <>
            <p>NÃO FOI ENCONTRADO NENHUMA NOTÍCIA COM SUA BUSCA!</p>
            <p className={styles.margin_p_footer}>
              POR FAVOR INFORME NOVA TAG DE PESQUISA!
            </p>
          </>
        )}
      </div>
      <div className={styles.list_items_spread}>
        {news && news.map((item) => <CardPost key={item.id} post={item} />)}
      </div>
    </div>
  );
};

export default Search;
