//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
    } from 'react-navigation';

//import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
//import firebase from 'firebase';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


// create a component
class LoadingScreen extends Component<Props> {

    componentDidMount() {
        this.checkIfLoggedIn();
    }

    // This function should be used to check the authentication status
    checkIfLoggedIn = async () => {
        /*
        if (true) {
            //this.navigate('LoginScreen');
            this.props.navigation.navigate('LoginScreen');
        }
        */

       
       auth().onAuthStateChanged((user) => {
           console.log("AUTH STATE CHANGED CALLED");
           if (user){
               this.props.navigation.navigate('DashboardScreen');
           }
           else{
               this.props.navigation.navigate('LoginScreen');
           }
       })
       
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    /****************************************
     * check if the firebase user is the same 
     * as the google user
     ****************************************/
    
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
export default LoadingScreen;
