import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import * as reducers from '../reducer';
import thunk from 'redux-thunk';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(
    combineReducers({
        ...reducers,
    }),
    {},
    compose(
        applyMiddleware(thunk),
        typeof devtools !== 'undefined' ? devtools({ name: 'DemoReact'}) : f => f
    )
);

export default store;
