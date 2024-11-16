import "./login.css";
import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Login = () => {
  return (
    <section className="login-container">
      <section className="login-section">
        <div className="login-image-area">
          <img
            src="../../../public/house.js-white-logo-removebg-preview.png"
            alt="Logo house Js"
          />
        </div>
        <div className="login-area">
          <Form title="Login">
            <div className="login-inputs">
              <Input height="4rem">Nome:</Input>
              <Input height="4rem">Senha: </Input>
              <h3>
                Não é cadastrado? <Link to="/cadastro">Cadastre-se</Link>
              </h3>
              <Button height="4rem">Entrar</Button>
            </div>
          </Form>
        </div>
      </section>
    </section>
  );
};

export default Login;
