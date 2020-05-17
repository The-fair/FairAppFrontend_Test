import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashboardScreen from './screens/DashboardScreen';



const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen:LoadingScreen,
    LoginScreen:LoginScreen,
    DashboardScreen:DashboardScreen

});

// create a component
class App extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}

const AppNavigator = createAppContainer(AppSwitchNavigator);

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

