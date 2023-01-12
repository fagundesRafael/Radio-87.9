import styles from './Container_02.module.css'

const Container_02 = () => {
  return (
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
  )
}

export default Container_02