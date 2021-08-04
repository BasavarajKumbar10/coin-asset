import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICoinAssets } from "../../repositories/models/CoinAssets";
import { addFixedDecimals } from '../../utils/NumberUtils';

interface IProps {
    item: ICoinAssets;
}

export function CoinFilterItem(props: IProps) {
    const { name, id, image, current_price, symbol, price_change_percentage_24h } = props.item;
    return (
        <View style={styles.item} key={id}>
            <View style={styles.left}>
                <Image
                    style={styles.image}
                    source={{
                        uri: image,
                    }}
                />
                <Text style={styles.title}>{name}</Text>
            </View>
            <View style={styles.switchHolder}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
    },
    image: {
        width: 40,
        height: 40,
    },
    left: {
        display: "flex",
        flexDirection: "row",
    },
    switchHolder: {

    }
});
