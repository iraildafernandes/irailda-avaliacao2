import { useState } from "react";
import "./signin.css";

import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setMessage("Todos os campos são obrigatórios!");
    } else {
      console.log("Email:", email);
      console.log("Senha:", password);
    }
  };

  return (
    <div className="container-center">
      <div className="login">
        <form>
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span>{message}</span>

          <button type="submit" onClick={(e) => handleLogin(e)}>
            Acessar
          </button>
        </form>

        <Link to="/register">Se ainda não é cadastrado, clique aqui</Link>
      </div>
    </div>
  );
}
