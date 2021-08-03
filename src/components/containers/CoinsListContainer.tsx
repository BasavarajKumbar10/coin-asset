import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { getAssets } from '../../redux/coinAssets/actions';
import {
    getCoinAssetsListSelector,
    isCoinAssetsErrorSelector,
    isCoinAssetsLoadingSelector
} from "../../redux/coinAssets/selector";
import {ActivityIndicator, FlatList, SafeAreaView, StatusBar, Text} from "react-native";
import {IAppState} from "../../redux/reduxStateInterface";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { ICoinAssets } from "../../repositories/models/CoinAssets";
import { CoinListItem } from "../organisms/CoinListItem";

interface IProps {
    getCoinAssets:
        (currency: string, order: string, limit: number, page: number, sparkline: boolean) => void;
    coinAssetsList: ICoinAssets[];
    isLoading: boolean;
    apiError: string;
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

function CoinsListContainer(props: IProps) {
    const { coinAssetsList, getCoinAssets, apiError, isLoading } = props;

    useEffect(() => {
        getCoinAssets('inr', 'market_cap_desc', 10, 1, false);
    }, []);
    
    const renderItem = ({ item }) => {
        return (
        <CoinListItem item={item} />
      )};

    const keyExtractor = (item: ICoinAssets) => item.id;

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator size="large" /> :
             <FlatList
                data={coinAssetsList}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
            />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinsListContainer);
