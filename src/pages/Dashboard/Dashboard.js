import styles from "./Dashboard.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";

import CardPost from "../../components/CardPost";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("news", null, uid);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/dashboard/search?q=${query}`);
    }
  };

  return (
    <div className={styles.dashboard}>
      <h1>Página de gerenciamento de publicações:</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="buscar por tags:"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div className={styles.dashboard_items}>
        {loading && <p>Carregando dados...</p>}
        {posts && posts.map((post) => <CardPost key={post.id} post={post} />)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>NÃO FOI ENCONTRADO NENHUMA POSTAGEM NO BANCO DE DADOS!</p>
            <Link to="/posts/create" className="btn">
              Criar Publicação
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
