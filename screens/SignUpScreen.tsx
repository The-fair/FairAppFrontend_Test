//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// import from firebase
import { firebase } from '@react-native-firebase/auth';

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
        errorMessage: '',

        // Google Login Info
        isLoggedIn: false,
        user: [],
        //isSigninInProgress: false,

    }

    /****************************************
     * handle sign up
     ****************************************/
    handleSignUp = () => {
        // construct a variable
        const { email, password } = this.state

        // firebase sign up 
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => this.props.navigation.navigate('DashboardScreen'))
        .catch(error => this.setState({
            errorMessage: error.message
        }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Sign Up</Text>

                {/*  Check if there is error message  */}
                {this.state.errorMessage && 
                    <Text style={{ color: 'red' }}>
                        {this.state.errorMessage}
                    </Text>}

                {/*  Password Input  */}
                <TextInput
                    placeholder='Email'
                    autoCapitalize='none'
                    style={styles.emailTextInput}
                    onChangeText={email => this.setState({
                        email
                    })}
                    value={this.state.email}
                />

                <TextInput
                    secureTextEntry
                    placeholderTextColor='Password'
                    autoCapitalize='none'
                    style={styles.passwordTextInput}
                    onChangeText={password => this.setState({
                        password
                    })}
                    value={this.state.password}
                />

                
                <TouchableOpacity style={styles.signUpBtn}  
                        // function to call on press 
                        onPress={() =>{
                            this.handleSignUp;
                        }}
                    >
                        <Text>
                            Sign Up
                        </Text>
                </TouchableOpacity>
                
            </View>
        );
    }

    /****************************************
     * Firebase login function
     ****************************************/
    firebaseSignUp = async() => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('DashboardScreen'))
        .catch(error => this.setState(
            {
                errorMessage: error.message
            }
        ))
    }

}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
