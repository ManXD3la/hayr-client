import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';

import ReadEntry from './ReadEntry';

it('Read Entry Page renders', () => {
    const div = document.createElement('div');

    ReactDom.render(
        <BrowserRouter>
            <ReadEntry />
        </BrowserRouter>
        ,div);

    ReactDom.unmountComponentAtNode(div);
});