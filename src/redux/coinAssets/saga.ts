import {call, put, takeEvery} from 'redux-saga/effects';

import {AssetActions, getAssetsSuccess} from "./actions";
import {getAssetsLists} from "../../repositories/AssetsRepo";
import {IGetAssetsAction} from "./interfaces";

export function* getCoinAssetsData(action: IGetAssetsAction) {
    try {
        const {currency, order, limit, page, sparkline} = action.payload;
        const response = yield call(getAssetsLists, currency, order, limit, page, sparkline)
        yield put(getAssetsSuccess(response));
    } catch (e) {
        yield put(getAssetsSuccess(e.message));
    }
}

export function* watchCoinAssets() {
    yield takeEvery(AssetActions.GET_ASSETS, getCoinAssetsData);
}
