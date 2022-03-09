import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './app/store.js';
import 'antd/dist/antd.css';
import './index.css'

/**
 * BrowserRouter enables routing for components
 * Provider allows us to include the store created that will supply the application with the database data.
 */
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    ,document.getElementById('root')
);