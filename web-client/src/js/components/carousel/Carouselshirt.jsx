import * as React from "react";
import './carousel.scss';
import Carousel from "react-bootstrap/Carousel"
import Avion1 from "../assets/avion1.jpg";
import Turbina from "../assets/turbina.jpg";
import Avion2 from "../assets/avion2.jpg"


export const Carouselshirt = () => (
    <div className="carouselContainer">
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carouselimg"
                    src={Avion1}
                    alt="Slide Avion1"
                />
                <Carousel.Caption>
                    <h3>BN57 - for a non-stop World</h3>
                    <p>Lleva puesta cualquiera de nuestras camisetas y deja que tu mente vuele hasta donde quiera llegar
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Turbina}
                    alt="turbina"
                />

                <Carousel.Caption>
                    <h3>BN57 - for a non-stop World</h3>
                    <p>
                        Wear our t-shirts and let your mind fly wherever it wants to go
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Avion2}
                    alt="Slide avion2"
                />

                <Carousel.Caption>
                    <h3>BN57 - for a non-stop World</h3>
                    <p>
                        Lleva puesta cualquiera de nuestras camisetas y deja que tu mente vuele hasta donde quiera
                        llegar
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
)
