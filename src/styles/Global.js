import {createGlobalStyle} from "styled-components";



export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box
}
 :root{
   --primary: #F7F9FC;
   --secondarey: #15181C;
   --gray: #d9d9d9;
   --blue: #4766ff;
   --white:#fff; 
}

 body{
    background-color: var(--primary);
    color: var(--secondarey);
    font-family: 'Dosis', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
   }
 
 ul{list-style:none;}
 
 a{
    text-decoration: none;
 }

 


`