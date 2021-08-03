import {AssetActions} from "./actions";

const initialState = {
    assetsList: [],
    isLoading: false,
    apiError: '',
}

export const assetReducer = (state = initialState, action) => {
    switch (action.type) {
        case AssetActions.GET_ASSETS:

        case AssetActions.GET_ASSETS:
            return state

        default:
            return state
    }
}
