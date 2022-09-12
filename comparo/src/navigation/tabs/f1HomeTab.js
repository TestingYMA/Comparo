import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DriversScreen } from '../../screens/driversScreen';
import { FavouritesScreen } from '../../screens/favouritesScreen';
import { TeamsScreen } from '../../screens/teamsScreen';


const DriversStack = createNativeStackNavigator();
function DriversStackScreen() {
    return (
        <DriversStack.Navigator>
            <DriversStack.Screen
                name="DriversScreen"
                component={DriversScreen}
                options={{ tabBarLabel: 'Drivers' }}
            />
        </DriversStack.Navigator>
    );
}

const TeamsStack = createNativeStackNavigator();
function TeamsStackScreen() {
    return (
        <TeamsStack.Navigator>
            <TeamsStack.Screen
                name="TeamsScreen"
                component={TeamsScreen}
                options={{ tabBarLabel: 'Teams' }}
            />
        </TeamsStack.Navigator>
    );
}

const FavouritesStack = createNativeStackNavigator();
function FavouritesStackScreen() {
    return (
        <FavouritesStack.Navigator>
            <FavouritesStack.Screen
                name="FavouritesScreen"
                component={FavouritesScreen}
                options={{ tabBarLabel: 'Favourites' }}
            />
        </FavouritesStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
function F1HomeTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Drivers" component={DriversStackScreen} />
                <Tab.Screen name="Teams" component={TeamsStackScreen} />
                <Tab.Screen name="Favourites" component={FavouritesStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default F1HomeTab;