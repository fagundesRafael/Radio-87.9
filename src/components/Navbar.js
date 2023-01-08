import styles from "./Navbar.module.css";

import logo from "../resources/imgs/logo01.jpg";
import banner01 from "../resources/banners/banner900x85.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar_general_container}>
      <div className={styles.navbar_top_area}>
        <div className={styles.img_container}>
          <NavLink to='/' >
          <img src={logo} width={80} />
          </NavLink>
          <h3>A rádio da família Machadinhense</h3>
        </div>
        <div className={styles.banner_container}>
          <img src={banner01} />
        </div>
      </div>
      <div className={styles.navbar_menu_row}>
        <ul className={styles.links_list}>
          <li>
            <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Início</NavLink>
          </li>
          <li>
            <NavLink to="/cultura" className={({isActive}) => (isActive ? styles.active : "")}>Cultura</NavLink>
          </li>
          <li>
            <NavLink to="/esportes" className={({isActive}) => (isActive ? styles.active : "")}>Esportes</NavLink>
          </li>
          <li>
            <NavLink to="/eventos" className={({isActive}) => (isActive ? styles.active : "")}>Eventos</NavLink>
          </li>
          <li>
            <NavLink to="/policial" className={({isActive}) => (isActive ? styles.active : "")}>Policial</NavLink>
          </li>
          <li>
            <NavLink to="/política" className={({isActive}) => (isActive ? styles.active : "")}>Política</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
