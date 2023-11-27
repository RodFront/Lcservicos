import React  from "react"
import { Container, Logo, Menu } from "./styles";
import Logoimg  from "../../assets/img/logo.png";
const Header =() => {
    return(
        <Container>
            
            <Logo>
            <img src={Logoimg} alt="Logo" />
            </Logo>
           
            <Menu>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Serviços</a></li>
                <li><a href="#">Empresa</a></li>
                <li><a href="#">Contato</a></li>
            </ul>


            </Menu>
            
        </Container>
    )
}

export default Header;