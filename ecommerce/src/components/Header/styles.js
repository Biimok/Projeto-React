import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #121212;
  border-radius: 10px;
  padding: 5px;
  img{
    max-width:250px;
    align-self:center;
    padding:20px;
  }
  ul {
    display: flex;
    list-style: none;
    align-items:flex-end;
    li {
      font-size: 15px;
      padding: 10px;

      & + li {
        margin-left: 10px;
      }

      a {
        color: #1277b8;
        text-decoration: none;

        &:hover{
            color: #565955;            
            transition:0.5s;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: #535652;
`;
