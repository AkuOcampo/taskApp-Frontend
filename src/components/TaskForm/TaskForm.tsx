 import * as Yup from "yup";
 import {useFormik} from "formik";
import { Task } from "../../types/Task";
import { Modal, Button, Form } from "react-bootstrap";
import { toast } from 'react-toastify';

type taskFormProps={
    showModal: boolean;
    handleClose:() =>void;
    createTarea: (newTask:Task) => void;
}
const TaskForm: React.FC<taskFormProps> = ({showModal,handleClose,createTarea}) => {

    //Objeto Yup
    const validationSchema = Yup.object().shape({
            titulo: Yup.string().required('El titulo es requerido'),
            imagen: Yup.string().required('La URL de la imagen es requerida'),
            descripcion: Yup.string().required('La descripcion es requerida'),
            tiempo: Yup.number().integer('Deber ser un número').min(1,'El tiempo debe ser de al menos 1 min').required('El tiempo es requerido'),
            responsable: Yup.string().required('El responsable es requerido'),
            estado: Yup.string().required('El estado es requerido'),
    });


    //Valores iniciales de nuestro formulario
    const task:Task = {
        titulo: '',
        descripcion: '',
        tiempo: 0,
        imagen: '',
        responsable: '',
        estado: 'PORHACER'
    }

    //Función onSubmit que se va a ejecutar cuando enviemos nuestro formulario
    const onSubmit = async (values: Task)=>{
        values.estado.toUpperCase;
        console.log('Datos en el formulario', JSON.stringify(values));
        await createTarea(values)
        toast.success('Estado de la tarea actualizado de forma correcta', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
        });
        handleClose();
        
    }

    //Objeto Formik 
    const formik = useFormik({
        validationSchema,       //1
        onSubmit,               //2
        initialValues: task     //3
    });


    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header>
                <Modal.Title>Agregue una tarea</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={formik.handleSubmit}>

                    {/*------------------ titulo------------------- */}

                    <div className="mb-3 mt-1">
                        <label htmlFor="titulo" className="form-label">Título </label>
                        <input 
                        type="text"
                        className="form-control"
                        id="titulo"
                        name="titulo"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.titulo} />

                        {formik.touched.titulo && formik.errors.titulo 
                            ? ( <div className="text-danger">{formik.errors.titulo}</div>)
                            : null
                        }
                    </div>
                    {/*------------------ descripcion------------------- */}

                    <div className="mb-3 mt-1">
                        <label htmlFor="descripcion" className="form-label">Descripción </label>
                        <textarea 
                        className="form-control"
                        id="descripcion"
                        name="descripcion"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.descripcion} 
                        rows={3}
                        cols={50}>
                        </textarea>

                        {formik.touched.descripcion && formik.errors.descripcion 
                            ? ( <div className="text-danger">{formik.errors.descripcion}</div>)
                            : null
                        }
                    </div>
                    {/*------------------ tiempo------------------- */}

                    <div className="mb-3 mt-1">
                        <label htmlFor="tiempo" className="form-label">Tiempo </label>
                        <input 
                        placeholder="Ej: 30 días"
                        type="number"
                        className="form-control"
                        id="tiempo"
                        name="tiempo"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tiempo}
                        />

                        {formik.touched.tiempo && formik.errors.tiempo 
                            ? ( <div className="text-danger">{formik.errors.tiempo}</div>)
                            : null
                        }
                    </div>
                    {/*------------------ imagen------------------- */}

                    <div className="mb-3 mt-1">
                        <label htmlFor="imagen" className="form-label">Imagen </label>
                        <input 
                        type="text"
                        className="form-control"
                        id="imagen"
                        name="imagen"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.imagen} />

                        {formik.touched.imagen && formik.errors.imagen 
                            ? ( <div className="text-danger">{formik.errors.imagen}</div>)
                            : null
                        }
                    </div>
                    {/*------------------ responsable------------------- */}

                    <div className="mb-3 mt-1">
                        <label htmlFor="responsable" className="form-label">Responsable: </label>
                        <input 
                        type="text"
                        className="form-control"
                        id="responsable"
                        name="responsable"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.responsable} />

                        {formik.touched.responsable && formik.errors.responsable 
                            ? ( <div className="text-danger">{formik.errors.responsable}</div>)
                            : null
                        }
                    </div>
                    {/*------------------ estado------------------- */}

                    <div className="mb-3 mt-1">
                        <label htmlFor="estado" className="form-label">Estado </label>
                        <Form.Select
                            id="estado"
                            name="estado"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.estado}
                        >
                        <option value={''}>Seleccione un estado</option>
                        <option value={'PORHACER'}>Por hacer</option>
                        <option value={'ENPRODUCCION'}>En producción</option>
                        <option value={'PORTESTEAR'}>Por testear</option>
                        <option value={'COMPLETADA'}>Completada</option>
                        </Form.Select>


                        {formik.touched.estado && formik.errors.estado 
                            ? ( <div className="text-danger">{formik.errors.estado}</div>)
                            : null
                        }
                    </div>

                    <div className="text-end">
                        <Button className="px-5" variant="primary" type="submit">Enviar</Button>
                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    )
}
export default TaskForm
