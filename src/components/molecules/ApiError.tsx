import React from 'react';
import { Text } from 'react-native';
import { DISPLAY_MESSAGES } from '../../constants/UserDisplayConstants';

export default function () {
    return (
        <Text>{DISPLAY_MESSAGES.apiError}</Text>
    )
}
