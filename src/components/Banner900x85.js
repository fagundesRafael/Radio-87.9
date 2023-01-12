import styles from './Banner900x85.module.css'

import banner from '../resources/banners/banner900x85.png'

const Banner900x85 = () => {
  return (
    <div className={styles.banner_container} >
        <img src={banner} alt="" />
    </div>
  )
}

export default Banner900x85