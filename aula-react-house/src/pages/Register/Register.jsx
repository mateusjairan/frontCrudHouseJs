import React from "react";
import Form from "../../components/Form/Form";
import "./register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import axios from "axios";
const Register = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
  });

  function handleChange({ target }) {
    const { value, name } = target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(form));

    // fetch("https://6738d59e4eb22e24fca92233.mockapi.io/users", {
    //   method: "POST",
    //   body: JSON.stringify(form),
    // });

    axios.post("https://6738d59e4eb22e24fca92233.mockapi.io/users", form);

    setForm({
      nome: "",
      email: "",
      senha: "",
    });
  }
  return (
    <section className="register-container">
      <Form
        title="Cadastro"
        width="50rem"
        height="42rem"
        bg="whitesmoke"
        onSubmit={handleSubmit}
      >
        <div className="register-inputs">
          <Input
            height="4rem"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          >
            Nome:{" "}
          </Input>
          <Input
            height="4rem"
            name="email"
            value={form.email}
            onChange={handleChange}
          >
            Email:{" "}
          </Input>
          <Input
            height="4rem"
            name="senha"
            value={form.senha}
            onChange={handleChange}
          >
            Senha:{" "}
          </Input>
        </div>
        <Button height="4rem">Cadastrar</Button>
      </Form>
    </section>
  );
};

export default Register;
