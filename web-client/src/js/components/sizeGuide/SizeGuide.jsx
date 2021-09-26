import * as React from 'react';
import {Container} from "react-bootstrap";
import guiadetallas from "../assets/guiadetallas.png";

export const SizeGuide = () => (
    <div className="principal">
        <Container>
          <div className="guiadetallas">
            <img src={guiadetallas} alt="guia de tallas"/>
          </div>
        </Container>
    </div>
)
