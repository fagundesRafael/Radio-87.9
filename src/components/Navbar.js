import styles from "./Navbar.module.css";

import logo from "../resources/imgs/logo01.jpg";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContext";

import Banner900x85 from "./Banner900x85";

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
          <Banner900x85 />
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
              to="/programas"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Programas
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
                <button onClick={goToImgUpLoad} className={styles.admin_button}>
                  GALERIA
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
