import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeDashboardScreen } from '../screens/homeDashboardScreen';
import { SplashScreen } from '../screens/splashScreen';
import { F1HomeTab } from '../navigation/tabs';

const rootStack = createNativeStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
            <rootStack.Navigator initialRouteName="Home">
                <rootStack.Screen name="SplashScreen" component={SplashScreen} />
                <rootStack.Screen name="Home" component={HomeDashboardScreen} />
                <rootStack.Screen name="F1HomeTab" component={F1HomeTab} />
            </rootStack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;