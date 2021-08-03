import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICoinAssets } from "../../repositories/models/CoinAssets";

interface IProps {
  item: ICoinAssets;
}

export function CoinListItem(props: IProps) {
  const { name, id, image, current_price, symbol } = props.item;
  return (
    <View style={styles.item} key={id}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View style={styles.titleAndSubtextt}>
        <Text style={styles.title}>{name}</Text>
        <Text
          style={styles.subtext}
        >{`${current_price} ${symbol.toUpperCase()}`}</Text>
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
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  subtext: {
    fontSize: 12,
    color: "#616161",
    marginTop: 6,
    fontWeight: "700",
  },
  image: {
    width: 40,
    height: 40,
  },
  titleAndSubtextt: {
    paddingHorizontal: 10,
  },
});
