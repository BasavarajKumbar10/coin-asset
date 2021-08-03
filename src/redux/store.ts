import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers.ts'
import appSaga from './sagas.ts'

export const configureStore = () => {
    // Redux configurations
    const middleware = [];
    const enhancers = [];

    // Saga Middleware
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    // Assemble Middleware
    enhancers.push(applyMiddleware(...middleware));

    const composeEnhancers = (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const store = createStore(appReducer, composeEnhancers(...enhancers));
    sagaMiddleware.run(appSaga)

    return store;
};
