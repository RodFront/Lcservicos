import styled from "styled-components";


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
padding: 25px 100px;
margin-bottom: 250px;

@media screen and (max-width: 500px){
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    flex-direction: column;
}
`

export const Card = styled.div`
width: 400px;
height: 200px;
box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1);
H3{
    color: var(--blue);
    margin-bottom: 10px;
    font-weight: 700;
    padding: 10px;
}


img{
    width: 400px;
    height: 200px;
    border-radius: 5px;


}

p{
    margin-top: 10px;
}
@media screen and (max-width: 500px){
    height: auto;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    padding: 30px;
    width: 100%;

    p{
        text-align: justify;
        
    }

    img{
        width: 100%;
    }
}
`



















