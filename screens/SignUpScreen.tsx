//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// import from firebase
import auth from '@react-native-firebase/auth';

// import for navigation
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
    } from 'react-navigation';

import { TextInput } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// create a component
class SignUpScreen extends Component<Props> {

    /****************************************
     * global state of the login screen
     ****************************************/
    state = {
        // Regular Login Info
        email: '',
        password: '',
        passwordSecured: true,
        loginMethod: '',
        errorMessage: null,

        // Google Login Info
        isLoggedIn: false,
        user: [],
        //isSigninInProgress: false,

    }

    /****************************************
     * handle sign up
     ****************************************/
    /*
    handleSignUp = async() => {
        // construct a variable
        const { email, password } = this.state
        console.log(email)
        console.log(password)

        // firebase sign up 
        auth()
        .createUserWithEmailAndPassword(email, password)
        .then(auth().signOut)
        .then(user => this.props.navigation.navigate('DashboardScreen'))
        .catch(error => console.log(error))
    }
    */

    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>

                {/*  Check if there is error message  */}


                {/*  Email Input  */}
                <TextInput
                    placeholder='Email'
                    autoCapitalize='none'
                    style={styles.emailTextInput}
                    onChangeText = {this.handleEmailTextInput}
                    value={this.state.email}
                />

                {/*  Password Input  */}
                <TextInput
                    secureTextEntry
                    placeholder='Password'
                    autoCapitalize='none'
                    style={styles.passwordTextInput}
                    onChangeText = {this.handlePasswordTextInput}
                    value={this.state.password}
                />

                {/*  Sign Up Button Pressed  */}                
                <TouchableOpacity style={styles.signUpBtn}  
                        // function to call on press 
                        onPress={ this.firebaseSignUp }
                    >
                        <Text>
                            Sign Up
                        </Text>
                </TouchableOpacity>

                {/*  Login In Button Pressed  */}   
                <TouchableOpacity style={styles.signUpBtn}  
                        // function to call on press 
                        onPress={() =>{
                            this.props.navigation.navigate('LoginScreen');
                        }}
                    >
                        <Text>
                            Already have an account? Login
                        </Text>
                </TouchableOpacity>
                
            </View>
        );
    }

    /****************************************
     * Firebase login function
     ****************************************/
    firebaseSignUp = () => {

        console.log('hi')

        console.log(this.state.email)
        console.log(this.state.password)

        auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('HomeScreenTabNavigator'))
        .catch(error => this.setState(
            {
                errorMessage: error.message
            }
        ))
    }

    /****************************************
     * Handle text change in email text input
     ****************************************/
    handleEmailTextInput = (text: string) => {
        this.setState( { email: text } );
    }

    /****************************************
     * Handle text change in password text input
     ****************************************/
    handlePasswordTextInput = (text: string) => {
        this.setState( { password: text } );
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        //backgroundColor: '#2c3e50',
    },

    emailTextInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },

    passwordTextInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },

    signUpBtn: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    },

    loginBtn: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
    }
});

//make this component available to the app
export default SignUpScreen;
