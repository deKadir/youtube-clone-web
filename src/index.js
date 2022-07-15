import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import configureStore from './redux/store/ConfigureStore';
import { Provider } from 'react-redux';

export const store = configureStore();
export const state = store.getState();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
