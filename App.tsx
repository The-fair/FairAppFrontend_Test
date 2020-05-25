import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer, createNavigationContainer } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreenTabNavigator from './screens/HomeScreenTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

// enable screen
import { enableScreens } from 'react-native-screens';
enableScreens();
/*
const AppSwitchNavigator = createStackNavigator(
    {
        LoadingScreen:LoadingScreen,
        LoginScreen:LoginScreen,
        DashboardScreen:DashboardScreen,
        SignUpScreen:SignUpScreen,
        HomeScreenTabNavigator:HomeScreenTabNavigator,
    },

    {
        initialRouteName: 'LoadingScreen'
    }
);

const AppNavigator = createAppContainer(AppSwitchNavigator);
*/

const StackNav = createStackNavigator();


// create a component
class App extends Component {
    render() {
        return (
            //<AppNavigator />
            <NavigationContainer>
                <StackNav.Navigator initialRouteName='LoadingScreen' headerMode='none'>
                    <StackNav.Screen name='LoadingScreen' component={LoadingScreen} />
                    <StackNav.Screen name='LoginScreen' component={LoginScreen} />
                    <StackNav.Screen name='SignUpScreen' component={SignUpScreen} />
                    <StackNav.Screen name='HomeScreenTabNavigator' component={HomeScreenTabNavigator} />
                </StackNav.Navigator>
            </NavigationContainer>

        );
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default App;

