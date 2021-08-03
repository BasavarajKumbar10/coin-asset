import { combineReducers } from 'redux';
import { assetReducer } from './coinAssets/reducer'
import {IAppState} from "./reduxStateInterface";

const appReducer = combineReducers({
    coinAssets: assetReducer,
});

export default (state: IAppState, action: any) => {
    return appReducer(state, action);
};
