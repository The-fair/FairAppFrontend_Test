//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import for firebase componenet
import auth from '@react-native-firebase/auth';


// import for navigation
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
    } from 'react-navigation';


// create a component
class HomeScreen extends Component {

    /****************************************
     * global state of the login screen
     ****************************************/
    state = {
        // Regular Login Info
        email: '',
    }

    /****************************************
     * occur on load of the screen
     ****************************************/
    componentDidMount() {
        this.getCurrentUser();
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Text> { this.state.email } </Text>
            </View>
        );
    }

    /****************************************
     * get the email of current user
     ****************************************/
    getCurrentUser = () => {
        
        this.setState( { email: auth().currentUser?.email } );
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
export default HomeScreen;
