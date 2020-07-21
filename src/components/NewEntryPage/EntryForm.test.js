import React from 'react';
import ReactDom from 'react-dom';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';

import EntryForm from './EntryForm';

it('New Entry page renders', () => {
  const div = document.createElement('div');

  ReactDom.render(
      <BrowserRouter>
          <EntryForm/>
      </BrowserRouter>
      ,div);

  ReactDom.unmountComponentAtNode(div);
});