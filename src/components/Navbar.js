import styles from "./Navbar.module.css";

import logo from "../resources/imgs/logo01.jpg";

import { NavLink, useNavigate } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

import Banner460x85 from "./Banner460x85";

const Navbar = () => {
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  const navigate = useNavigate();

  function goToDash() {
    navigate("/dashboard");
  }

  function goToCreate() {
    navigate("/posts/create");
  }

  function goToBanners() {
    navigate("/posts/banners");
  }


  function goToImgUpLoad() {
    navigate("/posts/img_upload");
  }


  return (
    <nav className={styles.navbar_general_container}>
      <div className={styles.navbar_top_area}>
        <div className={styles.img_container}>
          <NavLink to="/">
            <img src={logo} alt="none" width={80} />
          </NavLink>
          <h3>A rádio da família Machadinhense</h3>
        </div>
        <div>
          <Banner460x85 />
        </div>
      </div>
      <div className={styles.navbar_menu_main}>
        <ul className={styles.links_list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Início
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cultura"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Cultura
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/esportes"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Esportes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/eventos"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Eventos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/policial"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Policial
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/política"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Política
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/social"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Social
            </NavLink>
          </li>
          {user && (
            <ul className={styles.admin_section}>
              <li>
                <p>| Bem-vindo {user.displayName} |</p>
              </li>
              <li>
                <button onClick={goToDash} className={styles.admin_button}>
                  GERENCIAR
                </button>
              </li>
              <li>
                <button onClick={goToCreate} className={styles.admin_button}>
                  POSTAR
                </button>
              </li>
              <li>
                <button onClick={goToBanners} className={styles.admin_button}>
                  BANNERS
                </button>
              </li>
              <li>
                <button onClick={goToImgUpLoad} className={styles.admin_button}>
                  UP_IMG
                </button>
              </li>
              <li>
                <button onClick={logout} className={styles.admin_button}>
                  SAIR
                </button>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
