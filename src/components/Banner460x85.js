import styles from "./Banner460x85.module.css";

import { useFetchDocuments } from "../hooks/useFetchDocuments";

const Banner900x85 = () => {
  const { documents: banners } = useFetchDocuments("banners");

  if (banners) {
    var banner01 = banners.find((banner) => banner.imageSize === "460x85");
  }

  return (
    <div className={styles.banner_container}>
      {banner01 && (<img src={banner01.imageURL} alt="" />)}
    </div>
  );
};

export default Banner900x85;
