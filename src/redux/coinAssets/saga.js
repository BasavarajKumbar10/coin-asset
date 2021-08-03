import { call, put, takeEvery, } from 'redux-saga/effects';

import {AssetActions} from "./actions";

export function* getCoinAssetsData(action) {

}

export function* watchCoinAssets(): any {
    yield takeEvery(AssetActions.GET_ASSETS, getCoinAssetsData);
}
