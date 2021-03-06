import * as React from "react";
import {Container} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Avion1 from "../assets/avion1.png";
import Turbina from "../assets/turbina.png";
import Avion2 from "../assets/avion2.png";
import postalinsta from "../assets/postalinsta.png";
import "./home.scss";

export const Home = () => (
<Container>
    <div>
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
                        className="d-block w-100 carouselimg"
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
                        className="d-block w-100 carouselimg"
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
        <Container>
            <img className="postal" src={postalinsta} alt="Postal instagram"/>
        </Container>
    </div>
</Container>
)
