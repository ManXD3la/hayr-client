import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';

import NotFound from './NotFound';

it('Error: Page Not Found page renders', () => {
  const div = document.createElement('div');

  ReactDom.render(
      <BrowserRouter>
          <NotFound/>
      </BrowserRouter>
      ,div);

  ReactDom.unmountComponentAtNode(div);
});