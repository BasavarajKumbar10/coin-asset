const assetActionPrefix = 'asset/';

export const AssetActions = {
    GET_ASSETS: `${assetActionPrefix}/GET_ASSETS`,
    GET_ASSETS_SUCCESS: `${assetActionPrefix}/GET_ASSETS_SUCCESS`,
    GET_ASSETS_FAILURE: `${assetActionPrefix}/GET_ASSETS_FAILURE`,
}

const getAssets = (currency,
                   order,
                   limit,
                   page,
                   sparkline) => {
    return {
        type: actions.GET_ASSETS,
        payload: {
            currency,
            order,
            limit,
            page,
            sparkline
        }
    }
}

const getAssetsSuccess = (response) => {
    return {
        type: actions.GET_ASSETS_SUCCESS,
        payload: response,
    }
}

const getAssetsFailure = (response) => {
    return {
        type: actions.GET_ASSETS_FAILURE,
        payload: response,
    }
}
