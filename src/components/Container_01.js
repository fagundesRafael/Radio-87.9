import styles from "./Container_01.module.css";

const Container_01 = () => {
  return (
    <div className={styles.main_home_container}>
      <div className={styles.left_container}>
        <img
          src="https://images.unsplash.com/photo-1673427303785-2f077047aac3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt=""
        />
        <div className={styles.text_left_container}>
          <h1>Título</h1>
          <p>
            Lorecimus dolore in ea dolorem, alias hic architecto voluptatum? Et
            assumenda liquam persp culpa adipisci.
          </p>
        </div>
      </div>
      <div className={styles.right_container}>
        <div className={styles.inner_right_container_top}>
          <img
            src="https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
          <div className={styles.text_top_right_container}>
            <h1>Título</h1>
            <p>
              Lorecimus dolore in ea dolorem, alias hic architecto voluptatum?
              Et assumenda liquam persp culpa adipisci.
            </p>
          </div>
        </div>
        <div className={styles.inner_right_container_botton}>
          <div className={styles.inner_left}>
          <img
            src="https://images.unsplash.com/photo-1673345548703-cd90c077877b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""
          />
          <div className={styles.text_left}>
            <h1>Título</h1>
            <p>
              Lorecimus dolore in ea dolorem, alias hic architecto voluptatum?
              Et assumenda liquam persp culpa adipisci.
            </p>
          </div>
          </div>
          <div className={styles.inner_right}>
          <img
            src="https://images.unsplash.com/photo-1666831133872-89aabc5988d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt=""
          />
          <div className={styles.text_right}>
            <h1>Título</h1>
            <p>
              Lorecimus dolore in ea dolorem, alias hic architecto voluptatum?
              Et assumenda liquam persp culpa adipisci.
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container_01;
