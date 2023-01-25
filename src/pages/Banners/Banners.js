import styles from "./Banners.module.css";

import { useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Banners = () => {
  const { documents: banners } = useFetchDocuments("banners");
  const { deleteDocument } = useDeleteDocument("banners");
  const [imageURL, setImageURL] = useState("");
  const [imageSize, setImageSize] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("banners");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    try {
      new URL(imageURL);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
    }

    if (formError) return;

    insertDocument({
      imageURL,
      imageSize,
    });
  };

  if (banners) {
    var banner01 = banners.find((banner) => banner.imageSize === "460x85");
    var banner02 = banners.find((banner) => banner.imageSize === "1_400x400");
  }

  return (
    <div>
      {" "}
      <div className={styles.banner_post}>
        <h2>Inserir Banner</h2>
        <p>
          Informe a URL da imagem e selecione o tamanho correto para direcionar
          o banner:
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            <img src={imageURL} />
            <span>URL do banner:</span>
            <input
              type="text"
              name="image"
              required
              placeholder="Informe a URL da imagem:"
              onChange={(e) => setImageURL(e.target.value)}
              value={imageURL}
            />
          </label>
          <label>
            <div>
              <span>Tamanho do banner: </span>
              <select
                value={imageSize}
                onChange={(e) => setImageSize(e.target.value)}
                name="tamanho"
                required
              >
                <option value="">Escolha uma opção</option>
                <option value="460x85">460px / 85px</option>
                <option value="1_400x400">1_ 400px / 400px</option>
                <option value="2_400x400">2_ 400px / 400px</option>
                <option value="3_400x400">3_ 400px / 400px</option>
                <option value="4_400x400">1_ 400px / 400px</option>
              </select>
            </div>
          </label>
          <div className={styles.rowData}>
            <div className={styles.img_banner}>
              <hr />
              <h3>BANNER: 460px / 85px</h3>
              {banner01 && <img src={banner01.imageURL} />}
              <button
                onClick={() => deleteDocument(banner01.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
              <hr />
            </div>
            <div className={styles.img_banner}>
              <hr />
              <h3>BANNER: 1_400px / 400px</h3>
              {banner02 && <img src={banner02.imageURL} />}
              {!banner02 && <p> <br></br> ANUNCIE AQUI</p>}
              <button
                onClick={() => deleteDocument(banner01.id)}
                className="btn btn-outline btn-danger"
              >
                Excluir
              </button>
              <hr />
            </div>
          </div>
          {!response.loading && <button className="btn">Inserir</button>}
          {response.loading && (
            <button className="btn" disabled>
              Aguarde...
            </button>
          )}
          {response.error && <p className="error">{response.error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Banners;
