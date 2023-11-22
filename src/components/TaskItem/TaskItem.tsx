import '../TaskItem/TaskItem.css'
import { Task } from './../../types/Task';
import { Link } from "react-router-dom";

interface TaskItemProps{
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {

  const colorCategoria = (estado: string) => {
    switch (estado) {
      case 'PORHACER':
        return 'ph';
      case 'ENPRODUCCION':
        return 'ep';
      case 'PORTESTEAR':
        return 'pt';
      case 'COMPLETADA':
        return 'c';
      default:
        return '';
    }
  };
  


  return (
    // --------------------------TARJETA DE LA TAREA-------------------------
    // id
    <div className="col" key={task.id}>
      <div className="card h-100 border border-3 border-black custom-shadow card-task">

        {/* imagen */}
        <img style={{ minHeight: '250px', maxHeight: '300px', }} className='card-imp-top p-3 img-tarea' src={task.imagen} alt={task.titulo} />

        <div className="card-body p-4">
          <div>
            {/* body de la tarjeta */}
            <h5 className="fw-bolder">{task.titulo}</h5>
            <h6 className='fw-bolder'>Responsable: <span> {`${ task.responsable }`} </span></h6>           
            <h6 className='fw-bolder'>Tiempo: <span>{`${task.tiempo}`}</span></h6>
           

          </div>
        </div>

        {/* boton para ir al detalle de esa tarjeta */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center d-flex gap-1 align-items-center justify-content-center">
            <Link to={`/detalle/${task.id}`} className={`btn mt-auto ${colorCategoria(task.estado)}`}>Ver más</Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TaskItem
