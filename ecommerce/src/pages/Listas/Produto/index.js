import React, {useState, useEffect} from 'react';
import api from '../../../services/api';


const Produto = () => {
    const[produto, setProduto] = useState([]);



    const loadProduto = async () => {
        try{
            const response = await api.get('produto');
            // console.log('loadProduto', response.data);
    
            setProduto(response.data);
        } catch (error) {
            console.log('loadProduto error', error);
        }
    };
    useEffect(() => {
        loadProduto();
    }, []);

    return (
        <>
            <div>
                {produto.map((produto)=> (
                    <div key={produto.id}>
                        <strong>{produto.nome}</strong>
                        <p>{produto.descricao}</p>
                    </div>
                ))}                
            </div>
        </>
    );
}

export default Produto;