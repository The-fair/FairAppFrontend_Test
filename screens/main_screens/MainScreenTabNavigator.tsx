//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TabBarIOS } from 'react-native';

// import for firebase componenet
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

// import for tab bar 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreenSectionNavigator from './home_screens/HomeScreenSectionNavigator';
import ProfileScreen from './profile_screens/ProfileScreen';
import StoreScreen from './store_screens/StoreScreen';

// import for text input icon
import { Icon } from 'react-native-elements';

// enable screen
import { enableScreens } from 'react-native-screens';
enableScreens();


const TabBarItem = createBottomTabNavigator();

/*
const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Home' })]
})
*/
//this.props.navigation.dispatch(resetAction);



// create a component
class MainScreenTabNavigator extends Component<Props> {


    componentDidMount() {
        //console.log('[MainScreenTabNavigator]: component mounted');
        //this.props.navigation.
    }

    render() {
        return (
                // customized tab bar item
                <TabBarItem.Navigator 
                    initialRouteName='Home'
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size}) => {
                            
                            // default icon name
                            let iconName = 'access-point';

                            // navigate to different screen from tabbar
                            if (route.name === 'Profile'){
                                iconName = focused ? 'account'
                                : 'account-outline';
                            }
                            else if (route.name === 'Store'){
                                iconName = focused ? 'store' : 'store';
                            }
                            else if (route.name === 'Home'){
                                iconName = focused ? 'home' : 'home';
                            }

                            return <Icon type='material-community' name={iconName} size={size} color={color} />;
                        },
                    })}
                >
                    
                    {/* List the navigation stack */}
                    <TabBarItem.Screen name="Home" component={HomeScreenSectionNavigator} />
                    <TabBarItem.Screen name="Store" component={StoreScreen} />
                    <TabBarItem.Screen name="Profile" component={ProfileScreen} />
                </TabBarItem.Navigator>
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
export default MainScreenTabNavigator;
