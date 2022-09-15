import React from 'react';
import ReactDOM from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducer, { initialState } from './store/reducer.tsx';
import App from './App.tsx';
import './index.scss';

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(thunk, logger)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
