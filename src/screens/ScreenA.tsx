import React from "react";

import {SafeAreaView, Text, View} from "react-native";
import { StyleSheet } from "react-native";
import CoinsListContainer from "../components/containers/CoinsListContainer";

export default function ScreenA() {
    return (
        <SafeAreaView style={styles.container}>
            <CoinsListContainer />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
});

