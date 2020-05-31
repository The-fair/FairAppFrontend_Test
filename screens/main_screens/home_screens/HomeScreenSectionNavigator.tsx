//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
    } from 'react-navigation';

import { createStackNavigator } from '@react-navigation/stack';


// enable screen
import { enableScreens } from 'react-native-screens';
enableScreens();


// import screens from home_subscreens folder
import HomeScreen from './home_screen/HomeScreen'
import ScheduleScreen from './schedule_screen/ScheduleScreen';
import ProductScreen from './product_screen/ProductScreen';
import DealScreen from './deal_screen/DealScreen';
import ContentScreen from './content_screen/ContentScreen';
import OrderScreen from './order_screen/OrderScreen';
import MessageScreen from './message_screen/MessageScreen';


// create navigator stack
const Home_StackNav = createStackNavigator();


interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


// create a component
class HomeScreenSectionNavigator extends Component<Props> {
    componentDidMount() {
        //console.log('[HomeScreenSectionNavigator]: component mounted');
    }

    render() {
        return (
  
                <Home_StackNav.Navigator initialRouteName='HomeScreen' headerMode='float' >
                    <Home_StackNav.Screen 
                        name='Home' 
                        component={ HomeScreen } 
                        options={
                            {
                                headerShown: false
                            }
                        }
                    />

                    { /* TO DO: need to revise the usage of constants */}

                    { /* Schedule Screen */}
                    <Home_StackNav.Screen
                        name='ScheduleScreen'   // registered component name
                        component={ ScheduleScreen }
                    />

                    { /* Product Screen */}
                    <Home_StackNav.Screen
                        name='ProductScreen'
                        component={ ProductScreen }
                    />

                    { /* Deal Screen */}
                    <Home_StackNav.Screen
                        name='DealScreen'
                        component={ DealScreen }
                    />

                    { /* Content Screen */}
                    <Home_StackNav.Screen
                        name='ContentScreen'
                        component={ ContentScreen }
                    />

                    { /* Order Screen */}
                    <Home_StackNav.Screen
                        name='OrderScreen'
                        component={ OrderScreen }
                    />

                    { /* Message Screen */}
                    <Home_StackNav.Screen
                        name='MessageScreen'
                        component={ MessageScreen }
                    />
                </Home_StackNav.Navigator>
            
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
export default HomeScreenSectionNavigator;
