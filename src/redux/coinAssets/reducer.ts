import {AssetActions} from "./actions";

const initialState = {
    assetsList: [],
    isLoading: false,
    apiError: '',
}

export const assetReducer = (state = initialState, action) => {
    switch (action.type) {
        case AssetActions.GET_ASSETS:
            return {
                ...state,
                isLoading: true,
                apiError: '',
            }

        case AssetActions.GET_ASSETS_SUCCESS:
            return {
                ...this.state,
                // TODO handle pagination
                assetsList: action.payload,
                isLoading: false,
            }

        case AssetActions.GET_ASSETS_FAILURE:
            return {
                ...this.state,
                apiError: action.payload,
            }

        default:
            return state
    }
}
