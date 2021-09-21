import * as React from 'react';
import "./about.scss";
import {Container} from "react-bootstrap";
import bgImage from "../assets/nosotros2.png";
import sampleImage from "../assets/nosotros3.png";

export const About = () =>

    <div className="principal">

        <Container>
          {/* <div className="img-container" style={{backgroundImage: `url(${bgImage})`}}>
            </div>*/}

            <section className="aboutSection">
                <div>
                    <h3>HISTORIA BN57</h3>
                    <p>Empezamos con la idea de que todos tienen la possibilidad de poder volar sentirse libre, con
                        nuestras camisetas te daremos esta sensación de sentirse en las alturas. Con diseños de aviones
                        divertidos y 100% organico.
                    </p>
                </div>
                <div>
                    <h3>NUESTROS VALORES</h3>
                    <p>El equilibrio entre la funcionalidad y la estética.
                        La simplicidad y la elegancia el minimalismo, porque creemos que menos es más.
                        Creemos que nos ayuda a crear el mejor producto el hecho de incorporar a nuestros usuarios en los procesos de diseño.
                        La experimentación, la innovación y el futuro en cada uno de nuestros productos.
                    </p>
                </div>

            </section>
               <div className="aboutImage">
                <img src={sampleImage} alt="sampleImage"/>
               </div>

        </Container>
    </div>
