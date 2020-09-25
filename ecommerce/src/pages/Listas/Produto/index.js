    import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import Header from '../../../components/Header'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
import SideBar from '../../../components/Sidebar/index';
import { ProdutoStyle, Wrap } from './style';
import{useParams} from 'react-router-dom';


const Produto = () => {
    const[produto, setProduto] = useState([]);
    const {id} = useParams();

    
    const loadProduto = async () => {
    try{
            const response = await api.get('produto');
            console.log(response.data);
    
            setProduto(response.data);
        } catch (error) {
            console.log('loadProduto error', error);
        }
    };
    useEffect(() => {
        loadProduto();
    }, []);

    const removeProduto = async (produto) => {
        await api.delete(`produto/${produto.id}`);
        loadProduto();
      }

    //   function filtrarProdutos(id) {
    //       if (id === produto.idCategoria) {
    //           return true;
    //       } else {
    //           return false;
    //       }
          
    // }
    //   console.log(filtrarProdutos)
   // var produtosFiltrados = produto.filter(filtrarProdutos(id));
   // console.log(produtosFiltrados);

    return (
        <>
        <Header />
        <Wrap>
           
            
            <SideBar></SideBar>
            
            <div>
                <div>
                    <span>
                        Adicionar novo Produto
                        <Link to='/cadastro/produto'><AddCircleIcon size={22}  style={{marginLeft: 10}} /></Link> 
                    </span>
            
                </div>
                {produto.map((produto)=> (
                    <ProdutoStyle>
                        <div key={produto.id}>
                            <strong>{produto.nome}</strong>
                            <p>{produto.descricao}</p>
                            <span>
                                <a>
                                    <DeleteIcon size={22} onClick={() => removeProduto(produto)} style={{marginLeft: 10, cursor:"pointer"}} />
                                    <Link to='/cadastro/produto'><EditIcon size={22} style={{marginLeft: 10, cursor:"pointer"}} /></Link>
                                </a>
                            </span>
                        </div>
                    </ProdutoStyle>
                ))}                
            </div>
            
        </Wrap>
        </>
    );
}

export default Produto;