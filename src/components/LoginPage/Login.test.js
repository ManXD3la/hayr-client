import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';

import Login from './Login';

it('Login Page renders', () => {
  const div = document.createElement('div');

  ReactDom.render(
      <BrowserRouter>
          <Login/>
      </BrowserRouter>
      ,div);

  ReactDom.unmountComponentAtNode(div);
});
