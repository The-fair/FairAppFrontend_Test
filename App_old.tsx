import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';


class App extends Component  {
  /*
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    }
  }
  */
  
  state = {
    data: '',
    isLoading: true
  }
  
  /*
  componentDidMount() {
    return fetch('http://34.86.159.162:3000/api/customers')
    //return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      const myCustomer = JSON.stringify(responseJson);
      console.log(myCustomer);
      //return responseJson;
      this.setState({
        data: myCustomer
      });
      return myCustomer;
    })
    .catch((error) => {
      //console.log('failed');
      console.error(error);
    })
  }
  */

  onPress = () => {
    this.getCustomerTest();
    //const customerStr = JSON.stringify(customerInfo);
    //console.log(customerInfo);
    //console.log(customerStr);
/*
    this.setState({
      data: customerStr
    });
    */
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity 
        style={styles.button}
        onPress={this.onPress}
        >
          <Text>DB Test</Text>
        </TouchableOpacity>
        <View style={styles.countContainer}>
          <Text>
            {this.state.data}
          </Text>
        </View>
      </View>
    )
  }

  getCustomerTest() {
    return fetch('http://34.86.159.162:3000/api/customers')
    //return fetch('https://reactnative.dev/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      //console.log("successful");
      const myCustomer = JSON.stringify(responseJson);
      //console.log(myCustomerId);
      //console.log(responseJson);
      this.setState({
        data: myCustomer
      });
      return responseJson;
      //return myCustomerId;
    })
    .catch((error) => {
      //console.log('failed');
      console.error(error);
    })
  }
}

/*
async function getCustomerTest() {
  
  
  try {
    let response = await fetch(
      'http://reactnative.dev/movies.json'
    );

    let json = await response.json();
    //console.log(json.movies);
    return json.movies;
  } 
  catch (error) {
    console.error(error);
  }
  
}
*/


/*
function getCustomerTest() {
  return fetch('http://34.86.159.162:3000/api/customers')
  //return fetch('https://reactnative.dev/movies.json')
  .then((response) => response.json())
  .then((responseJson) => {
    //console.log(responseJson);
    //console.log("successful");
    //const myCustomerId = JSON.stringify(responseJson);
    //console.log(myCustomerId);
    console.log(responseJson);
    return responseJson;
    //return myCustomerId;
  })
  .catch((error) => {
    //console.log('failed');
    console.error(error);
  })
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  },
  countContainer: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})


/*
function App_1() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
export default App;
