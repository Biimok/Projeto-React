import styled from 'styled-components';

export const Form = styled.form`
margin-top:40px;
max-width: 700px;
display:flex;
justify-content: space-around;
flex-direction:column;


input{
    height: 40px;
    padding: 10px;
    border-radius: 5px;
    max-width: 300px;
    border:2px solid;
    background: #F2FDFD;
    margin-bottom: 10px;
    color:#000;

    
    
    
}    
button {
    display:flex;
    height: 40px
    font-weight: bold;
    border: 2px solid #cccc;
    background: #abcd;
    
    width: 300px;
    align-self:center;
    justify-content:center;
    padding:5px;    
    border-radius: 5px;
    transition: 0.15s;
    
    
    &:hover{
        opacity:0.9;
        border-image-source: linear-gradient(to left, #BF0F0C, rgb(255,255,100));
        background-image: linear-gradient(to left, #b3c2d1, #9AA6B3);
        
    }
}
`;
export const Textarea = styled.textarea`{
    resize: none;
    height: 100px;
    padding: 10px;
    border: 0;
    border-radius: 5px;
    max-width: 300px;
    border:2px solid;
    background:#F2F2F2;
    margin-bottom: 10px;

    border-image-source: linear-gradient(to left, rgb(255,255,100), #BF0F0C);
    border-image-slice: 1;
}
`;