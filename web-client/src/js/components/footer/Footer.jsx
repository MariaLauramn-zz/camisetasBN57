import * as React from "react";
import './footer.scss';
import Link from '@material-ui/core/Link';
import {Instagram, MailOutline} from '@material-ui/icons';

export const Footer = () => (
    <footer className="fixed-bottom">
        <div className="d-flex justify-content-around">
            <p>Soporte al cliente</p>
            <div className="social-media">
                <Link href="https://www.instagram.com/bn57.store/
" target="_blank"><Instagram/></Link>
                <Link href="mailto:elcorreoquequieres@correo.com"><MailOutline/></Link>
            </div>
        </div>
    </footer>

)