import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={Home}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
