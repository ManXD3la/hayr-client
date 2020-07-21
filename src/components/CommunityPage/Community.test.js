import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';

import  Community from './Community';

it('Community entries renders', () => {
    const div = document.createElement('div');

    ReactDom.render(
        <BrowserRouter>
            <Community />
        </BrowserRouter>
        ,div);

    ReactDom.unmountComponentAtNode(div);
});