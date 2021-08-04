import React from 'react';
import { Switch } from 'react-native';

interface IProps {
    onChange: (isEnabled: boolean) => void;
    isEnabled: boolean;
}

export default function (props: IProps) {
    const { onChange, isEnabled } = props;

    return (
        <Switch
            trackColor={{ false: "#767577", true: "#736df8" }}
            thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onChange}
            value={isEnabled}
        />
    )
}

