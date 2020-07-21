import React from 'react';
import {Route,Switch,Link, BrowserRouter} from 'react-router-dom';
import ReactDom from 'react-dom';
// import { render } from '@testing-library/react';
import NavBar from './NavBar';

it('NavBar comp renders', () => {
    const div = document.createElement('div');

    ReactDom.render(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
        ,div);

    ReactDom.unmountComponentAtNode(div);
});

