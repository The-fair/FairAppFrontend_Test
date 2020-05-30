//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, SafeAreaView } from 'react-native';
import auth from '@react-native-firebase/auth';

// import for navigation
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    NavigationActions,
    StackActions,
    } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// create a component
class ProfileScreen extends Component<Props> {
    componentDidMount() {
        console.log('[ProfileScereen]: component mounted');
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <Text>ProfileScreen</Text>
                    <Button title="Sign out" onPress={this.signOut} />
                </ScrollView>
            </SafeAreaView>

        );
    }

    /****************************************
     * sign the user out and try to navigate 
     * back to login screen and pop all the 
     * navigation stack
     ****************************************/
    signOut() {
        //this.props.navigation.
        auth()
        .signOut()
        .then(() => {
            //this.props.navigation.dispatch(StackActions.popToTop());
        })
        .then(() => {
            console.log('User signed out')
        })
        .catch( error => {
            console.error(error);
        });
    }

    resetStack() {
        //const resetAction = NavigationActions.reset
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    scrollView: {
        //backgroundColor: 'orange',
        marginHorizontal: 20,
      },
});

//make this component available to the app
export default ProfileScreen;
