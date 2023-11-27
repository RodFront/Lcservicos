import styled from "styled-components"

export const Container = styled.div`
padding: 200px 390px;
position: relative;
background-size: cover;
background-position: center;
background-image: url('https://plus.unsplash.com/premium_photo-1682148734654-995384287c47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
&:before{
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

@media screen and (max-width: 500px){
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    width: 90%;
    padding: 10px;
    
      
}


`

export const Text = styled.div`
   width: 55%;
   position: relative;
   z-index: 1;
       h1{
        color: var(--white);
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: 20px;
}
   
 p{
    color: var(--white);
 }
 @media screen and (max-width: 500px){
    h1{
       font-size : 25px;
    }
    p{
        font-size: 12px;
    }
 }

`