import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ICoinAssets } from "../../repositories/models/CoinAssets";
import { addFixedDecimals } from '../../utils/NumberUtils';

interface IProps {
  item: ICoinAssets;
}

export function CoinListItem(props: IProps) {
  const { name, image, current_price, symbol, price_change_percentage_24h } = props.item;
  return (
      <View style={styles.item} >
        <View style={styles.left}>
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
            >{`${current_price?.toFixed(3)} ${symbol.toUpperCase()}`}</Text>
          </View>
        </View>
        <View style={styles.priceAndChange}>
          <Text style={styles.price}>{addFixedDecimals(current_price)}</Text>
          <Text
              style={styles.change}
          >{`${addFixedDecimals(price_change_percentage_24h)}`}</Text>
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
  priceAndChange: {

  },
  price: {
    color: '#000',
    fontWeight: "900",
    fontSize: 16,
    textAlign: "right"
  },
  change: {
    marginTop: 6,
    color: "green",
    textAlign: "right"
  },
  left: {
    display: "flex",
    flexDirection: "row",
  }
});
