import  Nav  from 'react-bootstrap/Nav';
import colorCategoria from '../../utils/Color/Color';

interface CategoriaSelectorProps {
    onSelectedCategory: (categoria: string) => void;
}

const CategoriaSelector: React.FC<CategoriaSelectorProps> = ({ onSelectedCategory }) => {

    const categorias = [
        { nombre: 'PORHACER' },
        { nombre: 'ENPRODUCCION' },
        { nombre: 'PORTESTEAR' },
        { nombre: 'COMPLETADA' },
    ];

    return (

        <Nav justify variant="tabs" >
            {categorias.map((categoria, index) => (
            <Nav.Item  key={index} className='' >
                <Nav.Link onClick={()=>onSelectedCategory(categoria.nombre)}
                className={`pt-3 pb-3 nav-link ${colorCategoria(categoria.nombre)}`}
                >{categoria.nombre}</Nav.Link>
            </Nav.Item>
            ))}
        </Nav>
    )
}

export default CategoriaSelector
// defaultActiveKey="/home"