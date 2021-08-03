const assetActionPrefix = 'asset/';

export const AssetActions = {
    GET_ASSETS: `${assetActionPrefix}GET_ASSETS`,
    GET_ASSETS_SUCCESS: `${assetActionPrefix}GET_ASSETS_SUCCESS`,
    GET_ASSETS_FAILURE: `${assetActionPrefix}GET_ASSETS_FAILURE`,
}

export const getAssets = (currency,
                   order,
                   limit,
                   page,
                   sparkline) => {
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

export const getAssetsSuccess = (response) => {
    return {
        type: AssetActions.GET_ASSETS_SUCCESS,
        payload: response,
    }
}

export const getAssetsFailure = (response) => {
    return {
        type: AssetActions.GET_ASSETS_FAILURE,
        payload: response,
    }
}
