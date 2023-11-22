import { useEffect, useState } from 'react'
import { Task } from '../../types/Task';
import CategoriaSelector from './../CategoriasSelector/CategoriasSelector';
import CategoriasTareas from './../CategoriasTareas/CategoriasTareas';
import { tareasService } from '../../services/tareasService';


const Categoria = () => {
    const[tasks, setTasks] = useState<Task[]>([]);
    const [selectedCategory,setSelectedCategory] = useState<string>(''); //estado para la categoria seleccionada
    const [tareasFiltradas,setTareasFiltradas]=useState<Task[]>([]);

    useEffect(()=>{
        const fetchTasks = async() =>{
            const tasksData = await tareasService.getTareas();
            setTasks(tasksData);
        }
        fetchTasks();
    },[]);

    //Filtra las tareas por categoria seleccionada

    useEffect(()=>{
      if(selectedCategory){
        const filtro = tasks.filter(task => task.estado.toUpperCase() === selectedCategory.toUpperCase())
        setTareasFiltradas(filtro);
      }else{
        setTareasFiltradas(tasks);
      }
    },[selectedCategory,tasks]);
    

  return (
    <div className='container mt-5'>
        <CategoriaSelector onSelectedCategory={setSelectedCategory}/> {/* Pasa la función para la selección de categoría */}
        <CategoriasTareas tasks={tareasFiltradas.length > 0 ? tareasFiltradas : tasks}/>{/* Pasa las tareas filtradas al componente CategoiaTareas */}
    </div>
  )
}

export default Categoria
