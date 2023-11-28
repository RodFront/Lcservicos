import Header from "./components/Header";
import Global from "./styles/Global";
import Banner from "./components/Banner";
import Servicos from "./components/Servicos";
import Sections from "./components/Sections";
import Empresa from "./components/Empresa";
import Clientes from "./components/Clientes";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Sections title="Serviços"/>
      <Servicos />
      <Empresa/>
      <Sections title="Nossos Clientes"/>
      <Clientes />
      <Global />
    </div>
  );
}

export default App;
