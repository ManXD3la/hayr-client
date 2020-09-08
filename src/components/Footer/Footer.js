import React from 'react';
import {Link} from 'react-router-dom'

import './Footer.css';

function Footer() {
    return (
        <footer role='footer-developer-info'>
            <p>App designed by</p>
            <a className='portfolio-link'
                href='https://thinkful-ei-orka.github.io/mandela-portfolio/'
                target='_blank'>
            Mandela Jones
            </a>
        </footer>
        )
};


export default Footer;