import styles from "./Dashboard.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [posts] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.dashboard} >
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
      <div>
        <h1>Publicações:</h1>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>NÃO FOI ENCONTRADO NENHUMA POSTAGEM NO BANCO DE DADOS!</p>
            <Link to='/posts/create' className="btn" >Criar Publicação</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
