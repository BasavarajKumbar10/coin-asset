import { combineReducers } from 'redux';
import { assetReducer } from './coinAssets/reducer'

const appReducer = combineReducers({
    coinAssets: assetReducer,
});

export default (state: any, action: any) => {
    return appReducer(state, action);
};
