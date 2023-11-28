import styled from "styled-components"

export const Container = styled.div`
padding: 25px 390px;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.1);
background-color: var(--white);


@media screen and (max-width: 500px){
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 100%;
   ul{
    flex-direction: column;
    
    
    } 

}
`
export const Logo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
img{
    width: 100px;
    height: auto;
    
   } 
`

export const Menu = styled.div`
ul{
    display: flex;
    justify-content:center;
    li{
    font-size: 1.3em ;
    margin-left: 50px;
    font-weight: bold;
    color: var(--blue);
    transition: border-bottom 0.3s ease;

&:hover {
    border-bottom: 3px solid var(--blue); 
 }
 a {
    text-decoration: none; 
    color: inherit; 
&:hover {
    border-bottom: 2px solid var(--blue);
 }
}
}





}


`