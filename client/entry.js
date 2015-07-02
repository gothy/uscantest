'use strict';

import './styles/normalize.scss';
import './styles/main.scss';

import React from 'react/addons';
import { createDispatcher, createRedux, composeStores } from 'redux';
import { loggerMiddleware } from 'src/middleware';
import { Provider } from 'redux/react';

import * as stores from 'src/stores';
import IndexComponent from 'src/components/IndexComponent.js';

const dispatcher = createDispatcher(
  composeStores(stores),
  getState => [ loggerMiddleware ]
);
const redux = createRedux(dispatcher);

React.render(
  <Provider redux={redux}>
    {() =>
      <IndexComponent />
    }
  </Provider>
, document.getElementById('app'));
