//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

// import statusCodes along with GoogleSignin
import { statusCodes } from '@react-native-community/google-signin';

// import for background image
import { ImageBackground, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

// import for text input icon
import { Icon } from 'react-native-elements';
import auth from '@react-native-firebase/auth';

// import for navigation
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
    } from 'react-navigation';
import { StackActions } from '@react-navigation/native';

// constants
const BGIMAGE = require('../assests/images/Temp_BG_Image.jpeg');
const LOGOIMAGE = require('../assests/images/Fair_Logo_Image.png');

const { width: WIDTH } = Dimensions.get('window');

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class LoginScreen extends Component<Props> {

    /****************************************
     * called on done loading the screen
     ****************************************/
    componentDidMount() {
        GoogleSignin.configure();
    }

    /****************************************
     * global state of the login screen
     ****************************************/
    state = {

        // Regular Login Info
        email: '',
        password: '',
        passwordSecured: true,

        // Google Login Info
        isLoggedIn: false,
        user: [],

    }

    /****************************************
     * render the screen
     ****************************************/
    render() {
        return (            
            <View style={styles.container}>

                <ImageBackground source={BGIMAGE} style={styles.backgroundContrainer}>
                
                    {/* Logo Container */}

                    <View style={styles.logoContainer}>
                        <Image source={LOGOIMAGE} style={styles.logoImage} />
                        <Text style={styles.logoText}>Faaaaaairrrrrr</Text>
                    </View>
                    
                    {/* Email Container */}

                    <View style={styles.emailSectionContainer}>
                        <Icon type='material-community' name={'email-outline'} size={25} color={'rgba(255, 255, 255, 0.7)'} style={styles.emailTextInputIcon}/>
                        <TextInput style={styles.emailTextInput}
                            placeholder={'Email'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid='transparent'
                            autoCapitalize = 'none'

                            // handler to set the state value on text change
                            onChangeText = {this.handleEmailTextInput}
                        />
                    </View>

                    {/* Password Container */}

                    <View style={styles.passwordSectionContainer}>
                        <Icon type='material-community' name={'key-outline'} size={25} color={'rgba(255, 255, 255, 0.7)'} style={styles.passwordTextInputIcon}/>
                        <TextInput style={styles.passwordTextInput}
                            placeholder={'Password'}

                            // the visibility is changed according to state value
                            secureTextEntry={this.state.passwordSecured}

                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid='transparent'

                            // handler to set the state value on text change
                            onChangeText = {this.handlePasswordTextInput}
                        />

                        <TouchableOpacity style={styles.passwordVisibleBtn}  
                            // function to call on press 
                            onPress={() =>{
                                this.changePasswordVisibility();
                            }}
                        >
                            <Icon type='material-community' name={this.state.passwordSecured == false ? 'eye-outline' : 'eye-off-outline'} size={25} color={'rgba(255, 255, 255, 0.7)'}></Icon>

                        </TouchableOpacity>
                    </View>

                    {/* Submission Container */}
                    <View style={styles.submissionContainer}>

                        <TouchableOpacity style={styles.signInButton}
                            onPress={
                                this.handleLoginButtonOnPress
                            }
                        >
                            <Text style={styles.submissionBtnText}> Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.signUpButton}
                            onPress={
                                this.handleSignUpButtonOnPress
                                //this.firebaseSignUp
                                //()=>alert('sign up button pressed')
                                
                            }
                        >
                            <Text style={styles.submissionBtnText}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Google Signin Container */}
                    <GoogleSigninButton
                        style={styles.GoogleSigninButton}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={() => this.googleSignIn}
                    />
                    {/*  Google  */}
                </ImageBackground>
            </View>
            
        );
    }


    /****************************************
     * change the visibility of the password
     * on input
     ****************************************/
    changePasswordVisibility() {
        var visibility = !this.state.passwordSecured;
        this.setState({ passwordSecured: visibility});
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

    /****************************************
     * Handle the action taken when press the login button
     ****************************************/
    handleLoginButtonOnPress = async () => {

        auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            console.log('[LoginScreen]: User account signed in!');
        })
        .then(() => {
            //this.props.navigation.navigate('HomeScreenTabNavigator', { email:this.state.email});
        })
        .catch( error => {
            if (error.code === 'auth/invalid-email') {
                console.log('[LoginScreen]: That email address is invalid');
            }

            console.error(error);
        })
    }

    /****************************************
     * Handle the action taken when press the sign uo button
     ****************************************/
    handleSignUpButtonOnPress = () => {
        this.props.navigation.navigate('SignUpScreen');
    }

    /****************************************
     * Google login function
     ****************************************/
    
    googleSignIn = async () => {
        try {
            //await GoogleSignin.hasPlayServices( { showPlayServicesUpdateDialog: true } );
            await GoogleSignin.hasPlayServices();
            this.setState({ isSigninInProgress: true });
            const userInfo = await GoogleSignin.signIn();
            this.setState({ user: userInfo.user, isLoggedIn: true });
            console.log(userInfo);
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('ERROR: Google Login Cancelled');
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('ERROR: Google login In Porgress');
                // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('ERROR: Google Login Not Available');
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },

    backgroundContrainer: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },

    logoContainer: {
        marginTop: -75,
        alignItems: "center",
    },

    logoImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },

    logoText: {
        marginTop: 15,
        color: 'white',
        fontSize: 20,
        fontFamily: 'Verdana-Bold',
        fontWeight: '500',
        opacity: 0.7
    },

    emailSectionContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 45,
        width: WIDTH / 1.5,

    },

    emailTextInput: {
        flex: 1,
        //marginHorizontal: 10,
        //width: WIDTH / 2,
        height: 35,
        //borderRadius: 45,
        fontSize: 16,
        paddingLeft: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        color: 'rgba(255, 255, 255, 0.7)',
    },

    emailTextInputPH: {

    },

    emailTextInputIcon: {
        //position: 'absolute',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
    },

    passwordSectionContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        color: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 45,
        width: WIDTH / 1.5,

    },

    passwordTextInput: {
        flex: 1,
        //marginHorizontal: 10,
        //width: WIDTH / 2,
        height: 35,
        //borderRadius: 45,
        fontSize: 16,
        paddingLeft: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        color: 'rgba(255, 255, 255, 0.7)',
    },

    passwordTextInputPH: {

    },

    passwordTextInputIcon: {
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 15,
    },

    passwordVisibleBtn: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
    },

    submissionContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        width: WIDTH / 1.5,
    },

    submissionBtnText: {
        fontSize: 18,
        //fontFamily: 'Farah',
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.7)',
        textAlign: 'center',
    },

    signInButton: {
        borderRadius: 40,
        //borderWidth: 1,
        //borderColor: 'white',
        height: 40,
        //marginLeft: 10,
        //marginRight: 10,
        width: WIDTH / 1.5 * 0.45,
        //width: '40%',
        backgroundColor: 'rgba(10, 186, 181, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    signUpButton: {
        borderRadius: 40,
        //borderWidth: 1,
        //borderColor: 'white',
        height: 40,
        //marginLeft: 10,
        //marginRight: 10,
        width: WIDTH / 1.5 * 0.45,
        //width: '40%',
        backgroundColor: 'rgba(186, 0, 0, 0.9))',
        justifyContent: 'center',
        alignItems: 'center',
    },

    GoogleSigninButton: {
        marginTop: 15,
        width: 192,
        height: 48,
    }
});

//make this component available to the app
export default LoginScreen;

