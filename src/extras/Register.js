import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div>
      <h1>Página de cadastro de usuário!</h1>
      <form>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            placeholder="Informe seu nome"
            required
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Informe seu email"
            required
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            placeholder="Insira sua senha"
            required
          />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a sua senha"
            required
          />
        </label>
        <button classe="btn" >Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
