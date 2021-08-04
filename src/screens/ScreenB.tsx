import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import CoinsFilterContainer from '../components/containers/CoinsFilterContainer';

export default function ScreenB() {

    return (
        <SafeAreaView style={styles.container}>
            <CoinsFilterContainer />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

