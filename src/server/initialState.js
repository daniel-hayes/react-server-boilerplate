import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../views/components/App';
import reducer from '../reducers';
import template from './template';

const initialState = (req, res) => {
  // Create a new Redux store instance
  const store = createStore(reducer, {
    app: {
      path: req.path
    }
  });

  // Render the component to a string
  const body = renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  // Grab the initial state from our Redux store
  const state = store.getState();

  res.send(template({
    title: 'Title',
    body,
    state
  }));
};

export default initialState;
