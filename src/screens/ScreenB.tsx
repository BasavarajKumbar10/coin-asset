import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import CoinsListContainer from '../components/containers/CoinsListContainer';
import { CoinFilterItem } from '../components/organisms/CointFilterItem';

export default function ScreenB() {
    const renderItem = ({ item }) => {
        return (
            <CoinFilterItem item={item} />
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
        backgroundColor: '#fff',
    },
});

