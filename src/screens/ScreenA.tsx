import React from "react";

import { Button, SafeAreaView, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import CoinsListContainer from "../components/containers/CoinsListContainer";
import FilterImage from '../components/atoms/FilterImage';
import { screenNames } from './screens';
import { CoinListItem } from '../components/organisms/CoinListItem';

interface IProps {
    navigation: any;
}
export default function ScreenA(props: IProps) {
    const { navigation } = props;

    const openScreenB = () => navigation.navigate(screenNames.screenB);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <FilterImage onPress={openScreenB}/>
            ),
        });
    }, [navigation]);

    const renderItem = ({ item }) => {
        return (
            <CoinListItem item={item} />
        )};


    return (
        <SafeAreaView style={styles.container}>
            <CoinsListContainer renderItem={renderItem} />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
});

