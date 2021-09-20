import * as React from 'react';
import "./about.scss";
import {Container} from "react-bootstrap";

export const About = () =>

    <div className="principal">

        <Container>

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
                        Creemos que nos ayuda a crear el mejor producto el hecho de incorporar a nuestros usuarios en
                        los
                        procesos de diseño.
                        La experimentación, la innovación y el futuro en cada uno de nuestros productos.
                    </p>
                </div>

            </section>
        </Container>
    </div>
