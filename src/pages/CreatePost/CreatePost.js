import styles from "./CreatePost.module.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [theme, setTheme] = useState("");
  const [emphasis, setEmphasis] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const navigate = useNavigate();

  const { insertDocument, response } = useInsertDocument("news");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    // create tags array
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // check values
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
    }

    if (formError) return;

    insertDocument({
      title,
      image,
      body,
      theme,
      emphasis,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect to home page
    navigate("/");
  };

  return (
    <div className={styles.create_post}>
      <h2>Nova publicação</h2>
      <p>Escreva o título da notícia e informe a URL da imagem:</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Título:</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Informe o título:"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem:</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Informe a URL da imagem:"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo:</span>
          <textarea
            name="body"
            cols="30"
            rows="2"
            required
            placeholder="Digite aqui o texto pertinente ao conteúdo da notícia:"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Informe as tags separadas por vírgula:"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <label>
          <div className={styles.rowData}>
            <div>
              <span>Tema: </span>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                name="tema"
                required
              >
                <option value="">Escolha uma opção</option>
                <option value="cultura">Cultura</option>
                <option value="esportes">Esportes</option>
                <option value="eventos">Eventos</option>
                <option value="policial">Policial</option>
                <option value="Política">Política</option>
              </select>
            </div>
            <div>
              <span>Destaque: </span>
              <select
                value={emphasis}
                onChange={(e) => setEmphasis(e.target.value)}
                name="destaque"
                required
              >
                <option value="">Escolha uma opção</option>
                <option value="normal">normal</option>
                <option value="01">Capa 01</option>
                <option value="02">Capa 02</option>
                <option value="03">Capa 03</option>
                <option value="03">Capa 03</option>
              </select>
            </div>
          </div>
        </label>
        {!response.loading && <button className="btn">Postar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
