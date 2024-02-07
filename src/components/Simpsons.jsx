import { Button } from "react-bootstrap";
import Spinner from "./Spinner";
import Frase from "./Frase";
import { useEffect, useState } from "react";

const Simpsons = () => {
  const [personaje, setPersonaje] = useState({});
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setCargando(true);
    try {
      const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      setPersonaje(data[0]);
    } catch (error) {
      console.log(error);
    }
    setCargando(false);
  };

  return (
    <>
      {cargando ? <Spinner /> : <Frase personaje={personaje} />}

      <Button
        type="submit"
        className="btn btn-warning text-white text-uppercase fw-bold w-50"
        onClick={consultarAPI}
      >
        Obtener Frase
      </Button>
    </>
  );
};

export default Simpsons;
