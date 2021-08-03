import {IAppState} from "../reduxStateInterface";
import {ICoinAssets} from "../../repositories/models/CoinAssets";

const isStateUndefined = (state: IAppState) => state === undefined || state.coinAssets === undefined;

export const getCoinAssetsListSelector = (state: IAppState): ICoinAssets[] => {
    if(isStateUndefined(state)) {
        return [];
    }
    return state.coinAssets.assetsList;
}

export const isCoinAssetsLoadingSelector = (state: IAppState): boolean => {
    if(isStateUndefined(state)) {
        return false;
    }
    return state.coinAssets.isLoading;
}

export const isCoinAssetsErrorSelector = (state: IAppState): string => {
    if(isStateUndefined(state)) {
        return '';
    }
    return state.coinAssets.apiError;
}
