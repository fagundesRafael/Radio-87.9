import styles from "./Register.module.css";

import { useState, useEffect } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfimrPassword] = useState("")
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais")
      return
    }

    console.log(user)

  }

  return (
    <div className={styles.register}>
      <h1>Página de cadastro de usuário!</h1>
      <form onSubmit={handleSubmit} >
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            placeholder="Informe seu nome"
            required
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            placeholder="Informe seu email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            placeholder="Insira sua senha"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label>
          <span>Confirmação de Senha:</span>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme a sua senha"
            required
            onChange={(e) => setConfimrPassword(e.target.value)}
            value={confirmPassword}
          />
        </label>
        <button className="btn" >Cadastrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
