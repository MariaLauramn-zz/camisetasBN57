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
                    <p>BN57 es una marca especializada en aviación
                      y viajes con base en Barcelona.Los diseños de nuestras colecciones
                      son exclusivos y nuestras camisetas  están hechas con  algodón 100% ecológico
                      de comercio justo hecho en Europa y comercializado en España.
                    </p>
                </div>
                <div>
                    <h3>BN57 - for a non-stop World</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur laborum.

                      .
                    </p>
                </div>

            </section>
               <div className="aboutImage">
                <img src={sampleImage} alt="sampleImage"/>
               </div>

        </Container>
    </div>
