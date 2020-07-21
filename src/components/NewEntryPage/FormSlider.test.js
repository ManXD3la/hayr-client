import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import FormSlider from './FormSlider';

it('Slider comp renders', () => {
  const div = document.createElement('div');

  ReactDom.render(
      <BrowserRouter>
          <FormSlider />
      </BrowserRouter>
      ,div);

  ReactDom.unmountComponentAtNode(div);
});