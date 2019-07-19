import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers';

var middleware = null;

if (process.env.NODE_ENV == 'production') {
    middleware = applyMiddleware(thunk);
}
else{
    middleware = applyMiddleware(thunk, createLogger());
}

export default createStore(
    rootReducer,
    middleware
);