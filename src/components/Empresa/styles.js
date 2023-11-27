import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: auto;
justify-content: center;
align-items: center;
text-align: left;
padding: 20px;
background-color: #242424;
color: var(--white);


`
export const Conteudo = styled.div`
width: 50%;
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
gap: 30px;

h1{
    color: var(--blue);
    margin-bottom: 20px;
    
}
p{
  font-weight: 500;
}

span{
    color: var(--blue);
}

`
