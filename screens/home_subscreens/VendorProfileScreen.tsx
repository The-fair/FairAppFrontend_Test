//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { firebase } from '@react-native-firebase/auth';


// create a component
class VendorProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>VendorProfileScreen</Text>
                <Button title="Sign out" onPress={() => firebase.auth().signOut()} />
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
export default VendorProfileScreen;
