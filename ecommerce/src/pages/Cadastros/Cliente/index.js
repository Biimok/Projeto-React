import React, {useState} from 'react';
import {Form} from '../../../styles/formStyle';

import api from '../../../services/api';


const Clientes = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
   async function handleAddCliente(e){
       e.preventDefault();
       
       if(nome === '' || cpf === '' || usuario === '' || email === '') {
           setErrorMessage ('Preencha todos os campos solicitados');
           return;
       }

       const params = {
        nome: nome,
        usuario: usuario,
        cpf: cpf,
        email: email,
        dataNascimento: "1992-02-01T00:00:00Z",
        endereco: {
            rua: "Rua dos Bobos",
            numero: "0",
            complemento: "",
            bairro: "Castanheira",
            cidade: "Metropolis",
            estado: "SP",
            cep: "23451234",
           }
       }

       try {
           await api.post('cliente', params);

           setNome('');
           setCpf('');
           setEmail('');
           setUsuario('');
           setErrorMessage('');
           
       } catch (error) {
           console.log ('handleAddCliente error', error);
       }
       console.log('form submitted');
    }

    return (
        <>
            <h1>Cliente</h1>
            <Form onSubmit={handleAddCliente}>
                <input value={nome} 
                onChange={e => setNome(e.target.value)} 
                type='text' 
                placeholder='Digite seu nome'></input>
                
                <input value={cpf} 
                onChange={e => setCpf(e.target.value)} 
                type='text' 
                placeholder='Digite seu cpf'></input>
                
                <input value={email} 
                onChange={e => setEmail(e.target.value)} 
                type='email' 
                placeholder='Digite seu email' required></input>
                
                <input value={usuario} 
                onChange={e => setUsuario(e.target.value)} 
                type='text' 
                placeholder='Digite seu Usuario'></input>
                
                <button type='submit'>Enviar</button>
            </Form>
            <p>{errorMessage}</p>
        </>
    )
}
export default Clientes;