import {AssetActions} from "./actions";
import {ICoinAssets} from "../../repositories/models/CoinAssets";

export interface IAssetsState {
    assetsList: ICoinAssets[];
    isLoading: boolean;
    apiError: string;
    filters: string[];
}

const initialState: IAssetsState = {
    assetsList: [],
    isLoading: false,
    apiError: '',
    filters: [],
}

export const assetReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AssetActions.GET_ASSETS:
            return {
                ...state,
                isLoading: true,
                apiError: '',
            };

        case AssetActions.GET_ASSETS_SUCCESS:
            return {
                ...state,
                // TODO handle pagination
                assetsList: action.payload,
                isLoading: false,
            };

        case AssetActions.GET_ASSETS_FAILURE:
            return {
                ...state,
                apiError: action.payload,
            };

        case AssetActions.UPDATE_FILTER:
            return {
                ...state,
                filters: action.payload,
            };

        default:
            return state
    }
}
