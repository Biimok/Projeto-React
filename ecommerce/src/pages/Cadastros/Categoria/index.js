import React, {useState} from 'react'; 
import api from '../../../services/api';
import {Form, Textarea} from '../../../styles/formStyle';


const CadastroCategoria = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    async function handleAddCategoria(e) {
        e.preventDefault();

        if (nome === '' || descricao === '') {
            setErrorMessage('Preencha todos os campos solicitados');
            return;
        }

        const params = {
            nome: nome,
            descricao: descricao
        }

        try {
            await api.post('categoria', params);

            setNome('');
            setDescricao('');
            setErrorMessage('');

        } catch (error) {
            console.log ('handleAddCategoria error', error);
        }
        console.log('form submitted');
    }

    return ( 
        <>
        <h1> Categoria </h1>

        <Form onSubmit={handleAddCategoria}>
            <input value={nome} 
            onChange={e => setNome(e.target.value)} 
            type='text' 
            placeholder='Digite o nome da Categoria'></input>
            
            <Textarea  value={descricao} 
            onChange={e => setDescricao(e.target.value)} 
            type='text' 
            placeholder='Digite a descrição'></Textarea >
            
            <button type='submit'>Enviar</button>
            </Form>
            <p>{errorMessage}</p>
        </>
    );
}
export default CadastroCategoria;