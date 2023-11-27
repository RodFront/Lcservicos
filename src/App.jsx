import Header from "./components/Header";
import Global from "./styles/Global";
import Banner from "./components/Banner";
import Servicos from "./components/Servicos";
import Sections from "./components/Sections";
import Empresa from "./components/Empresa";
function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Sections title="Serviços"/>
      <Servicos />
      <Empresa/>
      <Global />
    </div>
  );
}

export default App;
