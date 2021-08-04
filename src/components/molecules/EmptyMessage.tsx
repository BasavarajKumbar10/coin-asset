import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
    message: string;
}
export default function (props: IProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.message}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
    },
    message: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center"
    }
});
