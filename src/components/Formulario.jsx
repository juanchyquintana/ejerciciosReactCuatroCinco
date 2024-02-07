import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Error from "./Error";
import ListaTarea from "./listaTarea";

const Formulario = () => {
  const tareasLocalStorage = JSON.parse(localStorage.getItem('tareasKey')) || []
  const [tareas, setTareas] = useState(tareasLocalStorage);
  const [nombreTareas, setNombreTareas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.setItem('tareasKey', JSON.stringify(tareas))
  }, [tareas])

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombreTareas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    setTareas([...tareas, nombreTareas]);

    setNombreTareas("");
  };

  const eliminarTarea = (nombreTarea) => {
    const tareaActualizada = tareas.filter((tarea) => tarea !== nombreTarea);
    setTareas(tareaActualizada);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {error && <Error>¡Introduce una tarea, por favor!</Error>}

        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Ej: cocinar, estudiar, programar, etc."
            minLength={3}
            maxLength={50}
            value={nombreTareas}
            onChange={(e) => setNombreTareas(e.target.value)}
          />
          <Button variant="success" type="submit" className="ms-2">
            Agregar
          </Button>
        </Form.Group>
      </Form>

      <ListaTarea 
        tareas={tareas}
        eliminarTarea={eliminarTarea}
      />
    </>
  );
};

export default Formulario;
