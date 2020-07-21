import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';

import Journal from './Journal';

it('Journal Page renders', () => {
  const div = document.createElement('div');

  ReactDom.render(
      <BrowserRouter>
          <Journal/>
      </BrowserRouter>
      ,div);

  ReactDom.unmountComponentAtNode(div);
});