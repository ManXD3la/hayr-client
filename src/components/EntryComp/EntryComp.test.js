import React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';

import EntryComp from './EntryComp';

it('Entry Date comp renders', () => {
    const div = document.createElement('div');

    ReactDom.render(
        <BrowserRouter>
            <EntryComp />
        </BrowserRouter>
        ,div);

    ReactDom.unmountComponentAtNode(div);
});