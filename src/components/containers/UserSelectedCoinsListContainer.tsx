import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { getAssets } from '../../redux/coinAssets/actions';
import {
    getCoinAssetsListSelector,
    getFiltersListSelector,
    isCoinAssetsErrorSelector,
    isCoinAssetsLoadingSelector
} from "../../redux/coinAssets/selector";
import { FlatList, StyleSheet, View } from "react-native";
import { IAppState } from "../../redux/reduxStateInterface";
import { ICoinAssets } from "../../repositories/models/CoinAssets";
import CoinListItem from "../organisms/CoinListItem";
import { COIN_ASSETS_LIMIT, CURRENCY, ORDER, POLL_INTERVAL } from '../../constants/AppConfigs';
import ApiError from '../molecules/ApiError';
import { DISPLAY_MESSAGES } from '../../constants/UserDisplayConstants';
import ISpinner from '../atoms/ISpinner';
import EmptyMessage from '../molecules/EmptyMessage';

interface IProps {
    getCoinAssets:
        (currency: string, order: string, limit: number, page: number, sparkline: boolean) => void;
    coinAssetsList: ICoinAssets[];
    isLoading: boolean;
    apiError: string;
    filtersList: string[];
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
        filtersList: getFiltersListSelector(state),
    };
};

function UserSelectedCoinsListContainer(props: IProps) {
    const { coinAssetsList, getCoinAssets, apiError, isLoading, filtersList } = props;

    // states
    const [userSelectedCoins, setUserSelectedCoins] = useState([] as ICoinAssets[]);

    const getData = () => {
        getCoinAssets(CURRENCY, ORDER, COIN_ASSETS_LIMIT, 1, false);
    }

    // hooks
    useEffect(function onMount() {
        // refresh data for every 30sec
        const poll = setInterval(getData, POLL_INTERVAL);

        return () => {
            clearInterval(poll);
        }
    }, []);

    useEffect(function processData() {
        if(!isLoading && coinAssetsList) {
            const selectedCoins: ICoinAssets[] = [];
            coinAssetsList.forEach((item) => {
                filtersList.forEach((selected) => {
                    if(selected === item.symbol) {
                        selectedCoins.push(item);
                    }
                });
            });
            setUserSelectedCoins(selectedCoins);

        }
    }, [coinAssetsList, isLoading, filtersList]);

    const keyExtractor = (item: ICoinAssets) => item.id;

    // @ts-ignore
    const renderItem = ({ item }) => {
        return (
            <CoinListItem item={item} />
        )};

    if(!isLoading && apiError) {
        return (
            <ApiError />
        );
    };

    if(!isLoading && userSelectedCoins.length === 0) {
        return <EmptyMessage message={DISPLAY_MESSAGES.noWatchlist} />
    }
    return (
        <View style={styles.container}>
            {isLoading ? <ISpinner /> :
                <FlatList
                    data={userSelectedCoins}
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
    noWatchlist: {
        fontSize: 20,
        fontWeight: "600",
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserSelectedCoinsListContainer);
