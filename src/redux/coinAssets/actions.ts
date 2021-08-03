import {IGetAssetsAction} from "./interfaces";
import {ICoinAssets} from "../../repositories/models/CoinAssets";

const assetActionPrefix = 'asset/';

export const AssetActions = {
    GET_ASSETS: `${assetActionPrefix}GET_ASSETS`,
    GET_ASSETS_SUCCESS: `${assetActionPrefix}GET_ASSETS_SUCCESS`,
    GET_ASSETS_FAILURE: `${assetActionPrefix}GET_ASSETS_FAILURE`,
}

export const getAssets = (currency: string, order: string, limit: number, page: number, sparkline: boolean):
    IGetAssetsAction => {
    return {
        type: AssetActions.GET_ASSETS,
        payload: {
            currency,
            order,
            limit,
            page,
            sparkline
        }
    }
}

export const getAssetsSuccess = (response: ICoinAssets[]) => {
    return {
        type: AssetActions.GET_ASSETS_SUCCESS,
        payload: response,
    }
}

export const getAssetsFailure = (error: string) => {
    return {
        type: AssetActions.GET_ASSETS_FAILURE,
        payload: error,
    }
}
