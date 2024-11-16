import React from "react";
import Button from "../../components/Button/Button";
import "./home.css";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
const Home = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://6738d59e4eb22e24fca92233.mockapi.io/users"
      );

      const json = await response.json();
      setUsers(json);
    }
    fetchUsers();
  }, []);

  function handleClick() {
    console.log(users);
  }
  return (
    <section className="home-container">
      <div className="action-panel">
        <h1>Olá </h1>
        <Link to="/login">Login</Link>
        <Link to="/cadastro">Cadastro</Link>
        <Button width="14rem" height="3rem" onClick={handleClick}>
          Ver Usuários
        </Button>
      </div>
      <section className="cards-area">
        {users.map((user, index) => (
          <Card nome={user.nome} key={index} email={user.email}></Card>
        ))}
      </section>
    </section>
  );
};

export default Home;
