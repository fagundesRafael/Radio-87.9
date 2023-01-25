import styles from "./Banner400x400.module.css";

import { useFetchDocuments } from "../hooks/useFetchDocuments";

const Banner_1_400x400 = () => {
  const { documents: banners } = useFetchDocuments("banners");

  if (banners) {
    var banner02 = banners.find((banner) => banner.imageSize === "1_400x400");
  }
  return (
    <div className={styles.area_banner}>
      {banner02 && (<img src={banner02.imageURL} alt="" />)}
    </div>
  );
};

export default Banner_1_400x400;
