import { Carousel } from "react-bootstrap"
import c1 from "../../assets/images/c1.jpg"


const CarouselH = () => {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'cover' }} src={c1} alt="imagen-carrusel1" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'cover' }} src="../../assets/images/c2.jpg" alt="" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" style={{ maxHeight: "500px", objectFit: 'cover' }} src="../../assets/images/c3.jpg" alt="" />
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselH