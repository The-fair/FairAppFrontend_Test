//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    NavigationActions,
    StackActions,
    } from 'react-navigation';


import auth from '@react-native-firebase/auth';
//import firebase from 'firebase';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


// create a component
class LoadingScreen extends Component<Props> {  

    componentDidMount() {
        console.log('[LoadingScreen]: component mounted');

        //this.checkIfLoggedIn();
        auth().onAuthStateChanged((user) => {
            console.log("[LoadingScreen]: AUTH STATE CHANGED CALLED");
            if (user){
                this.props.navigation.navigate(
                    'MainScreenTabNavigator', 
                    {},
                    
                    /*
                    NavigationActions.navigate({
                        routeName:'HomeScreen'
                    })
                    */
                 );
            }
            else{
                //this.props.navigation.dispatch(StackActions.popToTop());
                //this.props.navigation.reset
                this.props.navigation.navigate('LoginScreen');
                //this.props.navigation.
                /*
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({
                        routeName: 'LoginScreen'
                    })],
                });
                this.props.navigation.dispatch(resetAction);
                */
            }
        })
    }

    // This function should be used to check the authentication status
    // I think onAuthStateChanged is on all the time
    checkIfLoggedIn = async () => {       
       auth().onAuthStateChanged((user) => {
           console.log("[LoadingScreen]: AUTH STATE CHANGED CALLED");
           if (user){
               this.props.navigation.navigate(
                   'MainScreenTabNavigator', 
                   {email: user.email},
                   NavigationActions.navigate({
                       routeName:'HomeScreen'
                   })
                );
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
