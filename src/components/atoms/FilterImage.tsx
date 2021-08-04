import React from 'react';
import images from '../../assets';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface IProps {
    onPress: () => void;
}

export default function (props: IProps) {
    return (
        <TouchableOpacity style={styles.imageHolder} onPress={props.onPress}>
            <Image style={styles.img} source={images.filter}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageHolder: {
        paddingHorizontal: 16,
    },
    img: {
        width: 30,
        height: 30,
    }
});
