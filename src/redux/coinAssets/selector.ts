
const isStateUndefined = (state) => state === undefined || state.coinAssets === undefined;

export const getCoinAssetsListSelector = (state) => {
    if(isStateUndefined(state)) {
        return [];
    }
    return state.coinAssets.assetsList;
}

export const isCoinAssetsLoadingSelector = (state) => {
    if(isStateUndefined(state)) {
        return false;
    }
    return state.coinAssets.isLoading;
}

export const isCoinAssetsErrorSelector = (state) => {
    if(isStateUndefined(state)) {
        return '';
    }
    return state.coinAssets.apiError;
}
