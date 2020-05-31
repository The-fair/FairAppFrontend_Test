//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import DropDownPicker from 'react-native-dropdown-picker';

// create a component
class ProductScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home_ProductScreen</Text>
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
export default ProductScreen;
