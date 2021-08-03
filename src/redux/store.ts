import {
    applyMiddleware,
    compose,
    createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers.js'
import appSaga from './sagas.js'

export const configureStore = () => {
    // Redux configurations
    const middleware = [];
    const enhancers = [];

    // Saga Middleware
    const sagaMiddleware = createSagaMiddleware();
    middleware.push(sagaMiddleware);

    // Assemble Middleware
    enhancers.push(applyMiddleware(...middleware));
    const store = createStore(
        appReducer,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(appSaga)

    return store;
};
