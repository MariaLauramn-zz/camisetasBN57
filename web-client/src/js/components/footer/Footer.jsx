import * as React from "react";
import './footer.scss';
import Link from '@material-ui/core/Link';
import {Instagram, MailOutline} from '@material-ui/icons';
import {Container} from "react-bootstrap";


export const Footer = () => (
    <footer className="fixed-bottom">
        <Container>
        <div className="d-flex justify-content-between">
            <div className="copy">
                <p>&copy;CamisetasBN57</p>
                <Link href="/soporteAlCliente" className="text-lighter">Soporte al cliente</Link>
            </div>

            <div className="contact-media">
                <p>Contáctanos</p>
                <div className="contact-link d-flex align-items-baseline">
                <Link className="social-link" href="https://www.instagram.com/bn57.store/" target="_blank"><Instagram/></Link>
                <Link className="social-link" href="mailto:elcorreoquequieres@correo.com"><MailOutline/></Link>
                <p><span className="text-lighter">(34)</span> 666 00 28 80</p>
            </div>
            </div>
        </div>
        </Container>
    </footer>

)