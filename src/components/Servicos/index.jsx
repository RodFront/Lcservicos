import React, { Fragment } from "react";
import { Container, Card } from "./styles";

const Servicos = () => {
    return(
       
        <Container>
             
            <Card>
                <h3>Elaboração de PMOC</h3>
                <img src="https://static.webarcondicionado.com.br/blog/uploads/2022/11/como-fazer-o-pmoc-werbarcondicionado.jpg" alt="imagem"/>
                <p>Plano de manutenção operação e controle, conforme as leis vigentes.</p>
                <p>Cuidamos de toda a documentação</p>
            </Card>
            <Card>
                <h3>Instalação de Condicionadores de Ar</h3>
                <img src="https://condomeeting.com.br/wp-content/uploads/2019/12/B443F2A277314E2ADC0003F22C3229D64B9A_manutar.jpg" alt="imagem"/>
                <p>Com expertise em instalação e reparo de ar condicionado, fornecemos serviços especializados para assegurar o funcionamento eficiente desses sistemas. Nossas habilidades técnica garante instalações precisas e reparos ágeis, proporcionando ambientes confortáveis e climatizados para residências e espaços comerciais.</p>
            </Card>
            <Card>
                <h3>Instalação elétrica Industrial/Residencial</h3>
                <img src="https://awaltech.com.br/wp-content/uploads/2020/03/Montagem-de-painel-6-1024x768.jpg" alt="eletrica"/>
                <p>Nossa empresa é especializada em realizar instalações elétricas tanto para residências quanto para ambientes industriais. Com uma equipe técnica altamente qualificada, oferecemos serviços precisos e seguros, garantindo soluções eficientes e confiáveis para atender às necessidades elétricas de nossos clientes em diversos contextos</p>
            </Card>
            
        </Container>
    )

    
}


export default Servicos;