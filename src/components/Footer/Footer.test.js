import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';

import Footer from './Footer';

it('Footer comp renders', () => {
    const div = document.createElement('div');

    ReactDom.render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
        ,div);

    ReactDom.unmountComponentAtNode(div);
});