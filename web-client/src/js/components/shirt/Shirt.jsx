import * as React from 'react';
import {ShirtCard} from "../shirtCard/ShirtCard";
import {Container} from "react-bootstrap";

export const Shirt = (props) => (
    <Container>
    <section className={"shirtSection"}>

        { props.shirts.map( shirt =>
            <ShirtCard shirt={shirt} />

        ) }

    </section>
    </Container>
);
