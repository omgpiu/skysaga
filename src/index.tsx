import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/m1-ui/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {store} from './main/m2-bll/store';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>

    </Provider>

    ,
    document.getElementById('root')
);
reportWebVitals();
