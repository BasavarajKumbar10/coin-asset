import React, { useState } from 'react';
import images from '../../assets';
import { Image, StyleSheet, Switch, TouchableOpacity, View } from 'react-native';

interface IProps {
    onPress: () => void;
}

export default function (props: IProps) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}

