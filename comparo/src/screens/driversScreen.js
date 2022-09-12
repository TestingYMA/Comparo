import * as React from 'react';
import { View, Text } from 'react-native';

function DriversScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Drivers Screen</Text>
            <View style={{
                flex: 1,
                width: 100,
                height: 100,
            }} />
            <View style={{
                flex: 1,
                width: 100,
                height: 100,
            }} />
            <View style={{
                flex: 1,
                width: 100,
                height: 100,
            }} />
        </View>
    );
}

export default DriversScreen;