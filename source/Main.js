/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'; 
import {
  AppRegistry,
  StyleSheet,
  Button,
  Image,
  TouchableElement,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
  
class MainPage extends Component {

    notification() {
      alert('notification to launch here')
    }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight style={styles.logoutTouchable} onPress={this.props.logout}>
      <Image
          style={styles.logoutButton}
           onPress={this.props.logout} 
          
          // source={{uri: 'https://cdn4.iconfinder.com/data/icons/miu/24/common-logout-signout-exit-glyph-128.png'}} 
          source={require('../img/logout.png')}
          />
        </TouchableHighlight>
        <TouchableOpacity style={styles.gpsButton} onPress={this.props.toGPS}>
            <Text style={styles.buttonText}>View Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton} onPress={this.props.notification}>
            <Text style={styles.buttonText}>Alert!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton} onPress={this.props.extras}>
            <Text style={styles.buttonText}>Test Environment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationButton} onPress={this.props.toList}>
          <Text style={styles.buttonText}>ListView</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.notificationButton} onPress={this.props.toDemo}>
          <Text style={styles.buttonText}>Pin Demo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    alignSelf: 'stretch'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    height: 30,
    fontSize: 20,
  },
  gpsButton: {
    backgroundColor: 'green',
    alignSelf: 'stretch',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  notificationButton: {
    backgroundColor: 'blue',
    alignSelf: 'stretch',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  logoutTouchable: {
  position: 'absolute', 
  top: 10, 
  right: 10,
},
  logoutButton: {
  width: 20, 
  height: 20, 
  }
});

export default MainPage;
