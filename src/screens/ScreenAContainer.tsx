import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { getAssets } from '../redux/coinAssets/actions';
import {
    getCoinAssetsListSelector,
    isCoinAssetsErrorSelector,
    isCoinAssetsLoadingSelector
} from "../redux/coinAssets/selector";
import {SafeAreaView, StatusBar, Text} from "react-native";
import {IAppState} from "../redux/reduxStateInterface";

interface IProps {
    getCoinAssets: (currency: string, order: string, limit: number, page: number, sparkline: boolean)
                    => void;
}
function ScreenAContainer(props: IProps) {

    useEffect(() => {
        props.getCoinAssets('inr', 'market_cap_desc', 10, 1, false);
    }, [])
    return (
        <SafeAreaView>
            <Text>Test</Text>
        </SafeAreaView>
    )
}


export const mapDispatchToProps = (dispatch: any) => {
    return {
        getCoinAssets: (currency: string, order: string, limit: number, page: number, sparkline: boolean) =>
            dispatch(getAssets(currency, order, limit, page, sparkline)),
    };
};

export const mapStateToProps = (state: IAppState) => {
    return {
        coinAssetsList: getCoinAssetsListSelector(state),
        isLoading: isCoinAssetsLoadingSelector(state),
        apiError: isCoinAssetsErrorSelector(state),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenAContainer);
