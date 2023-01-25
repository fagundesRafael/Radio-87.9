import styles from './Vertical_area_banner.module.css'

import Banner_1_400x400 from "./Banner_1_400x400";
import Banner_2_400x400 from "./Banner_2_400x400";
import Banner_3_400x400 from "./Banner_3_400x400";
import Banner_4_400x400 from "./Banner_4_400x400";

const Vertical_area_banner = () => {
  return (
    <div className={styles.general_container}>
        <div className={styles.area_banner}>
          <Banner_1_400x400/>
        </div>
        <div className={styles.area_banner}>
          <Banner_2_400x400/>
        </div><div className={styles.area_banner}>
          <Banner_3_400x400/>
        </div><div className={styles.area_banner}>
          <Banner_4_400x400/>
        </div>
        <div className={styles.area_social_media}></div>
    </div>
  )
}

export default Vertical_area_banner