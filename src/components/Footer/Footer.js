import React from 'react';
import {Link} from 'react-router-dom'

import './Footer.css';

function Footer() {
    return (
        <footer role='footer-developer-info'>
            <p>App designed by</p>
            <Link className='portfolio-link'
                to='https://thinkful-ei-orka.github.io/mandela-portfolio/'
                target='_blank'>
            Mandela Jones
            </Link>
        </footer>
        )
};


export default Footer;