import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { tareasService } from './../../services/tareasService';
import { Task } from "../../types/Task";
import { toast } from 'react-toastify';
import TaskItem from "../TaskItem/TaskItem";
import colorCategoria from '../../utils/Color/Color';

const Detalle = () => {

    const { taskId } = useParams<{ taskId?: string }>();
    const [tarea, setTarea] = useState<Task | null>(null);

    const [estado, setEstado] = useState<string>('');
    const [tareasCategoria, setTareasCategoria] = useState<Task[]>([]);

    const navigate = useNavigate();

    // TRAER LA TAREA
    useEffect(() => {
        const tareaElegida = async () => {
            try {
                if (taskId && !isNaN(parseInt(taskId, 10))) {

                    const dataTarea = await tareasService.getTarea(parseInt(taskId, 10));
                    setTarea(dataTarea);
                    console.log(dataTarea);

                    const estadoTareaSeleccionada = dataTarea.estado;

                    const tareasdeCategoria = await tareasService.getTareasCategoria(estadoTareaSeleccionada);
                    setTareasCategoria(tareasdeCategoria);

                    console.log(tareasdeCategoria);
                } else {
                    console.error('Identificador de tarea no válido');
                }
            } catch (error) {
                console.error('Error al cargar la tarea', error);
            }
        };
        tareaElegida();
    }, [taskId, tarea?.estado]);

    // CAMBIAR ESTADO DE LA TAREA

    const cambiarEstado = async () => {
        if (estado !== '') {
            try {
                const tareaCambiada = await tareasService.updateTareaEstado(parseInt(taskId!, 10), estado);
                setTarea(tareaCambiada);
                toast.success('Estado de la tarea actualizado de forma correcta', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
            } catch (error) {
                toast.error('Error al actualizar el estado de la tarea', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
                console.error('Error al actualizar el estado de la tarea', error);
            }
        } else {
            toast.error('Selecciona un estado válido', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,

            });
            console.error('Selecciona un estado válido');
        }
    };

    // ELIMINAR UNA TAREA
    const eliminarTarea = async () => {
        try {
            if (taskId) {
                await tareasService.deleteTasks(parseInt(taskId, 10));
                toast.success('Tarea eliminada correctamente', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                });
                console.log('Tarea eliminada con éxito')
                navigate('/');
            }
        } catch (error) {
            toast.error('No se pudo eliminar la tarea', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
            console.error('Error al eliminar la tarea', error);
        }
    };


    return (
        <div className="container mt-5">
            {tarea && (
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={tarea.imagen} alt={tarea.titulo} className="card-img-top mb-5" />
                    </div>

                    <div className="col-12 col-md-6">
                        <h1 className="display-5 fw-bolder"> Titulo: {tarea.titulo}</h1>
                        <h3 >Detalles de la tarea con ID: {tarea.id}</h3>
                        <h5 className={`${colorCategoria(tarea.estado)}`}>Estado actual: {tarea.estado}</h5>
                        <p className="fw-bolder">Tiempo: <span>{tarea.tiempo}</span></p>
                        <p className="fw-bolder">Responsable: <span>{tarea.responsable}</span></p>
                        <p className="fw-bolder">Descripción: <span>{tarea.descripcion}</span></p>

                        <select className="form-select mb-3" onChange={(e) => setEstado(e.target.value)} value={estado}>
                            <option value=""> Seleccionar estado </option>
                            <option value="PORHACER"> Por hacer </option>
                            <option value="ENPRODUCCION"> En producción </option>
                            <option value="PORTESTEAR"> Por testear </option>
                            <option value="COMPLETADA"> Completada </option>
                        </select>

                        <button className="btn btn-danger" onClick={eliminarTarea}> Eliminar tarea </button>
                        <button className="btn btn-primary ms-2" onClick={cambiarEstado}> Actualizar estado </button>
                    </div>

                    <div className={`text-center mt-5 ${colorCategoria(tarea.estado)}`}>
                        <h3 className="pt-3 pb-3 ">{tarea.estado}</h3> 
                    </div>
                </div>

                
            )}
            
            <div className="row mt-5 row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-3">
        
                {tareasCategoria.map((tareaCategoria) => (
                   
                <TaskItem key={tareaCategoria.id} task={tareaCategoria}/>
                ))}
            </div>

        </div>

    )
}

export default Detalle
