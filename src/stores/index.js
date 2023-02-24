import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

const middleware = [logger];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(rootReducer, enhancer);

export default store;
