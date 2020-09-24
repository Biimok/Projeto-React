import React, {useState} from 'react';
import api from '../../../services/api';
const Funcionario = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    
   async function handleAddFuncionario(e){
       e.preventDefault();
       
       if(nome === '' || cpf === '') {
           setErrorMessage ('Preencha todos os campos solicitados');
           return;
       };

       const params = {
        nome: nome,
        cpf: cpf
       }

       try {
           await api.post('funcionario', params);
           setNome('');
           setCpf('');
           
           
       } catch (error) {
           console.log ('handleAddFuncionario error', error);
       }
       console.log('form submitted');
    }

    return (
        <>
            <h1>Funcionario</h1>
            <form onSubmit={handleAddFuncionario}>
                <input value={nome} 
                onChange={e => setNome(e.target.value)} 
                type='text' 
                placeholder='Digite seu nome'></input>
                
                <input value={cpf} 
                onChange={e => setCpf(e.target.value)} 
                type='text' 
                placeholder='Digite seu cpf'></input>                             
                
                <button type='submit'>Enviar</button>
            </form>
            <p>{errorMessage}</p>
        </>
        //74424131025
        //57753425005
        //62730162089
    )
}
export default Funcionario;