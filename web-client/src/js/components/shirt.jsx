import * as React from 'react';
import {ShirtCard} from "./shirtCard";

export const Shirt = (props) => (
    <section className={"shirtSection"}>

        { props.shirts.map( shirt =>
            <ShirtCard shirt={shirt} />

        ) }

    </section>

);