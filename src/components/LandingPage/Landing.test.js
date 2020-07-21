import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';

import Landing from './Landing';

it('Landing page renders', () => {
    const div = document.createElement('div');

    ReactDom.render(
        <BrowserRouter>
            <Landing/>
        </BrowserRouter>
    ,div);

    ReactDom.unmountComponentAtNode(div);
});
