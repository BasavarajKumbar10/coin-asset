import { combineReducers } from 'redux';
import { assetReducer } from './coinAssets/reducer'

const appReducer = combineReducers({
    coinAssets: assetReducer,
});

export default (state, action) => {
    return appReducer(state, action);
};
