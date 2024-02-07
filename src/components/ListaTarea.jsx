import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTarea = ({ tareas, eliminarTarea }) => {
  return (
    <>
      <ListGroup>
        {tareas.map((tarea, posicionTarea) => (
          <ItemTarea
            key={posicionTarea}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </ListGroup>
    </>
  );
};

export default ListaTarea;
