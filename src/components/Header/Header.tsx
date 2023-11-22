import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import {useState} from "react";
import { Task } from "../../types/Task";
import { tareasService } from "../../services/tareasService";
import { toast } from "react-toastify";
import TaskForm from "../TaskForm/TaskForm";
import logoI from "../../assets/images/logo.png"

const Header = () => {

    const navigate = useNavigate()

    const [showModal, setShowModal]= useState(false);

    const handleShowModal=()=>{
        setShowModal(true);
    };

    const handleCloseModal = () =>{
        setShowModal(false);
    }



    const createTarea = async (newTask: Task) =>{
        try{
            const result = await tareasService.createTarea(newTask);
            console.log('Nueva tarea agregada: ', result.id);
            navigate(`/detalle/${result.id}`); //Ir al detalle de la tarea creada

            toast.success('Tarea creada correctamente',{
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
            });
        }catch(error){
            toast.error("Error al crear una nueva tarea",{
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000,
        });
        console.error('Error al crear la tarea', error);
        }
    }
  
    return (
        <>
        <Navbar expand="lg" className="bg-navbar" >
            <Container className="custom-navbar">
                <Navbar.Brand><img src={logoI} alt="Logo" className="logo-img" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link className="m-2 fw-bolder" onClick={()=>navigate('/')}>Lista</Nav.Link>
                        <Nav.Link className="m-2 fw-bolder" onClick={handleShowModal}>Agregar</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        <TaskForm showModal={showModal} handleClose={handleCloseModal} createTarea={createTarea}/>
    </>
  )
}

export default Header
