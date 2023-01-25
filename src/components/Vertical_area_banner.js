import styles from './Vertical_area_banner.module.css'

import BannerI400x400 from "./BannerI400x400";
import BannerII400x400 from "./BannerII400x400";
import BannerIII400x400 from "./BannerIII400x400";
import BannerIV400x400 from "./BannerIV400x400";

const Vertical_area_banner = () => {
  return (
    <div className={styles.general_container}>
        <div className={styles.area_banner}>
          <BannerI400x400/>
        </div>
        <div className={styles.area_banner}>
          <BannerII400x400/>
        </div><div className={styles.area_banner}>
          <BannerIII400x400/>
        </div><div className={styles.area_banner}>
          <BannerIV400x400/>
        </div>
        <div className={styles.area_social_media}></div>
    </div>
  )
}

export default Vertical_area_banner