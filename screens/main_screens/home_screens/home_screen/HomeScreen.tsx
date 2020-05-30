//import liraries
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


// import for firebase componenet
import auth from '@react-native-firebase/auth';

// import for navigation
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    NavigationActions,
    } from 'react-navigation';

// import for grid view
import { SectionGrid } from 'react-native-super-grid';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
 
interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}


// create a component
class HomeScreen extends Component<Props> {

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

        console.log('[HomeScreen]: component mounted');
        this.getCurrentUser();
        /*
        // this.checkIfLoggedIn();
        auth().onAuthStateChanged((user) => {
            console.log("[HomeScreen]: AUTH STATE CHANGED CALLED");
            if (user){
                // this.props.navigation.navigate('HomeScreenTabNavigator', {email: user.email});
                this.getCurrentUser();
            }
            else{
                // this.props.navigation.navigate('LoginScreen');
            }
        })
        */
    }


    render() {
        return (
            <View style={styles.container}>
                { /* Central Section Grid */ }
                <SectionGrid
                    style={ styles.homeGridView }
                    itemDimension={ SectionGrid_ItemDimension }
                    sections={[
                        {
                            title: 'Sections(should be hidden)',
                            data: sectionItems           
                        },
                    ]}

                    // render the items from the data attribute defined 
                    // in the sections
                    renderItem={({ item }) => ( 

                        // define each section area as user interactable
                        <TouchableOpacity 
                            style={[styles.itemContainer]}
                            onPress={ () => {
                                this.props.navigation.navigate( item.routeName );
                                /*
                                this.props.navigation.navigate( 'Home', 
                                    {},
                                    NavigationActions.navigate({
                                        routeName: item.routeName
                                    }) 
                                );
                                */
                            }}
                        >
                            { /* Insert icon to each section area */}
                            <Icon   type={item.iconType} 
                                    name={item.iconName}
                                    size={50}
                            ></Icon>

                            { /* Insert tag text to each section area */}
                            <Text>{item.displayName}</Text> 

                        </TouchableOpacity>
                    )}
                    spacing={ SectionGrid_Spacing }
                >
                </SectionGrid>
            </View>


        );
    }

    /****************************************
     * get the email of current authenticated user
     ****************************************/
    getCurrentUser = () => {
        this.setState( { email: auth().currentUser?.email } );
    }

    /****************************************
     * This function should be used to check
     * the authentication status
     ****************************************/
    checkIfLoggedIn = async () => {

       auth().onAuthStateChanged((user) => {
           console.log("[HomeScreen]: AUTH STATE CHANGED CALLED");
           if (user){
               //this.props.navigation.navigate('HomeScreenTabNavigator', {email: user.email});
               this.getCurrentUser();
           }
           else{
               this.props.navigation.navigate('LoginScreen');
           }
       })
       
    };
}

/****************************************
 * This function should return a rendered
 * jsx that creates a icon
 ****************************************/
class ScheduleIcon {
    render() {
        return (
            <Icon type='material-community' name='calendar-check' size={25} ></Icon>
        );
    }
}

// constants used for component styling
const SectionGrid_ItemDimension = 120;
const SectionGrid_Spacing = 25;

/****************************************
 * Constants used to construct the items
 * in grid section
 ****************************************/
const sectionItems = [
    {   
        displayName: 'Schedule', 
        routeName: 'ScheduleScreen',
        iconType: 'material-community', 
        iconName: 'calendar-check', 
    },
    {   
        displayName: 'Product', 
        routeName: 'ProductScreen', 
        iconType: 'material-community', 
        iconName: 'food-apple-outline' 
    },
    {   
        displayName: 'Deal', 
        routeName: 'DealScreen', 
        iconType: 'material-community', 
        iconName: 'tag-text-outline' 
    },
    {   
        displayName: 'Content', 
        routeName: 'ContentScreen', 
        iconType: 'material-community', 
        iconName: 'subtitles-outline' 
    },
    {   
        displayName: 'Order', 
        routeName: 'OrderScreen', 
        iconType: 'material-community', 
        iconName: 'briefcase-outline' 
    },
    {   
        displayName: 'Message', 
        routeName: 'MessageScreen', 
        iconType: 'material-community', 
        iconName: 'message-text-outline' 
    },
  ];

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    homeGridView: {
        marginTop: 100,
        marginHorizontal: 20,
        flex: 1,
    },

    itemContainer: {
        //justifyContent: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 5,
        padding: 0,
        height: 150,
        width: 150,
    },

    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    }
});

//make this component available to the app
export default HomeScreen;
