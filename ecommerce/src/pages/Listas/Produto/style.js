import styled from 'styled-components';

export const ProdutoStyle = styled.div`
    display:flex;
    justify-content:space-between;
    flex-direction:row;

    div{
        background-color: #d48a35;
        border-radius: 5px ;
        margin-top:10px;
        padding: 5px;
        display:flex;
        text-align: justify;
        height:75px;
        width: 450px;
        justify-content: space-between;

        strong {

        }
        a{
            display:flex;
            align-self:end;
            justify-self:end;
        }
        
    }
    

`;

export const Wrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    
    }
`