import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: auto;
align-items: center;
justify-content: center;




`

export const Cards = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
padding: 30px;
flex-wrap: wrap;
margin-top: 1rem;
width: 100%;
img{
    width: 200px;
    height: auto;
    margin-left: 6rem ;
}


@media screen and (max-width: 500px){
display:flex;
margin: 0;
justify-content: space-between;
align-items  :center ;
width: 100%;
img{
    margin-top: 5rem;
    
    
    
}


}


`
