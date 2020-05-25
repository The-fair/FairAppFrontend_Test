//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TabBarIOS } from 'react-native';

// import for firebase componenet
import auth from '@react-native-firebase/auth';

// import for navigation
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState
    } from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

// import for tab bar 
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from './home_subscreens/HomeScreen';
import CalendarScreen from './home_subscreens/CalendarScreen';
import TempScreen_1 from './home_subscreens/TempScreen_1';
import TempScreen_2 from './home_subscreens/TempScreen_2';
import VendorProfileScreen from './home_subscreens/VendorProfileScreen';

// import for text input icon
import { Icon } from 'react-native-elements';

// enable screen
import { enableScreens } from 'react-native-screens';
enableScreens();



const TabBarItem = createBottomTabNavigator();

// create a component
class HomeScreenTabNavigator extends Component {
    render() {
        return (
            //<NavigationContainer>
                <TabBarItem.Navigator 
                    initialRouteName='HomeScreen'
                    screenOptions={({ route}) => ({
                        tabBarIcon: ({ focused, color, size}) => {
                            let iconName = 'access-point';
                            if (route.name === 'Profile'){
                                iconName = focused ? 'account'
                                : 'account-outline';
                            }
                            else if (route.name === 'Calendar'){
                                iconName = focused ? 'calendar' : 'calendar-check';
                            }

                            return <Icon type='material-community' name={iconName} size={size} color={color} />;
                        },
                    })}
                >
                    
                    <TabBarItem.Screen name="HomeScreen" component={HomeScreen} />
                    <TabBarItem.Screen name="Calendar" component={CalendarScreen} />
                    <TabBarItem.Screen name="TempScreen_1" component={TempScreen_1} />
                    <TabBarItem.Screen name="TempScreen_2" component={TempScreen_2} />
                    <TabBarItem.Screen name="Profile" component={VendorProfileScreen} />
                </TabBarItem.Navigator>
            //</NavigationContainer>
        );
    }
}

/*
class HomeScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Home </Text>
            </View>
        )
    }
}
*/

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default HomeScreenTabNavigator;
