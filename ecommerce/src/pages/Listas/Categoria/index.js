import React, {useState, useEffect} from 'react';
import api from '../../../services/api';


const Categoria = () => {
    const[categoria, setCategoria] = useState([]);



    const loadCategoria = async () => {
        try{
            const response = await api.get('categoria');
            // console.log('loadCategoria', response.data);
    
            setCategoria(response.data);
        } catch (error) {
            console.log('loadCategoria error', error);
        }
    };
    useEffect(() => {
        loadCategoria();
    }, []);

    return (
        <>
            <div>
                {categoria.map((categoria)=> (
                    <div key={categoria.id}>
                        <strong>{categoria.nome}</strong>
                        <p>{categoria.descricao}</p>
                        <a href={`/produtos`}>Produtos</a>
                    </div>
                ))}                
            </div>
        </>
    );
}

export default Categoria;