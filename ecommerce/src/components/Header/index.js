import React from "react";
import { Link } from "react-router-dom";
import { Container, Title } from "./styles";
import logo from "../../assets/logo3.png";

const Header = ({ title }) => {
  return (
    <>
      <Container>
        <img src={logo} alt="" />
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categoria">Categorias</Link>
          </li>
          <li>
            <Link to="/produto">Produtos</Link>
          </li>
          <li>
            <Link to="/funcionario">Funcionarios</Link>
          </li>   
        </ul>
        
      </Container>
      <Title>{title}</Title>
    </>
  );
};

export default Header;