import React, { useCallback } from "react";
import { connect } from 'react-redux';
import { updateFilters } from '../../redux/coinAssets/actions';
import { getFiltersListSelector } from "../../redux/coinAssets/selector";
import { IAppState } from "../../redux/reduxStateInterface";
import CoinsListContainer from './CoinsListContainer';
import { CoinFilterItem } from '../organisms/CointFilterItem';

interface IProps {
    updateFilters:
        (filters: string[]) => void;
    filtersList: string[];
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        updateFilters:  (filters: string[]) =>
            dispatch(updateFilters(filters)),
    };
};

export const mapStateToProps = (state: IAppState) => {
    return {
        filtersList: getFiltersListSelector(state),
    };
};

function CoinsFilterContainer(props: IProps) {
    const { updateFilters, filtersList } = props;

    const updateUserSelection = useCallback((isEnabled: boolean, symbol: string) => {
        let updatedFilter;
        if(isEnabled) {
            updatedFilter = [...filtersList, symbol];
        } else {
            updatedFilter = filtersList.filter((coin: string) => coin !== symbol);
        }
        updateFilters(updatedFilter);
    }, [filtersList])

    const isSelected = (symbol: string) => {
        const found = filtersList.find((coin: string) => coin === symbol)
        return found !== undefined;
    };

    const renderItem = ({ item }) => {
        const isEnabled = isSelected(item.symbol);
        return (
            <CoinFilterItem item={item} onChange={updateUserSelection} isEnabled={isEnabled}/>
        )
    };

    return <CoinsListContainer renderItem={renderItem} />

}

export default connect(mapStateToProps, mapDispatchToProps)(CoinsFilterContainer);
