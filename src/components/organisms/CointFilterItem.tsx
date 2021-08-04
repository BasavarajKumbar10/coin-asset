import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICoinAssets } from "../../repositories/models/CoinAssets";
import ISwitch from '../atoms/ISwitch';

interface IProps {
    item: ICoinAssets;
    onChange: (isEnabled: boolean, symbol: string) => void;
    isEnabled: boolean;
}

function CoinFilterItem(props: IProps) {
    const { onChange, item, isEnabled } = props;
    const { name, image, symbol } = item;

    const updateSelection = (isEnabled: boolean) => {
        onChange(isEnabled, symbol);
    }

    return (
        <View style={styles.item}>
            <View style={styles.left}>
                <Image
                    style={styles.image}
                    source={{
                        uri: image,
                    }}
                />
                <Text style={styles.title}>{name}</Text>
            </View>
            <ISwitch onChange={updateSelection} isEnabled={isEnabled}/>
        </View>
    );
}

export default memo(CoinFilterItem);

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: 'grey'
    },
    title: {
        fontSize: 16,
        fontWeight: "700",
        marginLeft: 10,
    },
    image: {
        width: 30,
        height: 30,
    },
    left: {
        display: "flex",
        flexDirection: "row",
    },
    switchHolder: {

    }
});
