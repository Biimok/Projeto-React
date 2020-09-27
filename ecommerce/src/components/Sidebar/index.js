import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import ShoppingBasketRoundedIcon from '@material-ui/icons/ShoppingBasketRounded';
import CategoryRoundedIcon from '@material-ui/icons/CategoryRounded';
import {Link} from "react-router-dom";

const SideBar = () => {
  const [categoria, setCategoria] = useState([]);
  const loadCategoria = async () => {
    try {
      const response = await api.get("categoria");
      // console.log('loadCategoria', response.data);

      setCategoria(response.data);
    } catch (error) {
      console.log("loadCategoria error", error);
    }
  };
  useEffect(() => {
    loadCategoria();
  }, []);

  return (
    <ProSidebar>
      <Menu iconShape="round">
        <MenuItem icon={<HomeRoundedIcon />}>Home</MenuItem>
        <MenuItem icon={<ShoppingBasketRoundedIcon />}>Produtos</MenuItem>
        <SubMenu title="Administração" icon={<WorkRoundedIcon />}>
          <MenuItem>Cadastrar Cliente</MenuItem>
          <MenuItem>Cadastrar Funcionário</MenuItem>
          <MenuItem>Cadastrar Categoria</MenuItem>
          <MenuItem>Cadastrar Produto</MenuItem>
        </SubMenu>
        <SubMenu title="Categorias" icon={<CategoryRoundedIcon />}>
          <div>
            {categoria.map((categoria) => (
              <MenuItem key={categoria.id}><Link to={`/produto/${categoria.id}`}/>{categoria.nome}</MenuItem>
            ))}
          </div>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default SideBar;