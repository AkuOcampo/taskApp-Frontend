import { Task } from "../../types/Task";
import TaskItem from "../TaskItem/TaskItem";
import colorCategoria from "../../utils/Color/Color";


const CategoriasTareas = ({tasks}: {tasks:Task[]}) => {

    const categorias = ['PORHACER','ENPRODUCCION','PORTESTEAR','COMPLETADA'];

  return (
        <section className="container-fluid mt-5" id="categorias">
            {categorias.map((categoria,index)=>(
                <section className="mb-5" key={index}> 
                    <h3 className={`pt-4 pb-4 mb-5 text-center ${colorCategoria(categoria)}`}>{categoria}</h3>                   
                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">                
                        {tasks.filter(tasks=>tasks.estado === categoria.toUpperCase()) //filtrar tarea por categoria
                        .map(task=>(                          
                     
                            <TaskItem key={task.id} task={task} />

                        ))}
                    </div>
                </section>
            ))}
        </section>
    )
}

export default CategoriasTareas
