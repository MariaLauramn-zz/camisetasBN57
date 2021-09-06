import * as React from 'react';
import {ShirtCard} from "../shirtCard/ShirtCard";

export const Shirt = (props) => (
    <section className={"shirtSection"}>

        { props.shirts.map( shirt =>
            <ShirtCard shirt={shirt} />

        ) }

    </section>

);
