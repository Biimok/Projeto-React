import React, {useState, useEffect} from 'react';
import api from '../../../services/api';


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

    return (
        <>
            <div>
                {funcionario.map((funcionario)=> (
                    <div key={funcionario.id}>
                        <strong>{funcionario.nome}</strong>
                        <p>{funcionario.cpf}</p>
                    </div>
                ))}                
            </div>
        </>
    );
}

export default Funcionario;