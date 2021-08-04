import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";
import FilterImage from '../components/atoms/FilterImage';
import { screenNames } from './screens';
import UserSelectedCoinsListContainer from '../components/containers/UserSelectedCoinsListContainer';

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

    return (
        <SafeAreaView style={styles.container}>
            <UserSelectedCoinsListContainer />
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
});

