import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import Header from '../../../components/Header'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from "react-router-dom";
// import { Funcionario } from './styles';

const Funcionario = () => {
    const[funcionario, setFuncionario] = useState([]);

    const loadFuncionario = async () => {
        try{
            const response = await api.get('funcionario');
    
            setFuncionario(response.data);
        } catch (error) {
            console.log('loadFuncionario error', error);
        }
    };
    useEffect(() => {
        loadFuncionario();
    }, []);

    const removeFuncionario = async (funcionario) => {
        await api.delete(`funcionario/${funcionario.id}`);
        loadFuncionario();
      }

    return (
        <>
        <Header/>
        {/* <Funcionario> */}
        <div>
        <span>
            Adicionar novo funcionário
            <Link to='/cadastro/funcionario'><AddCircleIcon size={22}  style={{marginLeft: 10, marginTop: 20}}/></Link> 
        </span>
        
        </div>
        {/* </Funcionario> */}
            <div>
                {funcionario.map((funcionario)=> (
                    <div key={funcionario.id}>
                        <strong>{funcionario.nome}</strong>
                        <p>{funcionario.cpf}</p>
                        <span>
                        <>
                           <DeleteIcon size={22} onClick={() => removeFuncionario(funcionario)} style={{marginRight: 10, cursor:"pointer"}} />
                           <Link to='/cadastro/funcionario'><EditIcon size={22} style={{marginRight: 10, cursor:"pointer"}} /></Link>
                        </>
                        </span>
                    </div>
                ))}                
            </div>
        </>
    );
}

export default Funcionario;