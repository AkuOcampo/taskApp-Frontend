import { Carousel } from "react-bootstrap"
import c1 from "../../assets/images/c1.jpg"
import c2 from "../../assets/images/c2.jpg"
import c3 from "../../assets/images/c3.jpg"


const CarouselH = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'cover' }} src={c1} alt="imagen1-carrusel" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'cover' }} src={c2} alt="imagens2-carrusel" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'cover' }} src={c3} alt="imagen3-carrusel" />
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselH