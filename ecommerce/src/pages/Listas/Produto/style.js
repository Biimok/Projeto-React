import styled from 'styled-components';

export const ProdutoStyle = styled.div`
    display:flex;
    margin-top: 10px;
    flex-direction:column 2;
    width: 100%;
    height:75px;
    background-color: #1d1d1d;
    border-radius:5px;
    
    .nome{
        width: 20%;
    }
    
    .bla{
        width: 60%;
    }
    
    .preco{
        justify-content:flex-end;
        align-self:center;
        width: 20%;
    }

    div{
        border-radius: 5px ;
        margin-top:10px;
        padding: 5px;
        display:flex;
     
    }
    

`;

export const Wrap = styled.div`
    display:flex;
    flex-direction:column 2;
    justify-content:space-between;
    }
`

export const Tabela = styled.div`
    display:flex;
    margin-top:10px;
    flex-direction:column;
    width:70%;

`;



