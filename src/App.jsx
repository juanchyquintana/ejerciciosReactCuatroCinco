import { Container} from "react-bootstrap";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Simpsons from "./components/Simpsons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <>
      <Container className="my-5 mainPage" id="main">
        <h1 className="text-center text-uppercase text-white">
          Lista de Tareas
        </h1>

        <Formulario />
      </Container>

      <Container className="text-center my-5">
        <Simpsons />
      </Container>

      <Footer />
    </>
  );
}

export default App;
